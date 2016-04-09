class ClassroomInvitation < ActiveRecord::Base

  belongs_to :classroom

  validates :classroom, presence: true

  validates :key, presence: true
  # validates :key, uniqueness: { if: :key_changed? }

  after_initialize :generate_key, if: :new_record?

  def redeem_for(invitee)
    return if self.expired?
    ClassroomAccess.find_or_create_by!(classroom: classroom, user: invitee)
  end

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
    self.expired_at = Time.now + 3.hours
  end

  def expired?
    self.expired_at <= Time.now
  end

  private

  # key is private
  def key=(val)
    self[:key] = val
  end
end
