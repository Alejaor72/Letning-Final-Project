import LoginStyle from "./LoginStyle.css"
import { addObserver, appState, dispatch } from "../../store/index";
import { Screens } from "../../types/store";
import { navigate } from "../../store/actions";


class Login extends HTMLElement {
  
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
      addObserver(this);
    }

    connectedCallback() {
        if (this.shadowRoot) {
            this.render()
        }
    } 
    changescreen(){
        dispatch(navigate(Screens.HOME));
    }
    render() {
       this.shadowRoot!.innerHTML = ``

        const css = this.ownerDocument.createElement("style");
        css.innerHTML = LoginStyle;
        this.shadowRoot?.appendChild(css);

        this.shadowRoot!.innerHTML += `
        <div class="fondologin">
        <div class="SectorLogin">
            <h1>Welcome Back</h1>
            <h3>Email</h3>
            <input class="input" type="text"></input>
            <h3>Password</h3>
            <input class="input" type="text"></input>
            <button class="forgotBtn">¿Forgot your Password?</button>
            <button class="logInButton">Log In</button>
            <p>¿First time in letning? <a class="registerbtn">Register</a></p>
        </div>
    </div>
        `
    }
}
customElements.define('my-login', Login)
export default Login