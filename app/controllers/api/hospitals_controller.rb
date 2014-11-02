module Api
  class HospitalsController < ApiController
    def index
      @hospitals = Hospital.all.page params[:page]
    end

    def show
      @hospital = Hospital.find(params[:id])
    end

    def views
      @hospitals = Hospital.order(views: :desc).limit(100).pluck(:name)
    end

    def names
      @hospitals = Hospital.order(:name).pluck(:name)
    end
  end
end