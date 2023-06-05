
import ButtonInputStyle from "./ButtonInput.css"

export enum ButtonInputAtt {
    "name" = "name",
}

class ButtonInput extends HTMLElement {
    name?: string;

    static get observedAttributes() {
        const attrs: Record<ButtonInputAtt, null> = {
            name: null
        };
        return Object.keys(attrs);
    }

    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        this.render();
    }

    attributeChangedCallback(
        propimg: ButtonInputAtt,
        _: string | undefined,
        newValue: string | undefined
        ) {
            switch (propimg) {
                default:
                this[propimg] = newValue;
                break;
            }

            this.render();
        }

        render() {
 
            if (this.shadowRoot) {
                this.shadowRoot.innerHTML = `
                <input class="ButtonInput" type="text">
                `;
            }

            const css = this.ownerDocument.createElement("style");
            css.innerHTML = ButtonInputStyle;
            this.shadowRoot?.appendChild(css);

            
        }
}

customElements.define("button-input", ButtonInput);
export default ButtonInput;