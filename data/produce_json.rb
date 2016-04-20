require 'JSON'

class DataProducer
  def initialize
    @orgs=[]
    @limit = 300
    @counter = 0
    @collations = {}
  end
  def collate(type, list)
    @collations[type] ||= []
    list.each do |item|
      if !@collations[type].include?(item)
        @collations[type].push item
      end
    end
  end
  
  def pad(l)
    if (l.size % 3) != 0
      (1..((3-l.size%3))).each do |i|
        l.push rand(2000).to_s #''
      end
    end
  end

  def create_data(filename)
    File.open(filename).readlines.each do |l|
      @counter+=1
      next if @counter == 1
      break unless @counter <= @limit

      h = {}
      fields =l.split /\t/

      h[:id] = @counter - 1
      h[:name] = fields[1].strip
      h[:description] = fields[3].strip
      h[:short_desc] = h[:description][0..45] + '...'

      h[:skill_level] = fields[7].split(/\s*,\s*/)
      h[:age_range] = fields[11].split(/\s*,\s*/)
      h[:price_range] = fields[16]

      collate :skills, h[:skill_level]
      collate :ages, h[:age_range]
      
      h[:logo_link] = "img/#{h[:name].downcase.gsub(/\s+/, '_')}.png"
  
      h[:areas] = fields[5].split(/\s*,\s*/)
      collate :areas, h[:areas]
      
      pad h[:areas]
      h[:short_training] = h[:areas].join(', ')[0..45] + '...'
  
      @orgs.push h unless h[:id]==0
    end
  end
  
  def output
    print 'window.orgs = '
    print @orgs.to_json
    puts ';'
  end

  def show_collations
    @collations.keys.each do |type|
      print "#{type}:\t"
      puts @collations[type].sort.join(', ')
    end
  end
end

d=DataProducer.new
d.create_data ARGV[0]

cmd = 'output'
if ARGV.length > 1
  cmd = ARGV[1]
end

case cmd
when 'show_collations'
  d.show_collations
when 'output'
  d.output
end

