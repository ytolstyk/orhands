class AddPopularityToHospitals < ActiveRecord::Migration
  def change
    add_column :hospitals, :views, :integer, default: 0
  end
end
