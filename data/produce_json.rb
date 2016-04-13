require 'JSON'

orgs=[]
limit = 300
counter = 0

def pad(l)
  if (l.size % 3) != 0
    (1..((3-l.size%3))).each do |i|
      l.push rand(2000).to_s #''
    end
  end
end

File.open(ARGV[0]).readlines.each do |l|
  counter+=1
  break unless counter <= limit

  h = {}
  fields =l.split /\t/

  h[:id] = counter - 1
  h[:name] = fields[1].strip
  h[:description] = fields[3].strip
  h[:short_desc] = h[:description][0..45] + '...'
  h[:price_range] = fields[14]
  
  h[:logo_link] = "img/#{h[:name].downcase.gsub(/\s+/, '_')}.png"
  
  h[:areas] = fields[5].split(/\s*,\s*/)
  pad h[:areas]
  h[:short_training] = h[:areas].join(', ')[0..45] + '...'
  
  orgs.push h unless h[:id]==0
end

print 'window.orgs = '
print orgs.to_json
puts ';'

