import CheckBoxSignInStyle from "./CheckBox.css"

class CheckBoxSignIn extends HTMLElement {

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
                <div class="CheckBoxSignIn">
                    <input type="checkbox">
                    <p class="text">I agree to receive emails with Discord updates, tips and special offers. You can revoke consent at any time</p>
                </div>
                `;
            }

            const css = this.ownerDocument.createElement("style");
            css.innerHTML = CheckBoxSignInStyle;
            this.shadowRoot?.appendChild(css);

            
        }
}

customElements.define("checkbox-signin", CheckBoxSignIn);
export default CheckBoxSignIn;