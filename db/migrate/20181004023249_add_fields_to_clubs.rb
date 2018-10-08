class AddFieldsToClubs < ActiveRecord::Migration[5.2]
  def change
<<<<<<< HEAD
    add_column :clubs, :name, :string
=======
    add_column :clubs, :name, :string, unique: true
>>>>>>> 94da5f3e193818b02f4cb07b3f10a564a87e0eec
    add_column :clubs, :description, :string
    add_column :clubs, :website_url, :string
  end
end
