import { navigate } from "../../store/actions";
import { addObserver, appState, dispatch } from "../../store/index";
import { Screens } from "../../types/navigation";

import ButtonSignInEnterStyle from "./ButtonSignInEnter.css"
class ButtonSignInEnter extends HTMLElement {
    button?: HTMLElement;

    onButtonClicked() {
        this.render();
    }

    connectedCallback(){
        this.render();
    }

    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        addObserver(this);


        this.button = this.ownerDocument.createElement('button');
        this.button.className = "ButtonSignUp"
        this.button.textContent = 'Continue';
        this.button.addEventListener("click", () => {
            dispatch(navigate(Screens.LOGIN));
          });
    }

    render() {
        
        this.shadowRoot?.appendChild(this.button!);

        const css = this.ownerDocument.createElement("style");
        css.innerHTML = ButtonSignInEnterStyle;
        this.shadowRoot?.appendChild(css);
        
    }
}

customElements.define("button-signin-enter", ButtonSignInEnter);
export default ButtonSignInEnter;