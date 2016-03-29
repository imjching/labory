module Stafftools
  class ClassroomsController < StafftoolsController

    def index
      @classrooms = current_user.classrooms.page(params[:page])
    end

  end
end
