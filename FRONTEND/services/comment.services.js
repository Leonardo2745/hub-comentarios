const URL_API = 'http://localhost:7000';

const CommentService = {
    apiGetComment: () =>{
        return new Promise((resolve,reject)=>{
            fetch(`${URL_API}/comment`).then((response) => resolve.json()).then(
                data =>{
                    if(data.success){
                        resolve(data.comment);
                    }else{
                        reject('Erro na requisição')
                    }
                });
    }).catch((error) => {
        reject(error);
    });
    },
};

export {CommentService}