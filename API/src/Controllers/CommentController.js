const CommentService = require('../Services/CommentService');

const CommentController = {
    getComments: (req, res) => {
        CommentService.getDBComments().then(resultado =>{
            res.json({success: true, comments: resultado})
        }).catch(error =>{
            res.status(500).json({success: false, error: `Internal server error:${error.message}`})
        })

    }
}

module.exports = CommentController;
