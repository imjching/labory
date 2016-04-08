require 'sidekiq/web'

Rails.application.routes.draw do
  mount Peek::Railtie => '/peek'

  root to: 'pages#home'

  get  '/login',  to: 'sessions#new',     as: 'login'
  post '/logout', to: 'sessions#destroy', as: 'logout'

  match '/auth/:provider/callback', to: 'sessions#create',  via: [:get, :post]
  match '/auth/failure',            to: 'sessions#failure', via: [:get, :post]

  get  '/dashboard', to: 'pages#dashboard', as: 'dashboard'

  namespace :stafftools do
    root to: 'resources#index'

    get '/test', to: 'resources#test'

    scope path_names: { edit: 'settings' } do
      resources :courses, path: 'modules' do
        resources :labs do
          member do
            put :sort
          end
        end

      end

      resources :classrooms do
        member do
          post '/new_invite_link', to: 'classrooms#get_new_invite_link'

          delete '/members/:user_id', to: 'classrooms#remove_member'

          #get '/mentors', to: 'classrooms#show_mentors'
          #post '/mentors', to: 'classrooms#add_mentor' # must first invite mentor onto platform through any link
          #delete '/mentors/:user_id', to: 'classrooms#remove_mentor'

          get '/modules', to: 'classrooms#show_modules'
          put '/modules', to: 'classrooms#update_modules'
          get '/modules/settings', to: 'classrooms#edit_modules'
          put '/modules/:classrooms_course_id/sort', to: 'classrooms#sort_module', as: :modules_sort
          put '/modules/:classrooms_course_id/toggle', to: 'classrooms#toggle_module', as: :modules_toggle

          get '/graphs', to: 'classrooms#show_graphs'
        end
      end
    end

    resources :labs, only: [:index]

    # Admin-only routes
    constraints AdminConstraint.new do
      mount Sidekiq::Web  => '/sidekiq'
    end
    get '/resource_search', to: 'resources#search'
  end


  # You can have the root of your site routed with "root"
  # root 'welcome#index'

  # Example of regular route:
  #   get 'products/:id' => 'catalog#view'

  # Example of named route that can be invoked with purchase_url(id: product.id)
  #   get 'products/:id/purchase' => 'catalog#purchase', as: :purchase

  # Example resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  # Example resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Example resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Example resource route with more complex sub-resources:
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', on: :collection
  #     end
  #   end

  # Example resource route with concerns:
  #   concern :toggleable do
  #     post 'toggle'
  #   end
  #   resources :posts, concerns: :toggleable
  #   resources :photos, concerns: :toggleable

  # Example resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end
end
