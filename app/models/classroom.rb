class Classroom < ActiveRecord::Base
  include Sluggable

  # default_scope { where(deleted_at: nil) }
  has_one :classroom_invitation, dependent: :destroy, autosave: true

  has_many :classrooms_courses, dependent: :destroy
  has_many :courses, through: :classrooms_courses

  has_many :solutions, dependent: :destroy

  # i think dependent destroy can only be placed on the has many side

  # member/admin
  has_many :classroom_accesses, dependent: :destroy
  has_many :users, through: :classroom_accesses

  validates :title, presence: true
  validates :title, length: { maximum: 60 }

  # validates :slug, uniqueness: { if: :slug_changed? }

  alias_attribute :invitation, :classroom_invitation

  def slugify
    unless self.slug
      self.slug = loop do
        class_id = SecureRandom.uuid
        break class_id unless Classroom.exists?(slug: class_id)
      end
    end
  end

  private

  def slug=(val) # won't double check
    self[:slug] = val
  end

end
