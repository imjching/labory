module Stafftools
  class ClassroomsController < StafftoolsController
    layout :resolve_layout

    before_action :set_classroom, except: [:index, :new, :create]

    def index
      @classrooms = current_user.classrooms.page(params[:page])
    end

    def new
      @classroom = Classroom.new
    end

    def create
      @classroom = Classroom.new(new_classroom_params)

      if @classroom.save
        redirect_to stafftools_classroom_path(@classroom)
      else
        render :new
      end
    end

    def edit

    end

    def show

    end

    def show_mentors

    end

    def show_modules

    end

    def show_graphs

    end

    private

    def set_classroom
      @classroom = current_user.classrooms.find_by!(slug: params[:id])
    end

    def new_classroom_params
      params
        .require(:classroom)
        .permit(:title)
        .merge(users: [current_user])
    end

    def resolve_layout
      case action_name
      when 'index', 'new', 'create'
        'layouts/stafftools'
      else
        'layouts/stafftools_classroom'
      end
    end

  end
end
