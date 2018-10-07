class CreateInterests < ActiveRecord::Migration[5.2]
  def change
    create_table :interests do |t|
      t.integer :interestable_id, null: false
      t.string :interestable_type, null: false
      t.string :label, null: false
      t.timestamps
    end
    
    add_index :interests, [:interestable_id, :interestable_type]
  end
end