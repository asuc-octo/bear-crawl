class AddAnotherIndexToMemberships < ActiveRecord::Migration[5.2]
  def change
    add_index :memberships, [:student_id, :club_id], unique: true
  end
end
