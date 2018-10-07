class AddColumnsToStudent < ActiveRecord::Migration[5.2]
  def change
    add_column :students, :firstname, :string
    add_column :students, :lastname, :string
    add_column :students, :username, :string
    add_column :students, :year, :integer
    add_column :students, :major, :string
    add_column :students, :linkedin, :string
    add_column :students, :facebook, :string
  end
end
