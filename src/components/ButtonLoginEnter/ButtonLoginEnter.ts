
import { navigate } from "../../store/actions";
import { addObserver, appState, dispatch } from "../../store/index";
import { Screens } from "../../types/navigation";

import ButtonLogInEnterStyle from "./ButtonLogInEnter.css"
class ButtonLogInEnter extends HTMLElement {
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

        this.button = this.ownerDocument.createElement('button');
        this.button.className = "buttonLogin"
        this.button.textContent = 'Login';
        this.button.addEventListener("click", () => {
            dispatch(navigate(Screens.HOME));
        });
    }

    render() {
        
        this.shadowRoot?.appendChild(this.button!);

        const css = this.ownerDocument.createElement("style");
        css.innerHTML = ButtonLogInEnterStyle;
        this.shadowRoot?.appendChild(css);
        
    }
}

customElements.define("button-login-enter", ButtonLogInEnter);
export default ButtonLogInEnter;