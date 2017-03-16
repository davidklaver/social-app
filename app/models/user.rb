class User < ApplicationRecord
	has_secure_password
	belongs_to :chat

	validates :name, presence: true
	validates :email, presence: true
	validates :name, uniqueness: true
	validates :email, uniqueness: true
end
