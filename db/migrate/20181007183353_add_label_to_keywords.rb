class AddLabelToKeywords < ActiveRecord::Migration[5.2]
  def change
    add_column :keywords, :label, :string
    add_index :keywords, :label, unique: true
  end
end
