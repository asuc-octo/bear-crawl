class CreateCategories < ActiveRecord::Migration[5.2]
  def change
    create_table :categories do |t|
      t.string :label
      t.references :club, foreign_key: true

      t.timestamps
    end

    add_index :categories, [:club_id, :label]
  end
end
