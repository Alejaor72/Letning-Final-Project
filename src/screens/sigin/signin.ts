import SignInStyle from "./SignInStyle.css"
import { addObserver, appState, dispatch } from "../../store/index";

class SignIn extends HTMLElement {
  
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

    render() {
       this.shadowRoot!.innerHTML = ``

        const css = this.ownerDocument.createElement("style");
        css.innerHTML = SignInStyle;
        this.shadowRoot?.appendChild(css);

        this.shadowRoot!.innerHTML += `
        <div class="header">
            <h1>Letning</h1>
            <h2>I already have an account</h2>
            <button class="loginbutton">Log In</button>
        </div>
        
        <div class="SectorSignin">
            <img url="https://i.pinimg.com/originals/64/00/17/64001798df0233f43a9885424bd33ae5.png" class="signinIcon">
            <h1 class="signinText">Sign in to begin</h1>
            <h3>Email</h3>
            <input class="input" type="text"></input>
            <h3>Name</h3>
            <input class="input" type="text"></input>
            <h3>Password</h3>
            <input class="input" type="text"></input>
            <h3>Age</h3>
            <input class="input" type="text"></input>
            <button class="continueButton">Continue</button>
        </div>
        `
    }
}
customElements.define('my-signin', SignIn)
export default SignIn