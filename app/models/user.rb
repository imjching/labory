class User < ActiveRecord::Base

  # as admin
  has_and_belongs_to_many :courses

  # member/admin
  has_many :classroom_accesses, dependent: :destroy
  has_many :classrooms, through: :classroom_accesses

  has_many :solutions

  validates :token, presence: true, uniqueness: true

  # todo, check difference between splitting validation and combining both
  validates :uid, presence: true
  validates :uid, uniqueness: true

  def assign_from_auth_hash(hash)
    user_attributes = AuthHash.new(hash).user_info
    update_attributes(user_attributes)
  end

  def authorized_access_token?
    GitHubUser.new(github_client, uid).authorized_access_token?
  end

  def self.create_from_auth_hash(hash)
    create!(AuthHash.new(hash).user_info)
  end

  def self.find_by_auth_hash(hash)
    conditions = AuthHash.new(hash).user_info.slice(:uid)
    find_by(conditions)
  end

  def github_client
    @github_client ||= Octokit::Client.new(access_token: token, auto_paginate: true)
  end

  def github_client_scopes
    GitHubUser.new(github_client, uid).client_scopes
  end

  def staff?
    GitHubUser.new(github_client, uid).user.login == 'imjching'
    #site_admin
    # true
  end
end
