# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  name            :string           not null
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class User < ApplicationRecord
    validates :name, :email, :password_digest, :session_token, presence: true
    validates :email, uniqueness: { message: " address is already in use." }
    validates :password, length: { minimum: 6, allow_nil: true }

    attr_reader :password
    after_initialize :ensure_session_token

    has_many :watchlists,
        primary_key: :id,
        foreign_key: :user_id,
        class_name: :Watchlist

    has_many :movies,
        through: :watchlists,
        source: :movie

    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)
        return nil if user.nil?
        user.is_password?(password) ? user : nil
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def is_password?(password)
        password_object = BCrypt::Password.new(self.password_digest)
        password_object.is_password?(password)
    end

    def reset_session_token!
        self.session_token = SecureRandom.base64(16)
        self.save!
        self.session_token
    end

    private
    def ensure_session_token
        self.session_token ||= SecureRandom.base64(16)
    end
end
