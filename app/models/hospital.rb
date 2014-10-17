# == Schema Information
#
# Table name: hospitals
#
#  id                 :integer          not null, primary key
#  provider_id        :string(255)
#  name               :string(255)
#  address            :string(255)
#  city               :string(255)
#  state              :string(255)
#  zip                :string(255)
#  county             :string(255)
#  phone              :string(255)
#  hospital_type      :string(255)
#  ownership          :string(255)
#  emergency_services :string(255)
#  location           :string(255)
#  created_at         :datetime
#  updated_at         :datetime
#

class Hospital < ActiveRecord::Base
  paginates_per 25
end
