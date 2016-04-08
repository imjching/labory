module Stafftools
  class ClassroomsController < StafftoolsController
    layout :resolve_layout

    before_action :set_classroom, except: [:index, :new, :create, :edit_modules, :update_modules, :sort_module, :toggle_module]

    def index
      @classrooms = current_user.classrooms.page(params[:page])
    end

    def new
      @classroom = Classroom.new
    end

    def create
      @classroom = Classroom.new(new_classroom_params)
      @classroom.build_classroom_invitation

      if @classroom.save
        ClassroomAccess.create(classroom: @classroom, user: current_user, role: ClassroomAccess.roles[:admin])
        redirect_to modules_settings_stafftools_classroom_path(@classroom)
      else
        render :new
      end
    end

    def edit

    end

    def show

    end

    def get_new_invite_link
      @invitation = @classroom.classroom_invitation
      @invitation.generate_key
      @invitation.save
    end

    def remove_member

    end

    def show_modules
      @classrooms_courses = @classroom.classrooms_courses.includes(:course).rank(:sort_order)
    end

    def edit_modules
      @classroom = current_user.classrooms.includes(:courses).find_by!(slug: params[:id])
      @available_courses = current_user.courses
    end

    def update_modules
      @classroom = current_user.classrooms.includes(:courses).find_by!(slug: params[:id])
      @available_course_ids = current_user.courses.pluck(:id)

      # Check if the input course_ids are in @available_course_ids
      filtered = update_modules_params
      filtered[:course_ids].select! { |x| @available_course_ids.include? x.to_i }

      if @classroom.update_attributes(filtered)
        flash[:success] = "Updated classroom!"
        redirect_to modules_settings_stafftools_classroom_path(@classroom)
      else
        render :edit_modules
      end
    end

    def sort_module
      @classroom = current_user.classrooms.find_by!(slug: params[:id])
      @linked_course = ClassroomsCourse.find_by!(id: params[:classrooms_course_id], classroom_id: @classroom.id)

      @linked_course.update_attributes(sort_module_params)
      render nothing: true
    end

    def toggle_module
      @classroom = current_user.classrooms.find_by!(slug: params[:id])
      @linked_course = ClassroomsCourse.find_by!(id: params[:classrooms_course_id], classroom_id: @classroom.id)

      @linked_course.update_attributes(visible: !@linked_course.visible)
      render nothing: true
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
        #.merge(users: [current_user])
    end

    def update_modules_params
      params
        .require(:classroom)
        .permit( { course_ids: [] } )
    end

    def sort_module_params
      params
        .require(:sortable)
        .permit(:sort_order_position)
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
