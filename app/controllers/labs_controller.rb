class LabsController < ApplicationController

  def show
    @classroom = current_user.classrooms.find_by!(slug: params[:classroom_id])
    @lab = Lab.find_by!(id: params[:id])
    @classroom_lab = @classroom.classrooms_courses.find_by!(course_id: @lab.course_id)

    not_found unless @classroom_lab.visible?


  end

end