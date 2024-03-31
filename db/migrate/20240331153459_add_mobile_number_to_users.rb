class AddMobileNumberToUsers < ActiveRecord::Migration[7.0]
  def change
    add_column :users, :mobile_number, :string
  end
end
