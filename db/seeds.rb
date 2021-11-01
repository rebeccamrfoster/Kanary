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

demo = User.create!(name: "Demo", email: "demo@user.com", password: "demouser")

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
# video_file = open("https://kanary-bucket.s3.us-east-2.amazonaws.com/video_1.mov")
# moonlight.video_url.attach(io: video_file, filename: "video_1.mov")
# thumbnail_file = open()
# moonlight.thumbnail.attach(io: File.open("../app/assets/images/thumbnail_1.jpg"), filename: "thumbnail_1.mov")

amazing_grace = Movie.create!(
    title: "Amazing Grace",
    year: 2019,
    duration: 89,
    description: %{A documentary presenting the live recording of Aretha 
        Franklin's album AMAZING GRACE at The New Temple Missionary Baptist 
        Church in Watts, Los Angeles in January 1972.}.squish,
    director: "Alan Elliot"
)

# my_beautiful_stutter = Movie.create!(
#     title: "My Beautiful Stutter",
#     year: 2020,
#     duration: 89,
#     description: %{MY BEAUTIFUL STUTTER follows five kids who stutter, ages 9 
#         to 18, from all over the United States and all walks of life, who, 
#         after experiencing a lifetime of bullying and stigmatization, meet 
#         other children who stutter at an interactive arts-based program, The 
#         Stuttering Association for the Young, based in New York City. Their 
#         journey to SAY find some close to suicide, others withdrawn and fearful, 
#         exhausted and defeated from failed fluency training, societal pressures 
#         to not stutter or the decision to remain silent. Over the course of a 
#         year we witness first hand the incredible transformation that happens 
#         when these young people of wildly different backgrounds experience for 
#         the first time the revolutionary idea at the heart of SAY: that it's 
#         okay to stutter.}.squish,
#     director: "Rylan Gielen"
# )

twentieth_century_women = Movie.create!(
    title: "20th Century Women",
    year: 2016,
    duration: 119,
    description: %{A strong-willed single mother (Annette Bening) raises her 
        teenage son with the help of two unconventional younger women in this 
        funny, heartwarming look at a makeshift family's comic adventures in 
        Santa Barbara during the summer of 1979.}.squish,
    director: "Mike Mills"
)

lady_bird = Movie.create!(
    title: "Lady Bird",
    year: 2017,
    duration: 94,
    description: %{Directed by Greta Gerwig and nominated for five Oscars, LADY 
        BIRD is a warm, affecting comedy about a high schooler (Saoirse Ronan) 
        who must navigate a loving but turbulent relationship with her 
        strong-willed mother (Laurie Metcalf) over the course of her eventful 
        and poignant senior year of high school.}.squish,
    director: "Greta Gerwig"
)

hearts_beat_loud = Movie.create!(
    title: "Hearts Beat Loud",
    year: 2018,
    duration: 98,
    description: %{In the hip Brooklyn neighborhood of Red Hook, single dad and 
        record store owner Frank (Nick Offerman) is preparing to send his 
        hard-working daughter Sam (Kiersey Clemons) off to college, while being 
        forced to close his shop. Hoping to stay connected through their shared 
        musical passions, Frank urges Sam to turn their weekly "jam sesh" into a 
        father-daughter live act. After their first song becomes an Internet 
        breakout, the two embark on a journey of love, growing up and musical 
        discovery.}.squish,
    director: "Brett Haley"
)

i_am_not_your_negro = Movie.create!(
    title: "I Am Not Your Negro",
    year: 2016,
    duration: 94,
    description: %{An Oscar-nominated documentary narrated by Samuel L. Jackson, 
        I AM NOT YOUR NEGRO explores the continued peril America faces from 
        institutionalized racism. In 1979, James Baldwin wrote a letter to his 
        literary agent describing his next project, Remember This House. The 
        book was to be a revolutionary, personal account of the lives and 
        successive assassinations of three of his close friends--Medgar Evers, 
        Malcolm X and Martin Luther King, Jr. At the time of Baldwin's death in 
        1987, he left behind only thirty completed pages of his manuscript. Now, 
        in his incendiary new documentary, master filmmaker Raoul Peck envisions 
        the book James Baldwin never finished. The result is a radical, 
        up-to-the-minute examination of race in America, using Baldwin's 
        original words and flood of rich archival material. I AM NOT YOUR NEGRO 
        is a journey into black history that connects the past of the Civil 
        Rights movement to the present of #BlackLivesMatter. It is a film that 
        questions black representation in Hollywood and beyond. And, ultimately, 
        by confronting the deeper connections between the lives and 
        assassination of these three leaders, Baldwin and Peck have produced a 
        work that challenges the very definition of what America stands 
        for.}.squish,
    director: "Raoul Peck"
)

some_girls = Movie.create!(
    title: "Some Girls",
    year: 2017,
    duration: 52,
    description: %{This feature documentary follows a group of troubled Latina 
        teens from a Bronx-based suicide prevention program who are transformed 
        by an exploration of their roots via the use of ancestral DNA testing, 
        followed by a trip to the Dominican Republic. On that journey, the white 
        supremacist narratives about American history they've been taught are 
        challenged, leaving them free to reconstruct their own respective 
        identities. What does it really mean to be American? And, more 
        importantly, what does that look like?}.squish,
    director: "Raquel Cepeda"
)

love_gilda = Movie.create!(
    title: "Love, Gilda",
    year: 2019,
    duration: 87,
    description: %{LOVE, GILDA is a unique window into the world of Gilda 
        Radner. Director Lisa D'Apolito unearthed a collection of diaries and 
        personal audio and videotapes documenting her childhood, comedy career, 
        relationships and, her struggles with cancer.}.squish,
    director: "Lisa D'Apolito"
)

no_maps_on_my_taps = Movie.create!(
    title: "No Maps on My Taps",
    year: 1979,
    duration: 59,
    description: %{The golden age of tap dancing spanned the first half of the 
        twentieth century, but by the 1950s, the form fell to the likes of rock 
        'n' roll and modern dance. In 1979, NO MAPS ON MY TAPS aired on 
        television outlets across the world, inspiring a new generation of 
        dancers to slip on their shoes and tap away. Featuring performances by 
        Lionel Hampton, Bunny Briggs, Chuck Green, and Howard "Sandman" Sims, 
        director Nierenberg's love for the dancers and their art elevated his 
        film above your run-of-the-mill documentary and into the ranks of dance 
        canon.}.squish,
    director: "George Nierenberg"
)

the_last_black_man_in_san_francisco = Movie.create!(
    title: "The Last Black Man in San Francisco",
    year: 2019,
    duration: 121,
    description: %{Jimmie Fails dreams of reclaiming the Victorian home his 
        grandfather built in the heart of San Francisco. Joined on his quest by 
        his best friend Mont, Jimmie searches for belonging in a rapidly 
        changing city that seems to have left them behind. As he struggles to 
        reconnect with his family and reconstruct the community he longs for, 
        his hopes blind him to the reality of his situation. A wistful odyssey 
        populated by skaters, squatters, street preachers, playwrights, and the 
        other locals on the margins, The Last Black Man in San Francisco is a 
        poignant and sweeping story of friendship, community, and the true 
        meaning of home. Joe Talbot's directorial debut is a deep and resonant 
        meditation on the stories we tell ourselves to find our place in the 
        world.}.squish,
    director: "Joe Talbot"
)

#--------------------GENRES--------------------#

independent_cinema = Genre.create!(name: "Independent Cinema")
lgbtq_cinema = Genre.create!(name: "LGBTQ Cinema")
ethnicity_and_identity = Genre.create!(name: "Ethnicity & Identity")
historical_perspectives = Genre.create!(name: "Historical Perspectives")

#-----------------MOVIEGENRES------------------#

Moviegenre.create!(movie_id: moonlight.id, genre_id: independent_cinema.id)
Moviegenre.create!(movie_id: moonlight.id, genre_id: lgbtq_cinema.id)
Moviegenre.create!(movie_id: amazing_grace.id, genre_id: historical_perspectives.id)
Moviegenre.create!(movie_id: twentieth_century_women.id, genre_id: independent_cinema.id)
Moviegenre.create!(movie_id: lady_bird.id, genre_id: independent_cinema.id)
Moviegenre.create!(movie_id: hearts_beat_loud.id, genre_id: independent_cinema.id)
Moviegenre.create!(movie_id: hearts_beat_loud.id, genre_id: lgbtq_cinema.id)
Moviegenre.create!(movie_id: i_am_not_your_negro.id, genre_id: historical_perspectives.id)
Moviegenre.create!(movie_id: i_am_not_your_negro.id, genre_id: ethnicity_and_identity.id)
Moviegenre.create!(movie_id: some_girls.id, genre_id: ethnicity_and_identity.id)
Moviegenre.create!(movie_id: love_gilda.id, genre_id: historical_perspectives.id)
Moviegenre.create!(movie_id: no_maps_on_my_taps.id, genre_id: historical_perspectives.id)
Moviegenre.create!(movie_id: the_last_black_man_in_san_francisco.id, genre_id: independent_cinema.id)

#------------------WATCHLISTS------------------#

Watchlist.create!(user_id: demo.id, movie_id: moonlight.id)
Watchlist.create!(user_id: demo.id, movie_id: amazing_grace.id)
Watchlist.create!(user_id: demo.id, movie_id: i_am_not_your_negro.id)