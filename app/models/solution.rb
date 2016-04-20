class Solution < ActiveRecord::Base

  belongs_to :lab
  belongs_to :user

  validates :link, presence: true

  enum status: [ :attempted, :completed ] #lowest level first

end