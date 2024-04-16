import { LoginComponent} from './Login/LoginComponent.js';
import { CommentComponent } from"./Comment/CommentComponent.js"
import { UserComponent } from "./User/UserComponent.js";

MainView.build();
LoginComponent.run();
CommentComponent.run();
UserComponent.run();

document.addEventListener("DOMContentLoaded", ()=>{
    if (LoginService.isLoggedIn()) {
        console.log(LoginService.getUserSession())
    }

})

window.addEventListener("load", ()=>{
    if (LoginService.isLoggedIn()) {
        console.log(LoginService.getUserSession())
    }
})