import { navigate } from "../../store/actions";
import { addObserver, appState, dispatch } from "../../store/index";
import { Screens } from "../../types/navigation";

import LogIntextDivStyle from "./LogIntextDiv.css"
class LogIntextDiv extends HTMLElement {
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

    }

    render() {
        
        const container = this.ownerDocument.createElement('section');
        container.className = "LogIntextDiv"

        const text = this.ownerDocument.createElement("h4")
        text.className = "text"
        text.textContent = 'I already have an account';

        const button = this.ownerDocument.createElement('button');
        button.className = "LogIntextDiv"
        button.textContent = 'Log In';
        button.addEventListener("click", () => {
            dispatch(navigate(Screens.LOGIN));
          });
        
       container.appendChild(text)
       container.appendChild(button)
       

       this.shadowRoot?.appendChild(container);

       
        const css = this.ownerDocument.createElement("style");
        css.innerHTML = LogIntextDivStyle;
        this.shadowRoot?.appendChild(css);
        
    }
}

customElements.define("login-textdiv", LogIntextDiv);
export default LogIntextDiv;