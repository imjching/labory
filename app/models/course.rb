class Course < ActiveRecord::Base
  include Sluggable

  default_scope { where(deleted_at: nil) }

  has_and_belongs_to_many :users

  validates :title, presence: true
  validates :title, length: { maximum: 60 }

  validates :slug, uniqueness: true

  # todo include username in slug
  def slugify
    self.slug = "#{title}".parameterize
  end
end
