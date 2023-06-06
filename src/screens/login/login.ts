import LoginStyle from "./LoginStyle.css"
import LoginDiv from "../../components/LoginDiv/LoginDiv";
import ButtonLogInEnter from "../../components/ButtonLoginEnter/ButtonLoginEnter";
import SignIntextDiv from "../../components/SignIntextDiv/SignIntextDiv";
import { navigate } from "../../store/actions";
import Firebase from "../../utils/firebase";
import { Screens } from "../../types/navigation";
import { addObserver, appState, dispatch } from "../../store/index";

const credentials = { email: "", password: "" };

export default class Login extends HTMLElement {

    constructor() {
      super();
      this.attachShadow({ mode: "open" });
      addObserver(this);
      
    }
  
    connectedCallback() {
      this.render();
      console.log('AppState',appState.user);
    }
  
    async handleLoginButton() {
      Firebase.loginUser(credentials);
      console.log(appState.user)
    }
  
    changeWindow(){
      dispatch(navigate(Screens.SIGNUP))
    }
  
    backWindow(){
      dispatch(navigate(Screens.DASHBOARD))
    }
  
    render() {
      
      if (this.shadowRoot) {
          this.shadowRoot.innerHTML = ``;
        
          const css = this.ownerDocument.createElement("style");
          css.innerHTML = LoginStyle;
          this.shadowRoot?.appendChild(css);
  
      }
  
      const container = this.ownerDocument.createElement("section")
      container.className = 'container'
  
      const LoginCard = this.ownerDocument.createElement("section")
      LoginCard.className = 'LoginCard'
  
      const icon = this.ownerDocument.createElement("img")
      icon.src = "/img/arrow_left.png"
      icon.className = "iconArrow"
      icon.addEventListener("click", this.backWindow);
      LoginCard.appendChild(icon)
  
      const loginDiv = this.ownerDocument.createElement("login-div") as LoginDiv;
      LoginCard.appendChild(loginDiv)
      this.shadowRoot?.appendChild(LoginCard);
  
      const InputSection = this.ownerDocument.createElement("section")
      InputSection.className = 'BigInputSection'
      
      const emailText = this.ownerDocument.createElement("h6");
      emailText.textContent = "Email"
      const email = this.ownerDocument.createElement("input");
      email.className = "BigInput"
      email.type = "email";
      email.addEventListener(
        "change",
        (e: any) => (credentials.email = e.target.value)
      );
      InputSection.appendChild(email);
      
      const passwordText = this.ownerDocument.createElement("h6");
      passwordText.textContent = "Password"
      const password = this.ownerDocument.createElement("input");
      password.className = "BigInput"
      password.type = "password";
      password.addEventListener(
        "change",
        (e: any) => (credentials.password = e.target.value)
      );
      InputSection.appendChild(password);
      LoginCard.appendChild(InputSection)
  
      const buttonLog = this.ownerDocument.createElement("button-login-enter") as ButtonLogInEnter;
      buttonLog.addEventListener("click", this.handleLoginButton);
      LoginCard.appendChild(buttonLog)
  
      const DescriptionDiv = this.ownerDocument.createElement("section")
      DescriptionDiv.className = "DescriptionDiv"
  
      const descLogin = this.ownerDocument.createElement("signin-textdiv") as SignIntextDiv;
      DescriptionDiv.appendChild(descLogin)
  
      const buttonSignUp = this.ownerDocument.createElement("button");
      buttonSignUp.innerText = "Register"
      buttonSignUp.className = "LinkSignIn"
      buttonSignUp.addEventListener("click", this.changeWindow);
      DescriptionDiv.appendChild(buttonSignUp)
  
      LoginCard.appendChild(DescriptionDiv)
      this.shadowRoot?.appendChild(LoginCard);
  
  
      container.appendChild(LoginCard);
      this.shadowRoot?.appendChild(container);
  
    }
  }
  
  customElements.define("login-channel", Login);