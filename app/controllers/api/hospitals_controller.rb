module Api
  class HospitalsController < ApiController
    def index
      @hospitals = Hospital.all.page params[:page]
    end

    def show

    end

    def search
      @hospitals = Hospital.none

      query = params[:query] || ""
      query.downcase!

      if query && query.length > 0
        @hospitals = Hospital.where("LOWER(name) ~ ?", query)
          .order(views: :desc)
          .limit(10)
          .select([:name, :address, :city, :state, :zip])
          .map { |el| { name: el.name.titlecase,
                        address: el.address.titlecase,
                        city: el.city.titlecase,
                        state: el.state,
                        zip: el.zip} }
      end
    end

    def views
      @hospitals = Hospital.order(views: :desc).page(1).pluck(:name)
    end

    def names
      @hospitals = Hospital.order(:name).pluck(:name)
    end
  end
end