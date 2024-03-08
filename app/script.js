let data = [];

const submitComment = (event) => {
  event.preventDefault();

  const author = inputAuthor.value;
  const comment = inputComment.value;
  const dataT = commentTime();

  data.push({ author: author, comment: comment });
  console.log(data);

  loadComment();
};

const commentTime = () =>{
  const data = new Date();
  const format = {day: 'numeric', month: 'short', hour: 'numeric'}
  const dataT = `${data.toLocaleString('pt-BR', format)} horas`

  return dataT
}



const formComentario = document.getElementById("formComment");
formComentario.addEventListener("submit", submitComment);

const loadComment = () => {
  // Dados carregados da API
  if (data) {
    displayComment();
  }
};

const displayComment = () => {
  const divFeed = document.getElementById("comment-feed");
divFeed.innerHTML = ``;
  data.forEach((item) => {
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
            ${item.comment}<div id="dateCommit">${commentTime()}</div>
        </p>
   
        `;
    divFeed.appendChild(divDisplay);
  });
};
