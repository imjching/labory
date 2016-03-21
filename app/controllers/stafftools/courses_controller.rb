module Stafftools
  class CoursesController < StafftoolsController

    before_action :set_resources
    before_action :set_course, only: [:show]

    def index
      @courses = current_user.courses.page(params[:page])
    end

    def new
      @course = Course.new
    end

    def create
      @course = Course.new(new_course_params)

      if @course.save
        redirect_to [:stafftools, @course]
      else
        render :new
      end
    end

    def show
    end

    def search
      #respond_to do |format|
      #  format.html { render partial: 'stafftools/resources/search_results', locals: { resources: @resources } }
      #end
    end

    private

    def set_course
      @course = Course.find_by!(slug: params[:id])
    end

    def set_resources
      #resource_query = params[:query].present? ? match_phrase_prefix(params[:query]) : {}
      #@resources     = StafftoolsIndex.query(resource_query).order(_type: :asc).page(params[:page]).per(20)
    end

    def match_phrase_prefix(query)
      #searchable_fields = %w(github_id github_repo_id github_team_id id key login name slug title uid)
      #{ bool: { should: searchable_fields.map { |field| { 'match_phrase_prefix' => { field => query } } } } }
    end

    private

    def new_course_params
      params
        .require(:course)
        .permit(:title, :description)
        .merge(users: [current_user])
    end


  end
end
