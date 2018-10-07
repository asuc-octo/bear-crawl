# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

<<<<<<< HEAD
ActiveRecord::Schema.define(version: 2018_10_04_023545) do
=======
ActiveRecord::Schema.define(version: 2018_10_04_023249) do
>>>>>>> a037513212dba55e825cff121d00861d2f4fa2fa

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

<<<<<<< HEAD
  create_table "students", force: :cascade do |t|
=======
  create_table "clubs", force: :cascade do |t|
>>>>>>> a037513212dba55e825cff121d00861d2f4fa2fa
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
<<<<<<< HEAD
    t.string "confirmation_token"
    t.datetime "confirmed_at"
    t.datetime "confirmation_sent_at"
    t.string "unconfirmed_email"
    t.string "firstname"
    t.string "lastname"
    t.string "username"
    t.integer "year"
    t.string "major"
    t.string "linkedin"
    t.string "facebook"
    t.index ["email"], name: "index_students_on_email", unique: true
    t.index ["reset_password_token"], name: "index_students_on_reset_password_token", unique: true
=======
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "name"
    t.string "description"
    t.string "website_url"
    t.index ["email"], name: "index_clubs_on_email", unique: true
    t.index ["reset_password_token"], name: "index_clubs_on_reset_password_token", unique: true
>>>>>>> a037513212dba55e825cff121d00861d2f4fa2fa
  end

end
