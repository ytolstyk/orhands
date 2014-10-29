json.array!(@hospitals) do |hospital|
  json.name hospital[:name]
  json.address hospital[:address]
  json.zip hospital[:zip]
  json.city hospital[:city]
  json.state hospital[:state]
  json.id hospital[:id]
end