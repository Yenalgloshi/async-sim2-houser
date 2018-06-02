insert into houser_properties (user_id, prop_name, prop_desc, address, city, state, zip, img_url, loan_amt, mon_mort, rent) 
values ( $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11 ) returning *;