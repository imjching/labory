class Lab < ActiveRecord::Base
  include Sluggable

  default_scope { where(deleted_at: nil) }

  belongs_to :course

  validates :title, presence: true
  validates :title, length: { maximum: 60 }

  validates :body, presence: true

  validates :slug, uniqueness: { scope: :course_id }

  def slugify
    self.slug = "#{title}".parameterize
  end
end
