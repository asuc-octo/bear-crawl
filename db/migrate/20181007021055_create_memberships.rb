class CreateMemberships < ActiveRecord::Migration[5.2]
  def change
    create_table :memberships do |t|
      t.references :students, foreign: true, null: false
      t.references :clubs, foreign: true, null: false
      add_foreign_key :students, :clubs
      t.timestamps
    end

    add_index(:memberships, [:student_id, :club_id], unique: true)
  end
end
