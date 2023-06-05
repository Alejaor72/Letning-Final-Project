import { navigate } from "../../store/actions";
import { addObserver, appState, dispatch } from "../../store/index";
import { Screens } from "../../types/navigation";

import SignIntextDivStyle from "./SignIntextDiv.css"
class SignIntextDiv extends HTMLElement {
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
        container.className = "SignIntextDiv"

        const text = this.ownerDocument.createElement("h4")
        text.className = "text"
        text.textContent = '¿First time in Letning?';

        //const button = this.ownerDocument.createElement('button');
        //button.className = "SignIntextDiv"
        //button.textContent = 'Register';
        //button.addEventListener("click", () => {
            //dispatch(navigate(Screens.SIGNUP));
          //});
        
       container.appendChild(text)
       //container.appendChild(button)
       

       this.shadowRoot?.appendChild(container);

       
        const css = this.ownerDocument.createElement("style");
        css.innerHTML = SignIntextDivStyle;
        this.shadowRoot?.appendChild(css);
        
    }
}

customElements.define("signin-textdiv", SignIntextDiv);
export default SignIntextDiv;