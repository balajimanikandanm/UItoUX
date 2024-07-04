CREATE TABLE public.ProductList (
  id SERIAL PRIMARY KEY,
  ProductName VARCHAR(255),
  Price VARCHAR(50),
  TopRated boolean default false,
  SpecialOffer boolean default false,
  BestSeller boolean default false,
  Reviews VARCHAR(50)
);



INSERT INTO public.ProductList (ProductName, Price, TopRated,SpecialOffer,BestSeller, Reviews)
VALUES
  ('Fantastic 12-Stroke Engine With A Power of 1991 hp', '$2579.00', true,false,false, '17 reviews'),
  ('Set of Four 19 Inch Spiked Tires','$327.00', true,false,false, '9 reviews'),
  ('40 Megawatt Low Beam Lamp','$4.00', true,false,false, '31 reviews'),
  ('Brandix Manual Five Speed GearBox','$879.00',false,true,true,'6 reviews'),
  ('Set of Car Floor Mats Brandix Z4','$78.00',false,true,false,'16 reviews'),
  ('Taillights Brandix Z54','$60.00',false,true,false,'8 reviews'),
  ('Brandix Engine Block Z4','$452.00',false,false,true,'No reviews'),
  ('Brandix Clutch Discs','$345.00',false,false,true,'7 reviews');