
import SigninDivStyle from "./SigninDiv.css"

class SigninDiv extends HTMLElement {

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
                <div class="SigninDiv">
                    <img src="/img/Group 14.png" alt="" class="image1">
                    <p class="text">Sign In to begin</p>
                </div>
                `;
            }

            const css = this.ownerDocument.createElement("style");
            css.innerHTML = SigninDivStyle;
            this.shadowRoot?.appendChild(css);

            
        }
}

customElements.define("signin-div", SigninDiv);
export default SigninDiv;