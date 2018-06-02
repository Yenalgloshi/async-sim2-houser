insert into houserusers ( username, password ) 
values ( $1, $2 ) returning *;