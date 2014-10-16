class AddingHospitalIndex < ActiveRecord::Migration
  def change
    add_index :hospitals, :name
    add_index :hospitals, :city
    add_index :hospitals, :state
    add_index :hospitals, :zip
    add_index :hospitals, :county
  end
end
