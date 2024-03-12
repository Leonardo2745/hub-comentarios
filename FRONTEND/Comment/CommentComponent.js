import { formatDate } from "../utils";

const getInputComment = () =>{
    return{
        author: document.getElementById(inputAuthor),
        comment: document.getElementById(inputComment)
    }
}
const setInputComment = (authorValue, commentValue) =>{
    const {author, comment} = getInputComment();
    author.value = authorValue ;
    comment.value = commentValue ;
    
}

const getInputCommentValue = () =>{
    return{
        author: document.getElementById(inputAuthor).value,
        comment: document.getElementById(inputComment).value
    }
}



const submitComment = (event) => {
  event.preventDefault();

  const comment = getInputCommentValue()

  //requisição Post para enviar o comment
  loadComment();
};



const loadComment = () => {
  // Dados carregados da API
  if (data) {
    displayComment(data);
  }
};

const displayComment = (comments) => {
  const divFeed = document.getElementById("comment-feed");
    divFeed.innerHTML = ``;
  comments.forEach((item) => {
    const divDisplay = document.createElement("div");
    divDisplay.className = "d-flex text-body-secondary pt-3";
    divDisplay.innerHTML = ` 
       
        <svg class="bd-placeholder-img flex-shrink-0 me-2 rounded" width="32" height="32"
            xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 32x32"
            preserveAspectRatio="xMidYMid slice" focusable="false">
            <title>Comment</title>
            <rect width="100%" height="100%" fill="#007bff"></rect><text x="50%" y="50%" fill="#007bff"
                dy=".3em">32x32</text>
        </svg>
        <div>
        <p class="pb-3 mb-0 small lh-sm border-bottom" id="showComments">
            <strong class="d-block text-gray-dark">@${item.author}</strong>
            ${item.comment}<div id="dateCommit">${formatDate(item.date)}</div>
            ${item.comment}
        </p>
   
        `;
    divFeed.appendChild(divDisplay);
  });
};

const CommentComponent = {
    run: () =>{
        const formComentario = document.getElementById("formComment");
        formComentario.addEventListener("submit", submitComment);
        window.onload = () => {
            loadComment();
    
        }
    }
}

export {CommentComponent}