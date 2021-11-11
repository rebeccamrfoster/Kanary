# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require "open-uri"

User.delete_all
Movie.delete_all
Genre.delete_all
Moviegenre.delete_all
Watchlist.delete_all

ActiveRecord::Base.connection.reset_pk_sequence!("users")
ActiveRecord::Base.connection.reset_pk_sequence!("movies")
ActiveRecord::Base.connection.reset_pk_sequence!("genres")
ActiveRecord::Base.connection.reset_pk_sequence!("moviegenres")
ActiveRecord::Base.connection.reset_pk_sequence!("watchlists")

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

file = open("https://kanary-seeds.s3.us-east-2.amazonaws.com/thumbnails/moonlight.jpg")
moonlight.thumbnail.attach(io: file, filename: "moonlight.jpg")
file = open("https://kanary-seeds.s3.us-east-2.amazonaws.com/videos/moonlight.mov")
moonlight.video.attach(io: file, filename: "moonlight.mov")

amazing_grace = Movie.create!(
    title: "Amazing Grace",
    year: 2019,
    duration: 89,
    description: %{A documentary presenting the live recording of Aretha 
        Franklin's album AMAZING GRACE at The New Temple Missionary Baptist 
        Church in Watts, Los Angeles in January 1972.}.squish,
    director: "Alan Elliot"
)

file = open("https://kanary-seeds.s3.us-east-2.amazonaws.com/thumbnails/amazing_grace.jpg")
amazing_grace.thumbnail.attach(io: file, filename: "amazing_grace.jpg")
file = open("https://kanary-seeds.s3.us-east-2.amazonaws.com/videos/amazing_grace.mov")
amazing_grace.video.attach(io: file, filename: "amazing_grace.mov")

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

file = open("https://kanary-seeds.s3.us-east-2.amazonaws.com/thumbnails/twentieth_century_women.jpg")
twentieth_century_women.thumbnail.attach(io: file, filename: "twentieth_century_women.jpg")
file = open("https://kanary-seeds.s3.us-east-2.amazonaws.com/videos/twentieth_century_women.mov")
twentieth_century_women.video.attach(io: file, filename: "twentieth_century_women.mov")

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

file = open("https://kanary-seeds.s3.us-east-2.amazonaws.com/thumbnails/lady_bird.jpg")
lady_bird.thumbnail.attach(io: file, filename: "lady_bird.jpg")
file = open("https://kanary-seeds.s3.us-east-2.amazonaws.com/videos/lady_bird.mov")
lady_bird.video.attach(io: file, filename: "lady_bird.mov")

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

file = open("https://kanary-seeds.s3.us-east-2.amazonaws.com/thumbnails/hearts_beat_loud.jpg")
hearts_beat_loud.thumbnail.attach(io: file, filename: "hearts_beat_loud.jpg")
file = open("https://kanary-seeds.s3.us-east-2.amazonaws.com/videos/hearts_beat_loud.mov")
hearts_beat_loud.video.attach(io: file, filename: "hearts_beat_loud.mov")

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

file = open("https://kanary-seeds.s3.us-east-2.amazonaws.com/thumbnails/i_am_not_your_negro.jpg")
i_am_not_your_negro.thumbnail.attach(io: file, filename: "i_am_not_your_negro.jpg")
file = open("https://kanary-seeds.s3.us-east-2.amazonaws.com/videos/i_am_not_your_negro.mov")
i_am_not_your_negro.video.attach(io: file, filename: "i_am_not_your_negro.mov")

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

file = open("https://kanary-seeds.s3.us-east-2.amazonaws.com/thumbnails/some_girls.jpg")
some_girls.thumbnail.attach(io: file, filename: "some_girls.jpg")
file = open("https://kanary-seeds.s3.us-east-2.amazonaws.com/videos/some_girls.mp4")
some_girls.video.attach(io: file, filename: "some_girls.mp4")

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

file = open("https://kanary-seeds.s3.us-east-2.amazonaws.com/thumbnails/love_gilda.jpg")
love_gilda.thumbnail.attach(io: file, filename: "love_gilda.jpg")
file = open("https://kanary-seeds.s3.us-east-2.amazonaws.com/videos/love_gilda.mov")
love_gilda.video.attach(io: file, filename: "love_gilda.mov")

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

file = open("https://kanary-seeds.s3.us-east-2.amazonaws.com/thumbnails/no_maps_on_my_taps.jpg")
no_maps_on_my_taps.thumbnail.attach(io: file, filename: "no_maps_on_my_taps.jpg")
file = open("https://kanary-seeds.s3.us-east-2.amazonaws.com/videos/no_maps_on_my_taps.mp4")
no_maps_on_my_taps.video.attach(io: file, filename: "no_maps_on_my_taps.mp4")

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

file = open("https://kanary-seeds.s3.us-east-2.amazonaws.com/thumbnails/the_last_black_man_in_san_francisco.jpg")
the_last_black_man_in_san_francisco.thumbnail.attach(io: file, filename: "the_last_black_man_in_san_francisco.jpg")
file = open("https://kanary-seeds.s3.us-east-2.amazonaws.com/videos/the_last_black_man_in_san_francisco.mov")
the_last_black_man_in_san_francisco.video.attach(io: file, filename: "the_last_black_man_in_san_francisco.mov")

gloria_bell = Movie.create!(
    title: "Gloria Bell",
    year: 2018,
    duration: 102,
    description: %{Gloria (Julianne Moore) spends her nights joyfully letting 
        loose at clubs around Los Angeles and finds herself thrust into an 
        unexpected and complicated new romance.}.squish,
    director: "Sebastian Lelio"
)

file = open("https://kanary-seeds.s3.us-east-2.amazonaws.com/thumbnails/gloria_bell.jpg")
gloria_bell.thumbnail.attach(io: file, filename: "gloria_bell.jpg")
file = open("https://kanary-seeds.s3.us-east-2.amazonaws.com/videos/gloria_bell.mp4")
gloria_bell.video.attach(io: file, filename: "gloria_bell.mp4")

hereditary = Movie.create!(
    title: "Hereditary",
    year: 2018,
    duration: 128,
    description: %{When Ellen, the matriarch of the Graham family, passes away, 
        her daughter Annie (Toni Collette) begins to unravel cryptic and 
        increasingly terrifying secrets about their ancestry. The more she 
        discovers, the more the family finds themselves trying to outrun the 
        sinister fate they seem to have inherited. Making his feature debut, 
        writer-director Ari Aster unleashes a nightmare vision of a domestic 
        breakdown that exhibits the craft and precision of a nascent auteur, 
        transforming a familial tragedy into something ominous and deeply 
        disquieting, and pushing the horror movie into chilling new terrain 
        with its shattering portrait of heritage gone to hell.}.squish,
    director: "Ari Aster"
)

file = open("https://kanary-seeds.s3.us-east-2.amazonaws.com/thumbnails/hereditary.jpg")
hereditary.thumbnail.attach(io: file, filename: "hereditary.jpg")
file = open("https://kanary-seeds.s3.us-east-2.amazonaws.com/videos/hereditary.mov")
hereditary.video.attach(io: file, filename: "hereditary.mov")

a_long_way_from_home = Movie.create!(
    title: "A Long Way From Home",
    year: 2018,
    duration: 42,
    description: %{A chronicle of the struggles and triumphs of the 
        African-American and Latino players who followed Jackie Robinson into 
        white professional baseball. Playing their minor-league ball in small, 
        remote towns where racial segregation remained a fact of life well into 
        the 1960s, these were the men who, before they could live their 
        big-league dreams, first had to beat Jim Crow.}.squish,
    director: "Gaspar Gonzalez"
)

file = open("https://kanary-seeds.s3.us-east-2.amazonaws.com/thumbnails/a_long_way_from_home.jpg")
a_long_way_from_home.thumbnail.attach(io: file, filename: "a_long_way_from_home.jpg")
file = open("https://kanary-seeds.s3.us-east-2.amazonaws.com/videos/a_long_way_from_home.mp4")
a_long_way_from_home.video.attach(io: file, filename: "a_long_way_from_home.mp4")

the_girls_in_the_band = Movie.create!(
    title: "The Girls in the Band",
    year: 2013,
    duration: 87,
    description: %{The award-winning documentary film THE GIRLS IN THE BAND 
        tells the poignant, untold stories of female jazz and big band 
        instrumentalists and their fascinating, history-making journeys from 
        the late 30s to the present day. The many first-hand accounts of the 
        challenges faced by these talented women provide a glimpse into decades 
        of racism and sexism that have existed in America. They wiggled, they 
        jiggled, they wore low cut gowns and short shorts, they kowtowed to the 
        club owners and smiled at the customers...and they did it all just to 
        play the music they loved. In the thirties and forties, hundreds of 
        women musicians toured the country in glamorous All-Girl Bands, while 
        others played side by side with their male counterparts. Yet, by the 
        mid-fifties, female jazz musicians had literally disappeared from the 
        workplace, their names and their contributions to music completely 
        forgotten. Today, there is a new breed of gifted young women taking 
        their rightful place in the world of jazz, which can no longer deny 
        their talents.}.squish,
    director: "Judy Chaikin"
)

file = open("https://kanary-seeds.s3.us-east-2.amazonaws.com/thumbnails/the_girls_in_the_band.jpg")
the_girls_in_the_band.thumbnail.attach(io: file, filename: "the_girls_in_the_band.jpg")
file = open("https://kanary-seeds.s3.us-east-2.amazonaws.com/videos/the_girls_in_the_band.mp4")
the_girls_in_the_band.video.attach(io: file, filename: "the_girls_in_the_band.mp4")

no_ordinary_man = Movie.create!(
    title: "No Ordinary Man",
    year: 2020,
    duration: 85,
    description: %{American jazz musician Billy Tipton developed a reputable 
        touring and recording career in the mid-twentieth century, along with 
        his band The Billy Tipton Trio. After his death in the late 80s, it was 
        revealed that Tipton was assigned female at birth, and his life was 
        swiftly reframed as the story of an ambitious woman passing as a man in 
        pursuit of a music career. The genre-defying documentary NO ORDINARY MAN 
        seeks to correct that misrepresentation by collaborating with trans 
        artists. As they collectively celebrate Tipton's story as a musician 
        living his life according to his own terms, they paint a portrait of a 
        trans culture icon. NO ORDINARY MAN features leading voices and breakout 
        stars in the trans community, including Marquise Vilson, Scott Turner 
        Schofield, Susan Stryker, C. Riley Snorton, and Thomas Page McBee, among 
        others.}.squish,
    director: "Aisling Chin-Yee"
)

file = open("https://kanary-seeds.s3.us-east-2.amazonaws.com/thumbnails/no_ordinary_man.jpg")
no_ordinary_man.thumbnail.attach(io: file, filename: "no_ordinary_man.jpg")
file = open("https://kanary-seeds.s3.us-east-2.amazonaws.com/videos/no_ordinary_man.mov")
no_ordinary_man.video.attach(io: file, filename: "no_ordinary_man.mov")

lorraine_hansberry = Movie.create!(
    title: "Lorraine Hansberry: Sighted Eyes/Feeling Heart",
    year: 2017,
    duration: 118,
    description: %{This documentary sheds valuable light on all aspects of 
        Lorraine Hansberry's play, A Raisin in the Sun, including the daunting 
        challenge of securing investment and a venue for this production about 
        a working class Black family, the casting process, artistic debates and 
        finally its public reception. The film features interviews with the 
        play's original cast members, Sidney Poitier, Ruby Dee, Louis Gossett, 
        Jr. and Glynn Turman, director Lloyd Richards, producer Phil Rose, 
        supporter Harry Belafonte as well as writer Amiri Baraka along with 
        excerpts from the 1961 Hollywood movie.}.squish,
    director: "Tracy Heather Strain"
)

file = open("https://kanary-seeds.s3.us-east-2.amazonaws.com/thumbnails/lorraine_hansberry.jpg")
lorraine_hansberry.thumbnail.attach(io: file, filename: "lorraine_hansberry.jpg")
file = open("https://kanary-seeds.s3.us-east-2.amazonaws.com/videos/lorraine_hansberry.mp4")
lorraine_hansberry.video.attach(io: file, filename: "lorraine_hansberry.mp4")

portrait_of_a_lady_on_fire = Movie.create!(
    title: "Portrait of a Lady On Fire",
    year: 2019,
    duration: 122,
    description: %{Marianne is hired to paint the wedding portrait of Heloise. 
        As the women orbit each other, intimacy and attraction grow as they 
        share Heloise's first moments of freedom.}.squish,
    director: "Celine Sciamma"
)

file = open("https://kanary-seeds.s3.us-east-2.amazonaws.com/thumbnails/portrait_of_a_lady_on_fire.jpg")
portrait_of_a_lady_on_fire.thumbnail.attach(io: file, filename: "portrait_of_a_lady_on_fire.jpg")
file = open("https://kanary-seeds.s3.us-east-2.amazonaws.com/videos/portrait_of_a_lady_on_fire.mov")
portrait_of_a_lady_on_fire.video.attach(io: file, filename: "portrait_of_a_lady_on_fire.mov")

the_watermelon_woman = Movie.create!(
    title: "The Watermelon Woman",
    year: 1996,
    duration: 86,
    description: %{Cheryl Dunye plays a version of herself in this witty, nimble 
        landmark of New Queer Cinema. A video store clerk and fledgling 
        filmmaker, Cheryl becomes obsessed with the "most beautiful mammy," a 
        character she sees in a 1930s movie. Determined to find out who the 
        actress she knows only as the "Watermelon Woman" was and make her the 
        subject of a documentary, she starts researching and is bowled over to 
        discover that not only was Fae Richards (Lisa Marie Bronson) a fellow 
        Philadelphian but also a lesbian. The project is not without drama as 
        Cheryl's singular focus causes friction between her and her friend 
        Tamara (Valarie Walker) and as she begins to see parallels between Fae's 
        problematic relationship with a white director and her own budding 
        romance with white Diana (fellow filmmaker Guinevere Turner).}.squish,
    director: "Cheryl Dunye"
)

file = open("https://kanary-seeds.s3.us-east-2.amazonaws.com/thumbnails/the_watermelon_woman.jpg")
the_watermelon_woman.thumbnail.attach(io: file, filename: "the_watermelon_woman.jpg")
file = open("https://kanary-seeds.s3.us-east-2.amazonaws.com/videos/the_watermelon_woman.mp4")
the_watermelon_woman.video.attach(io: file, filename: "the_watermelon_woman.mp4")

ida = Movie.create!(
    title: "Ida",
    year: 2013,
    duration: 83,
    description: %{The winner of Best Foreign Language Film at the Academy 
        Awards in 2014, IDA is a moving and intimate drama about a young 
        novitiate nun in 1960's Poland who, on the verge of taking her vows, 
        makes a shocking discovery about her past. 18-year old Anna (stunning 
        newcomer Agata Trzebuchowska), a sheltered orphan raised in a convent, 
        is preparing to become a nun when the Mother Superior insists she first 
        visit her sole living relative. Naive, innocent Anna soon finds herself 
        in the presence of her aunt Wanda (Agata Kulesza), a worldly and cynical 
        Communist Party insider, who shocks her with the declaration that her 
        real name is Ida and her Jewish parents were murdered during the Nazi 
        occupation. This revelation triggers a heart-wrenching journey into the 
        countryside, to the family house and into the secrets of the repressed 
        past, evoking the haunting legacy of the Holocaust and the realities of 
        postwar Communism.}.squish,
    director: "Pawel Pawlikowski"
)

file = open("https://kanary-seeds.s3.us-east-2.amazonaws.com/thumbnails/ida.jpg")
ida.thumbnail.attach(io: file, filename: "ida.jpg")
file = open("https://kanary-seeds.s3.us-east-2.amazonaws.com/videos/ida.mp4")
ida.video.attach(io: file, filename: "ida.mp4")

the_bookshop = Movie.create!(
    title: "The Bookshop",
    year: 2017,
    duration: 113,
    description: %{England, 1959. Free-spirited widow Florence Green (Emily 
        Mortimer) risks everything to open a bookshop in a conservative East 
        Anglian coastal town. While bringing about a surprising cultural 
        awakening through works by Ray Bradbury and Vladimir Nabokov, she earns 
        the polite but ruthless opposition of a local grand dame (Patricia 
        Clarkson) and the support and affection of a reclusive book loving 
        widower (Bill Nighy). As Florence's obstacles amass and bear suspicious 
        signs of a local power struggle, she is forced to ask: is there a place 
        for a bookshop in a town that may not want one?}.squish,
    director: "Isabel Coixet"
)

file = open("https://kanary-seeds.s3.us-east-2.amazonaws.com/thumbnails/the_bookshop.jpg")
the_bookshop.thumbnail.attach(io: file, filename: "the_bookshop.jpg")
file = open("https://kanary-seeds.s3.us-east-2.amazonaws.com/videos/the_bookshop.mov")
the_bookshop.video.attach(io: file, filename: "the_bookshop.mov")

ammonite = Movie.create!(
    title: "Ammonite",
    year: 2020,
    duration: 118,
    description: %{1840s England, acclaimed fossil hunter Mary Anning and a 
        young woman sent to convalesce by the sea develop an intense 
        relationship, altering both of their lives forever.}.squish,
    director: "Francis Lee"
)

file = open("https://kanary-seeds.s3.us-east-2.amazonaws.com/thumbnails/ammonite.jpg")
ammonite.thumbnail.attach(io: file, filename: "ammonite.jpg")
file = open("https://kanary-seeds.s3.us-east-2.amazonaws.com/videos/ammonite.mov")
ammonite.video.attach(io: file, filename: "ammonite.mov")

scotty_and_the_secret_history_of_hollywood = Movie.create!(
    title: "Scotty and the Secret History of Hollywood",
    year: 2017,
    duration: 98,
    description: %{The deliciously scandalous story of Scotty Bowers, a handsome 
        ex-Marine who landed in Hollywood after World War II and became 
        confidante, aide-de-camp and lover to many of Hollywood's greatest 
        stars. In the 1940s and '50s, Scotty ran a gas station in the shadow of 
        the studio lots where he would connect his friends with actors and 
        actresses who had to hide their true sexual identities for fear of 
        police raids at gay bars, societal shunning and career suicide. An 
        unsung Hollywood legend, Bowers would cater to the sexual appetites of 
        celebrities--straight and gay-for decades. In 2012, he finally spilled 
        his secrets in a memoir, which revealed a dramatic, pre-Stonewall 
        alternate history of Hollywood.}.squish,
    director: "Matt Tyrnauer"
)

file = open("https://kanary-seeds.s3.us-east-2.amazonaws.com/thumbnails/scotty_and_the_secret_history_of_hollywood.jpg")
scotty_and_the_secret_history_of_hollywood.thumbnail.attach(io: file, filename: "scotty_and_the_secret_history_of_hollywood.jpg")
file = open("https://kanary-seeds.s3.us-east-2.amazonaws.com/videos/scotty_and_the_secret_history_of_hollywood.mov")
scotty_and_the_secret_history_of_hollywood.video.attach(io: file, filename: "scotty_and_the_secret_history_of_hollywood.mov")

love_is_all = Movie.create!(
    title: "Love is All",
    year: 2015,
    duration: 75,
    description: %{Our definitions of "Romantic Love" continually change and 
        adjust to societal changes. This acclaimed film takes us through a 
        century of unprecedented social upheaval and sexual shifts, via 100 
        years of romance on the big screen. From the first kisses on film to the 
        birth of youth culture, gay liberation and free love, we follow courting 
        couples flirting at dances, necking in theaters, shacking up, and 
        fighting for the right to love. This is the celluloid story of love and 
        courtship since the birth of the movie camera; told with spellbinding 
        footage from the British Film Institute! Directed by Kim Longinotto and 
        set to a stunning Richard Hawley (Pulp) soundtrack.}.squish,
    director: "Kim Longinotto"
)

file = open("https://kanary-seeds.s3.us-east-2.amazonaws.com/thumbnails/love_is_all.jpg")
love_is_all.thumbnail.attach(io: file, filename: "love_is_all.jpg")
file = open("https://kanary-seeds.s3.us-east-2.amazonaws.com/videos/love_is_all.mp4")
love_is_all.video.attach(io: file, filename: "love_is_all.mp4")

raising_bertie = Movie.create!(
    title: "Raising Bertie",
    year: 2016,
    duration: 97,
    description: %{Recorded over six years, RAISING BERTIE delivers an authentic 
        and tender portrait of the lives of three young boys as they face a 
        precarious coming of age within Bertie County, a rural African-American 
        community in North Carolina. Another harrowing work from the acclaimed 
        documentary powerhouse Kartemquin Films, the film shows the process of 
        growing up in a place afflicted by generations of economic and 
        educational segregation.}.squish,
    director: "Margaret Byrne"
)

file = open("https://kanary-seeds.s3.us-east-2.amazonaws.com/thumbnails/raising_bertie.jpg")
raising_bertie.thumbnail.attach(io: file, filename: "raising_bertie.jpg")
file = open("https://kanary-seeds.s3.us-east-2.amazonaws.com/videos/raising_bertie.mov")
raising_bertie.video.attach(io: file, filename: "raising_bertie.mov")

cold_case_hammarskjold = Movie.create!(
    title: "Cold Case Hammarskjold",
    year: 2019,
    duration: 125,
    description: %{In 1961, UN secretary-general Dag Hammarskjold's plane 
        mysteriously and fatally crashed on African soil. As director Mads 
        Brugger begins to investigate the case with fresh eyes, he discovers 
        something far more sinister than expected.}.squish,
    director: "Mads Brugger"
)

file = open("https://kanary-seeds.s3.us-east-2.amazonaws.com/thumbnails/cold_case_hammarskjold.jpg")
cold_case_hammarskjold.thumbnail.attach(io: file, filename: "cold_case_hammarskjold.jpg")
file = open("https://kanary-seeds.s3.us-east-2.amazonaws.com/videos/cold_case_hammarskjold.mov")
cold_case_hammarskjold.video.attach(io: file, filename: "cold_case_hammarskjold.mov")

portrait_of_jason = Movie.create!(
    title: "Portrait of Jason",
    year: 1967,
    duration: 108,
    description: %{On December 2, 1966, director Shirley Clarke and a miniscule 
        film crew gathered in her apartment at the Hotel Chelsea. Bestowed for 
        twelve hours with the one-and-only Jason Holliday, Clarke confronted the 
        iconic performer about his good times and bad behavior as a gay hustler, 
        on-and-off houseboy and aspiring cabaret performer. As the cameras 
        rolled and Holliday spun tales, sang songs and donned costumes through 
        the night, a mesmerizing portrait formed of a remarkable man. Ingmar 
        Bergman called it "the most extraordinary film I've seen in my life," 
        but audiences may know it better as PORTRAIT OF JASON, a funny, stinging 
        and painful meditation on pride and prejudice through the eyes of a 
        legendary figure.}.squish,
    director: "Shirley Clarke"
)

file = open("https://kanary-seeds.s3.us-east-2.amazonaws.com/thumbnails/portrait_of_jason.jpg")
portrait_of_jason.thumbnail.attach(io: file, filename: "portrait_of_jason.jpg")
file = open("https://kanary-seeds.s3.us-east-2.amazonaws.com/videos/portrait_of_jason.mp4")
portrait_of_jason.video.attach(io: file, filename: "portrait_of_jason.mp4")

in_jackson_heights = Movie.create!(
    title: "In Jackson Heights",
    year: 2015,
    duration: 190,
    description: %{Jackson Heights, Queens, New York City is one of the most 
        ethnically and culturally diverse communities in the United States and 
        the world. There are immigrants from every country in South America, 
        Mexico, Bangladesh, Pakistan, Afghanistan, India and China. The people 
        who live in Jackson Heights, in their cultural, racial and ethnic 
        diversity, are representative of the new wave of immigrants to America. 
        The subject of this film is the daily life of the people in this 
        community--their businesses, community centers, religions, and 
        political, cultural and social lives--and the conflict between 
        maintaining ties to traditions of the countries of origin and the need 
        to learn and adapt to American ways and values.}.squish,
    director: "Frederick Wiseman"
)

file = open("https://kanary-seeds.s3.us-east-2.amazonaws.com/thumbnails/in_jackson_heights.jpg")
in_jackson_heights.thumbnail.attach(io: file, filename: "in_jackson_heights.jpg")
file = open("https://kanary-seeds.s3.us-east-2.amazonaws.com/videos/in_jackson_heights.mp4")
in_jackson_heights.video.attach(io: file, filename: "in_jackson_heights.mp4")

stolen_education = Movie.create!(
    title: "Stolen Education",
    year: 2013,
    duration: 67,
    description: %{As a 9 year-old second grader, Lupe had been forced to remain 
    in the first grade for three years, not because of her academic performance 
        but solely because she was Mexican American. She was one of eight young 
        students who testified in a federal court case in 1956 to end the 
        discriminatory practice (Hernandez et al. v. Driscoll Consolidated 
        Independent School District), one of the first post-Brown desegregation 
        court cases to be litigated. STOLEN EDUCATION portrays the courage of 
        these young people, testifying in an era when fear and intimidation were 
        used to maintain racial hierarchy and control. The students won the 
        case, but for almost sixty years the case was never spoken about in the 
        farming community where they lived despite its significance.}.squish,
    director: "Enrique Aleman"
)

file = open("https://kanary-seeds.s3.us-east-2.amazonaws.com/thumbnails/stolen_education.jpg")
stolen_education.thumbnail.attach(io: file, filename: "stolen_education.jpg")
file = open("https://kanary-seeds.s3.us-east-2.amazonaws.com/videos/stolen_education.mp4")
stolen_education.video.attach(io: file, filename: "stolen_education.mp4")

on_a_knife_edge = Movie.create!(
    title: "On a Knife Edge",
    year: 2017,
    duration: 90,
    description: %{Set against a background of rising tension and protest, a 
        Lakota teenager learns first-hand what it means to lead a new generation 
        and enter adulthood in a world where the odds are stacked against him. 
        Filmed over a five-year period, ON A KNIFE EDGE provides a privileged 
        view into the interior world of George Dull Knife as he becomes 
        politically active with the American Indian Movement, confronts the 
        challenges of growing up on the Pine Ridge Reservation, and wrestles 
        with accepting leadership of his storied family from his aging 
        father.}.squish,
    director: "Jeremy Williams"
)

file = open("https://kanary-seeds.s3.us-east-2.amazonaws.com/thumbnails/on_a_knife_edge.jpg")
on_a_knife_edge.thumbnail.attach(io: file, filename: "on_a_knife_edge.jpg")
file = open("https://kanary-seeds.s3.us-east-2.amazonaws.com/videos/on_a_knife_edge.mp4")
on_a_knife_edge.video.attach(io: file, filename: "on_a_knife_edge.mp4")

#--------------------GENRES--------------------#

independent_cinema = Genre.create!(name: "Independent Cinema")
ethnicity_and_identity = Genre.create!(name: "Ethnicity & Identity")
historical_perspectives = Genre.create!(name: "Historical Perspectives")
lgbtq_cinema = Genre.create!(name: "LGBTQ Cinema")

#-----------------MOVIEGENRES------------------#

Moviegenre.create!(movie_id: moonlight.id, genre_id: independent_cinema.id)
Moviegenre.create!(movie_id: twentieth_century_women.id, genre_id: independent_cinema.id)
Moviegenre.create!(movie_id: lady_bird.id, genre_id: independent_cinema.id)
Moviegenre.create!(movie_id: hearts_beat_loud.id, genre_id: independent_cinema.id)
Moviegenre.create!(movie_id: the_last_black_man_in_san_francisco.id, genre_id: independent_cinema.id)
Moviegenre.create!(movie_id: gloria_bell.id, genre_id: independent_cinema.id)
Moviegenre.create!(movie_id: hereditary.id, genre_id: independent_cinema.id)
Moviegenre.create!(movie_id: the_watermelon_woman.id, genre_id: independent_cinema.id)
Moviegenre.create!(movie_id: ida.id, genre_id: independent_cinema.id)
Moviegenre.create!(movie_id: the_bookshop.id, genre_id: independent_cinema.id)
Moviegenre.create!(movie_id: amazing_grace.id, genre_id: independent_cinema.id)

Moviegenre.create!(movie_id: i_am_not_your_negro.id, genre_id: ethnicity_and_identity.id)
Moviegenre.create!(movie_id: some_girls.id, genre_id: ethnicity_and_identity.id)
Moviegenre.create!(movie_id: a_long_way_from_home.id, genre_id: ethnicity_and_identity.id)
Moviegenre.create!(movie_id: the_girls_in_the_band.id, genre_id: ethnicity_and_identity.id)
Moviegenre.create!(movie_id: lorraine_hansberry.id, genre_id: ethnicity_and_identity.id)
Moviegenre.create!(movie_id: raising_bertie.id, genre_id: ethnicity_and_identity.id)
Moviegenre.create!(movie_id: in_jackson_heights.id, genre_id: ethnicity_and_identity.id)
Moviegenre.create!(movie_id: stolen_education.id, genre_id: ethnicity_and_identity.id)
Moviegenre.create!(movie_id: on_a_knife_edge.id, genre_id: ethnicity_and_identity.id)
Moviegenre.create!(movie_id: portrait_of_jason.id, genre_id: ethnicity_and_identity.id)

Moviegenre.create!(movie_id: amazing_grace.id, genre_id: historical_perspectives.id)
Moviegenre.create!(movie_id: i_am_not_your_negro.id, genre_id: historical_perspectives.id)
Moviegenre.create!(movie_id: love_gilda.id, genre_id: historical_perspectives.id)
Moviegenre.create!(movie_id: no_maps_on_my_taps.id, genre_id: historical_perspectives.id)
Moviegenre.create!(movie_id: a_long_way_from_home.id, genre_id: historical_perspectives.id)
Moviegenre.create!(movie_id: no_ordinary_man.id, genre_id: historical_perspectives.id)
Moviegenre.create!(movie_id: lorraine_hansberry.id, genre_id: historical_perspectives.id)
Moviegenre.create!(movie_id: scotty_and_the_secret_history_of_hollywood.id, genre_id: historical_perspectives.id)
Moviegenre.create!(movie_id: love_is_all.id, genre_id: historical_perspectives.id)
Moviegenre.create!(movie_id: cold_case_hammarskjold.id, genre_id: historical_perspectives.id)
Moviegenre.create!(movie_id: portrait_of_jason.id, genre_id: historical_perspectives.id)
Moviegenre.create!(movie_id: stolen_education.id, genre_id: historical_perspectives.id)

Moviegenre.create!(movie_id: moonlight.id, genre_id: lgbtq_cinema.id)
Moviegenre.create!(movie_id: hearts_beat_loud.id, genre_id: lgbtq_cinema.id)
Moviegenre.create!(movie_id: no_ordinary_man.id, genre_id: lgbtq_cinema.id)
Moviegenre.create!(movie_id: lorraine_hansberry.id, genre_id: lgbtq_cinema.id)
Moviegenre.create!(movie_id: portrait_of_a_lady_on_fire.id, genre_id: lgbtq_cinema.id)
Moviegenre.create!(movie_id: the_watermelon_woman.id, genre_id: lgbtq_cinema.id)
Moviegenre.create!(movie_id: ammonite.id, genre_id: lgbtq_cinema.id)
Moviegenre.create!(movie_id: scotty_and_the_secret_history_of_hollywood.id, genre_id: lgbtq_cinema.id)
Moviegenre.create!(movie_id: love_is_all.id, genre_id: lgbtq_cinema.id)
Moviegenre.create!(movie_id: portrait_of_jason.id, genre_id: lgbtq_cinema.id)

#------------------WATCHLISTS------------------#

Watchlist.create!(user_id: demo.id, movie_id: moonlight.id)
Watchlist.create!(user_id: demo.id, movie_id: amazing_grace.id)
Watchlist.create!(user_id: demo.id, movie_id: i_am_not_your_negro.id)