drop table if exists HouserProperties;

create table HouserProperties (
  userID integer,
  propertyName text NOT NULL,
  propertyDescription text NOT NULL,
  address varchar(60) NOT NULL,
  city varchar(60) NOT NULL,
  state varchar(11) NOT NULL,
  zip int NOT NULL,
  imgURL text NOT NULL,
  loanAmt float NOT NULL,
  monthlyMortgage float NOT NULL,
  desiredRent float NOT NULL,
  primary key (propertyID),
  foreign key (userID) references HouserUsers (userID)
  CHECK (LENGTH(ZIP) = 5)
);

insert into HouserProperties
(userID, propertyName, propertyDescription, address, city, state, zip, imgURL, loanAmt, monthlyMortgage, desiredRent)
values
(1,'The American dream home', 'This is a beautiful home that has a large fully-fenced lot with mature landscaping, several fruit trees, and a garden area. The home has an open plan design with beautiful marble and wood floors. There is plenty of room for entertaining with a formal dining area off the kitchen and a large backyard deck. The master suite is upstairs and it even boasts a hot tub. With four bedrooms, a nice family room, and a great location.', 'Suburbia', 'Woodside', 'UT', 87654, 'http://www.porterdavis.com.au/~/media/homes/astor%20grange/lot%20123%20liverpool%20street%20upc/upper-point-cook---astor-grange-54---0741_long-island-facade.jpg?as=1&h=649&la=en&w=1400&crop=1', 300000, 2000, 1500,),
(1, 'Mansion', 'The Sundial House, is brilliantly designed with panoramic views. Set in exclusive Country Club Estates, the museum-worthy home offers exquisite craftsmanship, unexpected curves and an undulated perfection of casted light and circles. Be enveloped by a sense of harmony, awestruck by dramatic design and unobstructed views.', '7191 Encelia Dr', 'La Jolla', 'CA', 98765, 'https://vignette.wikia.nocookie.net/trollpasta/images/8/82/22083-Large-Mansion-Exterior-.jpg/revision/latest?cb=20140613041809', 8495000, 12000, 15000),
(1, 'Trailer', 'This 2-bedroom, 1-bath POS mobile home includes a leaky gas stove and fridge. The trailer is from the early to mid 1980s. This trash pit is located next to the van by the river.', 'Down by the river', 'Columbus','Georgia', 54321, 'https://image.shutterstock.com/z/stock-photo-old-vintage-abandoned-mobile-home-trailer-house-camper-176562644.jpg', 3500, 300, 150),
(1, 'Haunted House', 'The real estate agent forgot to mention the horrific incidents that occurred in this seven-bedroom luxury home. Stone fireplaces and antique finishes aside, the house comes equipped with a far spookier feature, the angry ghost of a man who goes about slamming doors as he makes his way around the property. We should probably mention the second ghost, that of a headless horseman, who accidentally hung himself outside the premises with the reins of his spooked horse.', '274 Charming Forge Rd', 'Womelsdorf', 'Pennsylvania', 12345, 'https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AAtIrBm.img?h=582&w=1119&m=6&q=60&u=t&o=f&l=f', 925000, 4000, 2500)