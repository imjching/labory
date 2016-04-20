class Lab < ActiveRecord::Base
  #include Sluggable
  include RankedModel

  #default_scope { where(deleted_at: nil) }

  belongs_to :course

  has_many :solutions

  validates :title, presence: true
  validates :title, length: { maximum: 60 }

  validates :body, presence: true

  ranks :sort_order, with_same: :course_id

  #validates :slug, uniqueness: { scope: :course_id }
end
