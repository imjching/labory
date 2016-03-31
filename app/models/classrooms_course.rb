class ClassroomsCourse < ActiveRecord::Base

  before_save :set_sort_order
  include RankedModel # this must come after set_sort_order
  ranks :sort_order, with_same: :classroom_id

  belongs_to :classroom
  belongs_to :course

  private

  def set_sort_order
    if self.new_record?
      self.sort_order_position = :last
    end
  end

end

