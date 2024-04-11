import { mapComments } from "../../FRONTEND/Comment/models/comment.model.js";

const URL_API = "http://localhost:7000";

const UserService = {
    apiGetUserComments: (userId) => {
        return new Promise((resolve, reject) => {
            fetch(`${URL_API}/user-comments/${userId}`)
                .then(response => response.json())
                .then(data => {
                    if (data.success) {
                        resolve(mapComments(data.comments));
                    } else {
                        reject(data.error);
                    }
                })
        })
    }
}

export default UserService;