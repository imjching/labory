module Stafftools
  class ResourcesController < StafftoolsController

    def index
      redirect_to stafftools_courses_path
    end
  end
end
