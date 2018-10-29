Rails.application.routes.draw do
  devise_for :clubs,
             path: 'clubs',
             path_names: {
               sign_in: 'login',
               sign_out: 'logout',
               registration: 'signup',
               password: 'password',
               confirmation: 'confirmation'
             },
             controllers: {
               sessions: 'clubs/sessions',
               registrations: 'clubs/registrations',
               confirmations: 'clubs/confirmations',
               passwords: 'clubs/passwords'
             }

  devise_for :students,
             path: 'students',
             path_names: {
               sign_in: 'login',
               sign_out: 'logout',
               registration: 'signup',
               password: 'password',
               confirmation: 'confirmation'
             },
             controllers: {
               sessions: 'students/sessions',
               registrations: 'students/registrations',
               confirmations: 'students/confirmations',
               passwords: 'students/passwords'
             }


  resource :students do
    resources :profiles, controller: 'students/profiles', only: [:show, :update]
  end

  resource :clubs do
    resources :profiles, controller: 'clubs/profiles', only: [:show]
  end

  resources :search, only: [:index]

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'home#index'
end
