Rails.application.routes.draw do
  devise_for :clubs, 
             path: '',
             path_names: {
               sign_in: 'club/login',
               sign_out: 'club/logout',
               registration: 'club/signup',
               password: 'club/password/',
               confirmation: 'club/confirmation'
             },
             controllers: {
               sessions: 'club_sessions',
               registrations: 'club_registrations',
               confirmations: 'club_confirmations',
               passwords: 'club_passwords'
             }

  devise_for :students,
             path: '',
             path_names: {
               sign_in: 'student/login',
               sign_out: 'student/logout',
               registration: 'student/signup',
               password: 'student/password/',
               confirmation: 'student/confirmation'
             },
             controllers: {
               sessions: 'student_sessions',
               registrations: 'student_registrations',
               confirmations: 'student_confirmations',
               passwords: 'student_passwords'
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
