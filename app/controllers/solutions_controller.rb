class SolutionsController < ApplicationController

  before_action :init_lab

  def index


  end


  def all

  end

  def create
    @solution = Solution.new(new_solution_params)
    if @solution.save
      flash[:success] = "\"#{@solution.github_repo_id}\" has been created!"
    else
      # You can only create one attempt at a time (for a fork)
      # Restart attempt? Or would the flow be better to manually delete -> then create
      flash[:warning] = "Unable to create attempt. Please reach out to an instructor for help."
    end
    redirect_to classroom_lab_solutions_path(@classroom, @lab)
  end

  private

  def new_solution_params
    { lab_id: @lab.id, user_id: current_user.id }
  end

  def init_lab
    @classroom = current_user.classrooms.find_by!(slug: params[:classroom_id])
    @lab = Lab.find_by!(id: params[:lab_id])
    @classroom_lab = @classroom.classrooms_courses.find_by!(course_id: @lab.course_id)

    not_found unless @classroom_lab.visible?

  end

  # def show
  #   @classroom = current_user.classrooms.find_by!(slug: params[:id])
  #   @courses_count = @classroom.classrooms_courses.rank(:sort_order).where(visible: true).count
  #   @classrooms_courses = @classroom.classrooms_courses.rank(:sort_order).where(visible: true).includes(course: [:labs]).page(params[:page]).per(5)

  #   # p @classrooms_courses
  #   # if @courses.empty?
  #   #   p "hello"
  #   # end

  # end

end