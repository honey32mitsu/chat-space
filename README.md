## groups_usersテーブル

|Column|Type|Options|
|------|----|-------|
|user|references|null: false, foreign_key: true|
|group|references|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user

## usersテーブル
|Column|Type|Options|
|------|----|-------|
|email|string|null: false|
|password|string|null: false|
|nickname|string|index: true|
### Association
- has_many :groups_users
- has_many :messages
- has_many  :group,  through:  :groups_users

## messageテーブル
|Column|Type|Options|
|------|----|-------|
|text|string||
|user|references|null: false, foreign_key: true|
|image|string||
|group|references|null: false, foreign_key: true|
### Association
- belongs_to :user
- belongs_to :group

## groupテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|index: true|
### Association
- has_many :groups_users
- has_many :users,  through:  :groups_users
- has_many :messages