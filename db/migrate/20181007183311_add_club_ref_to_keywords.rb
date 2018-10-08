class AddClubRefToKeywords < ActiveRecord::Migration[5.2]
  def change
    add_reference :keywords, :club, unique: true, foreign_key: true
  end
end
