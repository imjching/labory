module Stafftools
  class CoursesController < StafftoolsController

    before_action :set_course, only: [:show]

    def index
      @courses = current_user.courses.page(params[:page])
    end

    def new
      @course = Course.new
    end

    def create
      @course = Course.new(new_course_params)

      if @course.save
        redirect_to stafftools_course_path(@course)
      else
        render :new
      end
    end

    def show
      @labs = @course.labs.rank(:sort_order)
    end

    private

    def set_course
      @course = Course.find_by!(slug: params[:id])
    end

    def new_course_params
      params
        .require(:course)
        .permit(:title, :description)
        .merge(users: [current_user])
    end
  end
end
