module Api
  class HospitalsController < ApiController
    def index
      @hospitals = Hospital.all.page params[:page]
    end

    def show
      
    end

    def views
      @hospitals = Hospital.order(views: :desc).page(1).pluck(:name)
    end

    def names
      @hospitals = Hospital.order(:name).pluck(:name)
    end
  end
end