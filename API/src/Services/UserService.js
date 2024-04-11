const UserService = {
    getUser: () =>{
        return new Promise((resolve, reject) => {
            db.query('SELECT * FROM user', (err, results) => {
                if (error){
                    reject(`Error ao buscar usuários: ${error.message}`)
                } else{
                    resolve(results);
                }
            });
        })
    }
}



