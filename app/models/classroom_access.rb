class ClassroomAccess < ActiveRecord::Base

  belongs_to :classroom
  belongs_to :user

  validates :classroom, presence: true
  validates :classroom, uniqueness: { scope: :user }

  validates :user, presence: true
  # validates :user, uniqueness: { scope: :classroom }, one is sufficient

  enum role: [ :student, :admin ] #lowest level first

end
