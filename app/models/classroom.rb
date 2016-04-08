class Classroom < ActiveRecord::Base
  include Sluggable

  # default_scope { where(deleted_at: nil) }
  has_one :classroom_invitation, dependent: :destroy, autosave: true

  has_many :classrooms_courses, dependent: :destroy
  has_many :courses, through: :classrooms_courses

  # i think dependent destroy can only be placed on the has many side

  has_and_belongs_to_many :users #temporary until we add roles

  validates :title, presence: true
  validates :title, length: { maximum: 60 }

  validates :slug, uniqueness: { if: :slug_changed? }

  alias_attribute :invitation, :classroom_invitation

  def slugify
    unless self.slug
      self.slug = loop do
        class_id = SecureRandom.uuid
        break class_id unless Classroom.exists?(slug: class_id)
      end
    end
  end

end
