var config = {
	database: {
		host:	  'localhost', 	// database host
		user: 	  'root', 		// your database username
		password: 'root', 		// your database password
		port: 	  3306, 		// default MySQL port
		db: 	  'mydb' 		// your database name
	},
	server: {
		host: '127.0.0.1',
		port: '3306'
	}
}

module.exports = config

/*
DB:mydb
Table:users

CREATE TABLE users (
id int(11) NOT NULL auto_increment,
name varchar(100) NOT NULL,
age int(3) NOT NULL,
email varchar(100) NOT NULL,
PRIMARY KEY (id)
);

*/