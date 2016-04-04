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

ActiveRecord::Schema.define(version: 20160404103448) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "classroom_courses", force: :cascade do |t|
    t.integer "classroom_id"
    t.integer "course_id"
    t.integer "sort_order",   default: 0, null: false
  end

  add_index "classroom_courses", ["classroom_id"], name: "index_classroom_courses_on_classroom_id", using: :btree
  add_index "classroom_courses", ["course_id"], name: "index_classroom_courses_on_course_id", using: :btree
  add_index "classroom_courses", ["sort_order"], name: "index_classroom_courses_on_sort_order", using: :btree

  create_table "classroom_users", force: :cascade do |t|
    t.integer "classroom_id"
    t.integer "user_id"
  end

  add_index "classroom_users", ["classroom_id"], name: "index_classroom_users_on_classroom_id", using: :btree
  add_index "classroom_users", ["user_id"], name: "index_classroom_users_on_user_id", using: :btree

  create_table "classrooms", force: :cascade do |t|
    t.string   "title",      null: false
    t.string   "slug",       null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "classrooms", ["slug"], name: "index_classrooms_on_slug", using: :btree

  create_table "classrooms_courses", force: :cascade do |t|
    t.integer  "classroom_id"
    t.integer  "course_id"
    t.integer  "sort_order",   default: 0,     null: false
    t.boolean  "visible",      default: false, null: false
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "classrooms_courses", ["classroom_id"], name: "index_classrooms_courses_on_classroom_id", using: :btree
  add_index "classrooms_courses", ["course_id"], name: "index_classrooms_courses_on_course_id", using: :btree
  add_index "classrooms_courses", ["sort_order"], name: "index_classrooms_courses_on_sort_order", using: :btree

  create_table "classrooms_users", force: :cascade do |t|
    t.integer "classroom_id"
    t.integer "user_id"
  end

  add_index "classrooms_users", ["classroom_id"], name: "index_classrooms_users_on_classroom_id", using: :btree
  add_index "classrooms_users", ["user_id"], name: "index_classrooms_users_on_user_id", using: :btree

  create_table "courses", force: :cascade do |t|
    t.string   "title",       null: false
    t.string   "description", null: false
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.datetime "deleted_at"
    t.string   "slug",        null: false
  end

  add_index "courses", ["deleted_at"], name: "index_courses_on_deleted_at", using: :btree
  add_index "courses", ["slug"], name: "index_courses_on_slug", using: :btree

  create_table "courses_users", id: false, force: :cascade do |t|
    t.integer "user_id"
    t.integer "course_id"
  end

  add_index "courses_users", ["course_id"], name: "index_courses_users_on_course_id", using: :btree
  add_index "courses_users", ["user_id"], name: "index_courses_users_on_user_id", using: :btree

  create_table "labs", force: :cascade do |t|
    t.string   "title"
    t.text     "body"
    t.integer  "course_id"
    t.datetime "created_at",             null: false
    t.datetime "updated_at",             null: false
    t.integer  "sort_order", default: 0, null: false
  end

  add_index "labs", ["course_id"], name: "index_labs_on_course_id", using: :btree
  add_index "labs", ["sort_order"], name: "index_labs_on_sort_order", using: :btree

  create_table "users", force: :cascade do |t|
    t.integer  "uid",                        null: false
    t.string   "token",                      null: false
    t.boolean  "site_admin", default: false
    t.datetime "created_at",                 null: false
    t.datetime "updated_at",                 null: false
  end

  add_index "users", ["token"], name: "index_users_on_token", unique: true, using: :btree
  add_index "users", ["uid"], name: "index_users_on_uid", unique: true, using: :btree

end
