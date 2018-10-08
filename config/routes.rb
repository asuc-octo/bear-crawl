Rails.application.routes.draw do
  devise_for :clubs
<<<<<<< HEAD
=======
  devise_for :students
>>>>>>> 94da5f3e193818b02f4cb07b3f10a564a87e0eec
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'home#index'
end
