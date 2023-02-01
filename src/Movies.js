class Movies {
    constructor(connection){
        this.connection = connection;
    }
    
    // View all departments
    async viewAll(){
        return new Promise((resolve, reject) => {
            this.connection.query(`SELECT * FROM department;`, function(err, results) {
                if (err) {
                  return reject(err);
                }
                return resolve(results);
            });
        });
    }

    // Add a department
    async addReview(newDeptName){
        return new Promise((resolve, reject) => {
            this.connection.query(`INSERT INTO department (name) VALUES (?);`, newDeptName, function(err, results) {
                if (err) {
                    return reject(err);
                }
                return resolve(results);
            });
        });
    }
}

module.exports = Movies;