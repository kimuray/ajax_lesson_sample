Rails.application.routes.draw do
  root 'blogs#index'

  resources :blogs, only: [:index, :show] do
    resources :comments, only: :create
  end
end
