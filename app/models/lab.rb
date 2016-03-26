class Lab < ActiveRecord::Base
  #include Sluggable
  include RankedModel

  #default_scope { where(deleted_at: nil) }

  belongs_to :course

  validates :title, presence: true
  validates :title, length: { maximum: 60 }

  validates :body, presence: true
  #validates :body_gfm, presence: true

  ranks :sort_order, with_same: :course_id

  before_save :render_gfm

  #validates :slug, uniqueness: { scope: :course_id }

  def slugify
    #self.slug = "#{title}".parameterize
  end

  private

  def render_gfm
    #body_gfm = Octokit.markdown(text).html_safe
  end
end
