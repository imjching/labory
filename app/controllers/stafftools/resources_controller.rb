module Stafftools
  class ResourcesController < StafftoolsController

    def index
      redirect_to stafftools_courses_path
    end

    def test
    end

    def markdown_preview
      @data = params[:text]
    end
  end
end
