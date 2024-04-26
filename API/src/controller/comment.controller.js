const CommentService = require('../services/comment.services');
const CommentController = {
    getComments: (req, res) => {
        CommentService.getDBComments().then( resultado =>{
            res.json({success: true, comment: resultado})
        }).catch(error => {
            res.status(500).json({success: false, error: `Internal server error: ${error.message}`})
        })
    },
    getCommentsByUserId: (req, res) => {
        const userId = req.params.userId;
        CommentService.getDBCommentsByUserId(userId).then( resultado =>{
            res.json({success: true, comments: resultado})
        }).catch(error => {
            res.status(500).json({success: false, error: `Internal server error: ${error.message}`})
        })
    },
    getCommentById: (req,res) => {
        const id = req.params.id;
        CommentService.getDBCommentById(id).then( resultado =>{
            res.json({success: true, comment: resultado})
        }).catch(error => {
            res.status(500).json({success: false, error: `Internal server error: ${error.message}`})
        })
    }
    ,
    addComment: (req, res) => {
        const comment = req.body;
        const usr = req.user;
        if(!(usr && usr.id === comment.userId)){
            res.status(401).json({success: false, error: 'Você não tem a sensi'})
        }
        CommentService.addDBNewComment(comment).then( () =>{
            res.json({success: true, message: 'Comentário adicionado com sucesso!'})
        }).catch(error => {
            res.status(500).json({success: false, error: `Internal server error: ${error.message}`})
        });
    },
    updateComment: (req, res) => {
        const comment = req.body;
        const usr = req.user;
        if(!(usr && usr.id === comment.userId)){
            res.status(401).json({success: false, error: 'Você não tem a sensi'})
        }
        CommentService.updateDBComment(comment).then( () =>{
            res.json({success: true, message: 'Comentário atualizado com sucesso!'})
        }).catch(error => {
            res.status(500).json({success: false, error: `Internal server error: ${error.message}`})
        });
    },
    deleteComment: (req, res) => {
        const id = req.params.id;
        const usr = req.user;
        if(!(usr && usr.id === comment.userId)){
            res.status(401).json({success: false, error: 'Você não tem a sensi'})
        }
        CommentService.deleteDBComment(id).then( () =>{
            res.json({success: true, message: 'Comentário deletado com sucesso!'})
        }).catch(error => {
            res.status(500).json({success: false, error: `Internal server error: ${error.message}`})
        });
    }
}
module.exports = CommentController;