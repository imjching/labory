class ClassroomsCourse < ActiveRecord::Base

  include RankedModel

  belongs_to :classroom
  belongs_to :course

  ranks :sort_order, with_same: :classroom_id

end

