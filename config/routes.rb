Rails.application.routes.draw do
  devise_for :clubs, 
             path: '',
             path_names: {
               sign_in: 'login',
               sign_out: 'logout',
               registration: 'signup'
             },
             controllers: {
               sessions: 'club_sessions',
               registrations: 'club_registrations'
             }

  devise_for :students,
             path: '',
             path_names: {
               sign_in: 'login',
               sign_out: 'logout',
               registration: 'signup'
             },
             controllers: {
               sessions: 'student_sessions',
               registrations: 'student_registrations'
             }
  
  
  resources :students do
    resource :profiles, controller: 'student_profiles', only: [:show]
  end
  
  resources :clubs do
    resource :profiles, controller: 'club_profiles', only: [:show]
  end
  
  resources :search, only: [:index]
  
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'home#index'
end
