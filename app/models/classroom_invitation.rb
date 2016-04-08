class ClassroomInvitation < ActiveRecord::Base

  belongs_to :classroom

  validates :classroom, presence: true

  validates :key, presence: true
  # validates :key, uniqueness: { if: :key_changed? }

  after_initialize :generate_key, if: :new_record?

  def title
    classroom.title
  end

  def to_param
    key
  end

  def generate_key
    self.key = loop do
      temp_key = SecureRandom.hex(4)
      break temp_key unless ClassroomInvitation.exists?(key: temp_key)
    end
    self.generated_at = Time.now
  end

  private

  # key is private
  def key=(val)
    self[:key] = val
  end
end
