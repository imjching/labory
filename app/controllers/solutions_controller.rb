class SolutionsController < ApplicationController

  before_action :init_lab

  def index
    @solutions = Solution.includes(:user).where(lab_id: @lab.id, user_id: current_user.id)
  end

  def all
    @solutions = Solution.completed.includes(:user).where(lab_id: @lab.id, classroom_id: @classroom.id)
  end

  def update
    @solution = current_user.solutions.find_by!(id: params[:id])

    # Reset all solutions first
    Solution
      .where(lab_id: @lab.id, user_id: current_user.id, classroom_id: @classroom.id)
      .update_all(status: Solution.statuses[:attempted])

    # Mark current one
    @solution.completed!

    redirect_to classroom_lab_solutions_path(@classroom, @lab)
  end

  def create
    @solution = Solution.new(new_solution_params)
    if @solution.save
      flash[:success] = "\"#{@solution.github_repo_id}\" has been created!"
    else
      # p @solution.errors
      # You can only create one attempt at a time (for a fork)
      # Restart attempt? Or would the flow be better to manually delete -> then create
      flash[:warning] = "Unable to create attempt. Please reach out to an instructor for help."
    end
    redirect_to classroom_lab_solutions_path(@classroom, @lab)
  end

  private

  def new_solution_params
    { lab_id: @lab.id, user_id: current_user.id, classroom_id: @classroom.id }
  end

  def init_lab
    @classroom = current_user.classrooms.find_by!(slug: params[:classroom_id])
    @lab = Lab.find_by!(id: params[:lab_id])
    @classroom_lab = @classroom.classrooms_courses.find_by!(course_id: @lab.course_id)

    not_found unless @classroom_lab.visible?

  end

end