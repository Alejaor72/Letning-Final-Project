import { navigate } from "../../store/actions";
import { addObserver, appState, dispatch } from "../../store/index";
import { Screens } from "../../types/navigation";

import LogOutTextStyle from "./LogOutText.css"
class LogOutText extends HTMLElement {
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
        container.className = "LogOutText"

        const text = this.ownerDocument.createElement("h3")
        text.className = "text"
        text.textContent = 'Log Out';
        text.addEventListener("click", () => {
            dispatch(navigate(Screens.DASHBOARD));
          });
        
       container.appendChild(text)
       

       this.shadowRoot?.appendChild(container);

       
        const css = this.ownerDocument.createElement("style");
        css.innerHTML = LogOutTextStyle;
        this.shadowRoot?.appendChild(css);
        
    }
}

customElements.define("logout-text", LogOutText);
export default LogOutText;