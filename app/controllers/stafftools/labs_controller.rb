module Stafftools
  class LabsController < StafftoolsController
    include InitialCode

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

    # [PATCH] Update the lab
    def update
      if @lab.update_attributes(update_lab_params)
        flash[:success] = "Lab \"#{@lab.title}\" updated"
        redirect_to stafftools_course_lab_path(@course, @lab)
      else
        render :show
      end
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
        .merge(course: @course, sort_order_position: :last)
        # starter_code_repo_id: get_repository_id(params[:repo_name])
    end

    def update_lab_params
      params
        .require(:lab)
        .permit(:title, :body)
        # starter_code_repo_id: get_repository_id(params[:repo_name])
    end

    def set_course
      @course = current_user.courses.find_by!(slug: params[:course_id])
    end

    def set_lab
      @lab = @course.labs.find_by!(id: params[:id])
    end

    def sort_lab_params
      params
        .require(:sortable)
        .permit(:sort_order_position)
    end
  end
end
