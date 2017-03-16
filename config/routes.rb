Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get '/chats/:id' => 'chats#show'

  get '/messages' => 'messages#index'
  get '/messages/:id' => 'messages#show'
  post '/messages' => 'messages#create'
  # get '/pages' => 'pages#index'


  get "/signup" => "users#new"
	post "/users" => "users#create"

	get "/login" => "sessions#new"
	post "/login" => "sessions#create"
	get "/logout" => "sessions#destroy"
end
