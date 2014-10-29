module Api
  class SearchesController < ApiController
    def index
      @hospitals = Hospital.none

      query = params[:query] || ""
      query.downcase!

      if query && query.length > 0
        @hospitals = Hospital.where("LOWER(name) ~ ?", query)
          .order(views: :desc)
          .limit(10)
          .select([:name, :address, :city, :state, :zip, :id])
          .map { |el| { name: el.name.titlecase,
                        address: el.address.titlecase,
                        city: el.city.titlecase,
                        state: el.state,
                        zip: el.zip,
                        id: el.id } }
      end
    end
  end
end
