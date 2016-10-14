require 'JSON'

class DataProducer
  def initialize
    @orgs=[]
    @limit = 300
    @counter = 0
    @short_length = 140
  end
  
  def make_list(str, split_re: /\s+\*\s*/)
    str.split(split_re).map { |i| i.gsub(/^\**/, '').strip }
  end

  def get_salaries(str)
    return if str.strip == '' or /researching/i.match str
    l = str.scan(/(\$\d{1,3},(000|799))/)
    if l.size == 1
      l << [-1, -1, -1]
    end
    
    if l.size != 2
      $stderr.write "#{str} is not right."
    end

    # Only keep the full regex match
    l.map { |i| i[0] }
  end
  
  def create_data(filename)
    File.open(filename).readlines.each do |l|
      @counter+=1
      next if @counter == 1
      break unless @counter <= @limit

      h = {}
      fields =l.split /\t/

      h[:id] = @counter - 1
      jobname = fields[0].strip.gsub(/\s+/, ' ')      
      h[:key] = jobname.downcase.gsub(/\s+/, '_')
      h[:name] = jobname
      h[:description] = fields[1].strip

      h[:purpose_med] = fields[12].strip
      h[:purpose_tiny] = fields[13].strip
      
      h[:tag_line] = #h[:description][0..69] + (h[:description].size > 70 ? '...' : '')
        h[:purpose_med]
      h[:activities] = make_list fields[2]
      h[:skills] = make_list fields[3]
      h[:ed_reqs] = make_list fields[5], split_re: /\s{2,}/

      h[:salary] = get_salaries fields[6]
      @orgs.push h unless h[:id]==0 or h[:activities].size == 0 or h[:name].size == ''
    end
  end
  
  def output
    print 'window.profile.profile_list = '
    print @orgs.select {|i| i[:name].strip != ''}.to_json.gsub(/(.\"id\"\:\d)/, "\n\\1")
    puts ";\n"
  end

end

d=DataProducer.new

if ARGV.size == 0 or !File.exists?(ARGV[0])
  $stderr.write("First arg #{ARGV[0]} should be a TSV file.")
  exit -1
end

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

