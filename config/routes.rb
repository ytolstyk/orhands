Rails.application.routes.draw do
  root to: "static_pages#root"

  namespace :api, defaults: { format: :json } do
    resources :users
    resources :hospitals
    resource :session, only: [:new, :create, :destroy], defaults: { format: :json }
    resources :searches, only: [:index]

    get "hospital_search", to: "hospitals#search"
    get "hospital_names", to: "hospitals#names"
    get "hospital_views", to: "hospitals#views"
  end
end
