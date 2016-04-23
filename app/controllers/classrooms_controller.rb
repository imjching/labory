class ClassroomsController < ApplicationController

  def show
    @classroom = current_user.classrooms.find_by!(slug: params[:id])
    @courses_count = @classroom.classrooms_courses.rank(:sort_order).where(visible: true).count
    @classrooms_courses = @classroom.classrooms_courses.rank(:sort_order).where(visible: true).includes(course: [:labs]).page(params[:page]).per(5)
  end

end