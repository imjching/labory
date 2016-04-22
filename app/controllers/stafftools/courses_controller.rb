module Stafftools
  class CoursesController < StafftoolsController

    before_action :set_course, except: [:index, :new, :create]

    # To display all modules
    def index
      @courses = current_user.courses.page(params[:page])
    end

    # Used to display new_module form
    def new
      @course = Course.new
    end

    # [POST] Create a module
    def create
      @course = Course.new(new_course_params)

      if @course.save
        redirect_to stafftools_course_path(@course)
      else
        render :new
      end
    end

    # Display a module
    def show
      @labs = @course.labs.rank(:sort_order)
    end

    # Display module edit form
    def edit
    end

    # [PATCH] Update the module
    def update
      if @course.update_attributes(update_course_params)
        flash[:success] = "Module \"#{@course.title}\" updated"
        redirect_to stafftools_course_path(@course)
      else
        render :edit
      end
    end

    # [DELETE]
    def destroy
      @course.destroy
      flash[:success] = "Successfully deleted \"#{@course.title}\" module"

      redirect_to stafftools_courses_path
    end

    private

    def set_course
      @course = current_user.courses.find_by!(slug: params[:id])
    end

    def new_course_params
      params
        .require(:course)
        .permit(:title, :description)
        .merge(users: [current_user])
    end

    def update_course_params
      params
        .require(:course)
        .permit(:title, :description)
    end
  end
end
