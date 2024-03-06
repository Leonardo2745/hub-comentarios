let data = []

const submitComment =(event) =>{
    event.preventDefault();

    const author = document.getElementById('inputAuthor').value;
    const comment = document.getElementById('inputComment').value;

    data.push({author:author, comment:comment})

    console.log(data)
};

const formComentario = document.getElementById('formComment') 
formComentario.addEventListener("submit",submitComment);

const loadComment = () =>{

    if (data){
        displayComment();
    }
}

const displayComment = () =>{
    const body = document.getElementsByTagName('body')[0];
    console.log(body)
    data.forEach(element => {
        const divDisplay = document.createElement('div');
    divDisplay.className = 'comentarios'
    divDisplay.innerHTML =`
    <strong>${elemento.author}</strong>
    <p>${elemento.comment}</p>
    `
    body.appendChild(divDisplay);

    })
}

loadComment()