class AddUsernameToClubs < ActiveRecord::Migration[5.2]
  def change
    add_column :clubs, :username, :string, null: false, unique: true
  end
end
