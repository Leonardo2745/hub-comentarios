const db = require('../db_connect');

const UserService = {
    getDBUser: () =>{
        return new Promise((resolve, reject) => {
            db.query('SELECT * FROM user', (err, results) => {
                if (err){
                    reject(err)
                }
                    resolve(result);
                
            });
        })
    },
    getDBUserById(id) {
        return new Promise ((resolve, reject)=>{
            db.query('SELECT * FROM user WHERE id =?', [id], (error, result) =>{
                if(error){
                    reject(error.message);
                }
                if(result.lenght > 0) {
                    resolve(result);
                } else {
                    reject("Not found")
                }
            })
        })
    }
}

 module.exports = UserService;


