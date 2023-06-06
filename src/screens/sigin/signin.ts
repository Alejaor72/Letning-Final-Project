import SignInStyle from "./SignInStyle.css"
import SigninDiv from "../../components/SigninDiv/SigninDiv";
import CheckBoxSignIn from "../../components/CheckBoxSignIn/CheckBox";
import ButtonSignInEnter from "../../components/ButtonSignInEnter/ButtonSignInEnter";
import LogoDiv from "../../components/LogoDiv/LogoDiv";
import LogIntextDiv from "../../components/LogintextDiv/LogintextDiv";
import { addObserver, appState, dispatch } from "../../store/index";
import { navigate, addUser } from "../../store/actions";
import { Screens } from "../../types/navigation";
import Firebase from "../../utils/firebase";

const credentials = { 
  uid: "",
  username: "",
  email: "",
  password: "",
  image: "",
};

export default class SignUp extends HTMLElement {

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    addObserver(this);
  }

  connectedCallback() {
    this.render();
  }

  async handleSignUpButton() {
    const user = await Firebase.registerUser(credentials);
    dispatch(addUser(credentials))
    console.log(user);
    if(user) {
      dispatch(navigate(Screens.LOGIN)) 
      sessionStorage.clear();
    };
  }

  changeWindow(){
    dispatch(navigate(Screens.LOGIN))
  }

  backWindow(){
    dispatch(navigate(Screens.DASHBOARD))
  }

  render() {
    
    if (this.shadowRoot) {
        this.shadowRoot.innerHTML = ``;
      
        const css = this.ownerDocument.createElement("style");
        css.innerHTML = SignInStyle;
        this.shadowRoot?.appendChild(css);
    }

    const container = this.ownerDocument.createElement("section")
    container.className = 'container'

    const UpPart = this.ownerDocument.createElement("section")
    UpPart.className = 'UpPart'

    const logo = this.ownerDocument.createElement("logo-div") as LogoDiv;
    logo.appendChild(UpPart)
    const account = this.ownerDocument.createElement("login-textdiv") as LogIntextDiv;
    account.appendChild(UpPart)
    this.shadowRoot?.appendChild(UpPart);

    const SignUpCard = this.ownerDocument.createElement("section")
    SignUpCard.className = 'SignInCard'

    const icon = this.ownerDocument.createElement("img")
    icon.src = "/img/arrow_left.png"
    icon.className = "iconArrow"
    icon.addEventListener("click", this.backWindow);
    SignUpCard.appendChild(icon)

    const SignInDiv = this.ownerDocument.createElement("signin-div") as SigninDiv;
    SignUpCard.appendChild(SignInDiv)
    this.shadowRoot?.appendChild(SignUpCard);

    const InputSection = this.ownerDocument.createElement("section")
    InputSection.className = 'BigInputSection'
    
    const usernameText = this.ownerDocument.createElement("h6");
    usernameText.textContent = "username"
    const userName = this.ownerDocument.createElement("input");
    userName.className = "BigInput"
    userName.type = "text";
    userName.addEventListener(
      "change",
      (e: any) => (credentials.username = e.target.value)
    );
    InputSection.appendChild(usernameText);
    InputSection.appendChild(userName);
    
    const emailText = this.ownerDocument.createElement("h6");
    emailText.textContent = "Email"
    const email = this.ownerDocument.createElement("input");
    email.className = "BigInput"
    email.type = "email";
    email.addEventListener(
      "change",
      (e: any) => (credentials.email = e.target.value)
    );
    InputSection.appendChild(emailText);
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
    InputSection.appendChild(passwordText);
    InputSection.appendChild(password);

    SignUpCard.appendChild(InputSection)

    const checkBoxSignIn = this.ownerDocument.createElement("checkbox-signin") as CheckBoxSignIn;

    SignUpCard.appendChild( checkBoxSignIn)
    this.shadowRoot?.appendChild(SignUpCard);

    const buttonSign = this.ownerDocument.createElement("button-signin-enter") as ButtonSignInEnter;
    buttonSign.addEventListener("click", this.handleSignUpButton);
    SignUpCard.appendChild(buttonSign)
    this.shadowRoot?.appendChild(SignUpCard);

    //const DescriptionDiv = this.ownerDocument.createElement("section")
    //escriptionDiv.className = "DescriptionDiv"

    //const descLogin = this.ownerDocument.createElement("description-login") as DescriptionCardLogin;
    //DescriptionDiv.appendChild(descLogin)

    //const buttonLog = this.ownerDocument.createElement("button");
    //buttonLog.innerText = "Login"
    //buttonLog.className = "Link"
    //buttonLog.addEventListener("click", this.changeWindow);
    //DescriptionDiv.appendChild(buttonLog)

    //SignUpCard.appendChild(DescriptionDiv)
    this.shadowRoot?.appendChild(SignUpCard);

    container.appendChild(SignUpCard);
    this.shadowRoot?.appendChild(container);

    
  
  }
}

customElements.define("signup-channel", SignUp);