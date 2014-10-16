# encoding: UTF-8
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

ActiveRecord::Schema.define(version: 20141016170915) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "hospitals", force: true do |t|
    t.string   "provider_id"
    t.string   "name"
    t.string   "address"
    t.string   "city"
    t.string   "state"
    t.string   "zip"
    t.string   "county"
    t.string   "phone"
    t.string   "hospital_type"
    t.string   "ownership"
    t.string   "emergency_services"
    t.string   "location"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "hospitals", ["city"], name: "index_hospitals_on_city", using: :btree
  add_index "hospitals", ["county"], name: "index_hospitals_on_county", using: :btree
  add_index "hospitals", ["name"], name: "index_hospitals_on_name", using: :btree
  add_index "hospitals", ["state"], name: "index_hospitals_on_state", using: :btree
  add_index "hospitals", ["zip"], name: "index_hospitals_on_zip", using: :btree

  create_table "users", force: true do |t|
    t.string   "username",                      null: false
    t.string   "email",           default: "*"
    t.string   "password_digest",               null: false
    t.string   "session_token",                 null: false
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "users", ["email"], name: "index_users_on_email", using: :btree
  add_index "users", ["session_token"], name: "index_users_on_session_token", using: :btree
  add_index "users", ["username"], name: "index_users_on_username", using: :btree

end
