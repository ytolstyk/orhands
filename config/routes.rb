Rails.application.routes.draw do
  root to: "static_pages#root"

  namespace :api, defaulst: { format: :json } do
    resources :users
    resource :session, only: [:new, :create, :destroy], defaults: { format: :json }
  end
end
