
import LoginDivStyle from "./LoginDiv.css"

class LoginDiv extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        this.render();
    }
    
    render() {

            if (this.shadowRoot) {
                this.shadowRoot.innerHTML = `
                <div class="LoginDiv">
                    <h2 class="title">Welcome back!</h2>
                    <p class="text">Good to see you again</p>
                </div>
                `;
            }

            const css = this.ownerDocument.createElement("style");
            css.innerHTML = LoginDivStyle;
            this.shadowRoot?.appendChild(css);

            
        }
}

customElements.define("login-div", LoginDiv);
export default LoginDiv;