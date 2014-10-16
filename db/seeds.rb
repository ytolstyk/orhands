# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

seed_states = ['CA']
keys = []

File.readlines('hospital_data.tsv').each do |line|
  split = line.split("\t")

  if (keys.empty?)
    keys = split.map { |k| k.downcase.gsub(' ', '_').gsub("\n", '') }
    next
  end

  entry = {};

  split.each_with_index do |el, i|
    if (keys[i] == 'location')
      beg_idx = el.index('(') + 1
      end_idx = el.index(')') - 1
      entry[keys[i]] = el[beg_idx..end_idx]
    else
      entry[keys[i]] = el
    end
  end

  if (seed_states.include?(entry['state']))
    Hospital.create!(entry)
  end
end