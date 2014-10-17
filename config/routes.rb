Rails.application.routes.draw do
  root to: "static_pages#root"

  namespace :api, defaults: { format: :json } do
    resources :users
    resources :hospitals
    resource :session, only: [:new, :create, :destroy], defaults: { format: :json }
  end
end
