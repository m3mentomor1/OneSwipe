class AddUrlsToUsers < ActiveRecord::Migration[7.0]
  def change
    add_column :users, :url2, :string
    add_column :users, :url3, :string
    add_column :users, :url4, :string
    add_column :users, :url5, :string
  end
end
