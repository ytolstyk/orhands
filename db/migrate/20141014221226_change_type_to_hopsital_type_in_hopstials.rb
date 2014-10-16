class ChangeTypeToHopsitalTypeInHopstials < ActiveRecord::Migration
  def change
    rename_column :hospitals, :type, :hospital_type
  end
end
