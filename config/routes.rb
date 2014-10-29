Rails.application.routes.draw do
  root to: "static_pages#root"

  namespace :api, defaults: { format: :json } do
    resources :users
    resources :hospitals do 
      get "search", to: "hospitals#search"
      get "names", to: "hospitals#names"
      get "views", to: "hospitals#views"
    end
    resource :session, only: [:new, :create, :destroy], defaults: { format: :json }

    get "hospital_search", to: "hospitals#search"
  end
end
