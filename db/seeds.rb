require "faker"

User.create(
  first_name: "Bryan Garris", 
  dob_day: 16, 
  dob_month: 5, 
  dob_year: 2000, 
  show_gender: Faker::Boolean.boolean, 
  gender_identity: "male", 
  show_sexual_orientation: Faker::Boolean.boolean,
  sexual_orientation: "straight",
  gender_interest: "female", 
  email: "bryangarris@sample.com", 
  url1: "https://pbs.twimg.com/profile_images/1668786168996003842/xAG6X_jS_400x400.jpg", 
  url2: "https://cdn.shoplightspeed.com/shops/636535/files/48942453/1652x1652x1/human-kanvas-prints-by-ash-bryan-garris-2.jpg",
  url3: "https://pbs.twimg.com/media/F5WDZj2XUAEdV3Q.jpg:large",
  url4: "https://images.303magazine.com/uploads/2019/09/69825853_1812466855565451_5232244750442037248_o.jpg",
  url5: "https://pbs.twimg.com/media/ERaPULXXsAEEjod.jpg:large",
  about: "I sing for a hardcore punk band, called Knocked Loose.",
  password: "123456",   
  password_confirmation: "123456",
  location: "United States, Oldham County, Kentucky")

User.create(
  first_name: "Vanessa Hudson", 
  dob_day: 18, 
  dob_month: 9, 
  dob_year: 1999, 
  show_gender: Faker::Boolean.boolean, 
  gender_identity: "female", 
  show_sexual_orientation: Faker::Boolean.boolean,
  sexual_orientation: "straight",
  gender_interest: "male", 
  email: "vanessahudson@sample.com", 
  url1: "https://static1.purebreak.com.br/articles/8/87/29/8/@/329038-vanessa-hudgens-revela-que-tem-as-gravac-700x700-1.jpg", 
  url2: "https://media1.popsugar-assets.com/files/thumbor/6S0r4dmvaGOYlnKyTXVM1JiAVtg/751x48:2236x1533/fit-in/500x500/filters:format_auto-!!-:strip_icc-!!-/2020/02/11/796/n/1922398/4d06fc5a5e42ed50633030.80906231_/i/Vanessa-Hudgens.jpg",
  url3: "https://images.ecestaticos.com/tQVxDG9qpaNCG_CAXQtY1p6MSF8=/0x0:2272x1515/1200x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F502%2F958%2Fc66%2F502958c6674f3c1492acc124fca0d638.jpg",
  url4: "https://www.shefinds.com/files/2023/07/Vanessa-Hudgens-Unicef-Summer-Gala-2019.jpg",
  url5: "https://hips.hearstapps.com/vidthumb/images/vanessa-hudgens-1670836622.jpg",
  about: "I'm a very analytical woman, who makes decisions based on data.",
  password: "123456",   
  password_confirmation: "123456",
  location: "United Kingdom, England, London")

