import { LoginService } from "../services/login.services.js";
import { StorageServices } from "../services/localStorage.services.js"; 
import { User } from "../Comment/models/user.model.js";
import { setAuthorCommentField } from "../Comment/CommentComponent.js";


const getLoginInputs = () => {
  return {
    username: document.getElementById("username"),
    password: document.getElementById("password"),
  };
};

const handleShowHide = () => {
  const newCommentTag = document.getElementById("form-comentario");
  const loginTag = document.getElementById("login-form");
  const userProfile = document.getElementById("user-profile");

  if (newCommentTag.classList.contains("disabled")) {
    newCommentTag.classList.remove("disabled");
    userProfile.classList.remove("disabled");
    loginTag.classList.add("disabled");
  } else {
    newCommentTag.classList.add("disabled");
    userProfile.classList.add("disabled");
    loginTag.classList.remove("disabled");
  }
};

const userProfileTitle = (name) => {
  const aLink = document.getElementById("user-profile-title");
  aLink.innerHTML = ``;
  aLink.innerHTML = `<img src="https://voxnews.com.br/wp-content/uploads/2017/04/unnamed.png" alt="mdo" width="32" height="32" class="rounded-circle">
    <p class="small lh-sm text-gray-dark">
        <strong class=" text-gray-dark dropdown-toggle">@${name}</strong>
    </p>`;
};

const handleLogin = (event) => {
  event.preventDefault();
  const { username, password } = getLoginInputs();

  const usr = new User(null, username.value, password.value);

  LoginService.apiAuthUser(usr)
    .then((result) => {
      StorageServices.user.store(result);
      const currentUser = StorageServices.user.get();

      userProfileTitle(currentUser.getFirstname());
      setAuthorCommentField(currentUser);

      handleShowHide();
    })
    .catch((error) => {
      alert(`Login inválido. Erro:${error.message}`);
    });
};

const LoginComponent = {
  run: () => {
    const formLogin = document.getElementById("formLogin");
    formLogin.addEventListener("submit", handleLogin);
  },
};

export { LoginComponent };
