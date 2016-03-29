module Stafftools
  class LabsController < StafftoolsController

    before_action :set_course
    before_action :set_lab, except: [:new, :create]

    def new
      @lab = Lab.new
    end

    def create
      @lab = Lab.new(new_lab_params)
      if @lab.save
        flash[:success] = "\"#{@lab.title}\" has been created!"
        redirect_to stafftools_course_lab_path(@course, @lab)
      else
        render :new
      end
    end

    def show
      @lab = @course.labs.find_by!(id: params[:id])
    end

    def sort
      @lab.update_attributes(sort_lab_params)
      render nothing: true
    end

    private

    def new_lab_params
      params
        .require(:lab)
        .permit(:title, :body)
        .merge(course: @course)
        .merge(sort_order_position: :last)
    end

    def set_course
      @course = current_user.courses.find_by!(slug: params[:course_id])
    end

    def set_lab
      @lab = @course.labs.find_by!(id: params[:id])
    end

    def sort_lab_params
      params
        .require(:lab)
        .permit(:sort_order_position)
    end
  end
end
