class AddFieldsToClubs < ActiveRecord::Migration[5.2]
  def change
    add_column :clubs, :name, :string, unique: true
    add_column :clubs, :description, :string
    add_column :clubs, :website_url, :string
  end
end
