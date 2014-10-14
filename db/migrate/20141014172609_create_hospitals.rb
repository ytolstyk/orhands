class CreateHospitals < ActiveRecord::Migration
  def change
    create_table :hospitals do |t|
      t.string :provider_id
      t.string :name
      t.string :address
      t.string :city
      t.string :state
      t.string :zip
      t.string :county
      t.string :phone
      t.string :type
      t.string :ownership
      t.string :emergency_services
      t.string :location

      t.timestamps
    end
  end
end
