class CreateMemberships < ActiveRecord::Migration[5.2]
  def change
    create_table :memberships do |t|
      t.references :student, foreign: true, null: false
      t.references :club, foreign: true, null: false
      t.timestamps
    end

    #add_index(:memberships, [:student_id, :club_id], unique: true)
  end
end
