class AddMembersToChat < ActiveRecord::Migration[5.0]
  def change
		add_column :chats, :user, :integer
	end
end