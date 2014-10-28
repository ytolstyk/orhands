module Api
  class HospitalsController < ApiController
    def index
      @hospitals = Hospital.all.page params[:page]
    end

    def names
      @hospitals = Hospital.order(:name).pluck(:name)
    end
  end
end