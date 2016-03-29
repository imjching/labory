class Course < ActiveRecord::Base
  include Sluggable

  default_scope { where(deleted_at: nil) }

  has_many :labs, dependent: :destroy

  # dependent destroy for soft delete?
  has_many :classrooms_courses, dependent: :destroy
  has_many :classrooms, through: :classrooms_courses

  has_and_belongs_to_many :users

  validates :title, presence: true
  validates :title, length: { maximum: 60 }

  validates :slug, uniqueness: true

  # todo include username in slug
end
