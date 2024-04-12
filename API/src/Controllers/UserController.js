
const UserService = require("../Services/UserService.js")

const UserController = {
    getUsers: (req, res) =>{
        UserService.getDBUsers().
        then( result =>{
            res.json({success: true, users: result});
        }).catch(error =>{
            res.status(500).json({success: false, error: `Error interno do servidor: ${error}`});
        })
    },
    getUserById: (req, res) =>{
        const userId = req.params.id;
        UserService.getDBUserById
    }
    
}

module.exports = UserController;