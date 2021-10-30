# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.delete_all
Movie.delete_all

ActiveRecord::Base.connection.reset_pk_sequence!("users")
ActiveRecord::Base.connection.reset_pk_sequence!("movies")

#-------------------DEMO USER------------------#

User.create!(name: "Demo", email: "demo@user.com", password: "demouser")

#--------------------MOVIES--------------------#
moonlight = Movie.create!(
    title: "Moonlight",
    year: 2016,
    duration: 111,
    description: %{Oscar-winner for Best Picture, MOONLIGHT is a moving and 
        transcendent look at three defining chapters in the life of Chiron, 
        a young man growing up in Miami. His epic journey to adulthood, as 
        a shy outsider dealing with difficult circumstances, is guided by 
        support, empathy and love from the most unexpected places.}.squish,
    director: "Barry Jenkins"
)

#--------------------GENRES--------------------#