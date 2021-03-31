class Tables {
	init(connection) {
		this.connection = connection;
		this.newScheduling();
	}

	newScheduling() {
		const sql = `
        CREATE TABLE IF NOT EXISTS scheduling
        (id int NOT NULL AUTO_INCREMENT,
        name_client varchar(50) NOT NULL,
        services varchar(50) NOT NULL,
        status varchar(20) NOT NULL,
        data_service date NOT NULL,
        data_scheduling date NOT NULL,
        PRIMARY KEY (id))`
        
        this.connection.query(sql, error => {
            if (error) throw error;
        });
            
            
    };
};
