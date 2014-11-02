module Api
  class SearchesController < ApiController
    def index
      @hospitals = Hospital.all

      query = (params[:query] || "").downcase.strip.split(" ")

      query.each do |name|
        @hospitals = @hospitals.where("LOWER(name) LIKE ?", "%#{name}%")
      end

      @hospitals = @hospitals.order(views: :desc)
                             .limit(10)
                             .select([:name,
                                      :address,
                                      :city,
                                      :state,
                                      :zip,
                                      :id])
                             .map { |el| { name: el.name.titlecase,
                                           address: el.address.titlecase,
                                           city: el.city.titlecase,
                                           state: el.state,
                                           zip: el.zip,
                                           id: el.id } }
    end
  end
end
