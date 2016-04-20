class SolutionsController < ApplicationController

  before_action :init_lab

  def index


  end


  def all

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