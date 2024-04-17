import { LoginComponent, setSignedUser } from "./src/components/LoginComponent.js";
import { CommentComponent, loadComment } from "./src/components/CommentComponent.js";
import { UserComponent } from "./src/components/UserComponent.js";
import MainView from "./src/view/main.view.js";
import { LoginService } from "./src/services/login.services.js";


MainView.build();
LoginComponent.run();
CommentComponent.run();
UserComponent.run();

const main = {
    run: () => {
        MainView.build();
        LoginComponent.run();
        CommentComponent.run();
        UserComponent.run();
    }
}
window.onload = () => {
    main.run();
    if (LoginService.isLoggedIn()) {
        setSignedUser()
    }
    
}
document.addEventListener("DOMContentLoaded", () => {
    if (LoginService.isLoggedIn()) {
        setSignedUser();
    }
    loadComment();
})

window.addEventListener("load", () => {
    if (LoginService.isLoggedIn()) {
        setSignedUser();
    }
    loadComment();
})