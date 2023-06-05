
import ConfigProfileDivStyle from "./ConfigProfileDiv.css"

export enum ConfigProfileDivAtt {
    "image" = "image",
    "name" = "name"
}

class ConfigProfileDiv extends HTMLElement {
    image?: string;
    name?: string;

    static get observedAttributes() {
        const attrs: Record<ConfigProfileDivAtt, null> = {
            image: null,
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
        propimg: ConfigProfileDivAtt,
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
                <div class="ConfigProfileDiv">
                    <div class="imagecontainer">
                    <img class="ProfileImage" src="${this.image}">
                    <img class="EditImage" src="/img/edit.png">
                    </div>
                    <p class="Profilename">${this.name}</p>
                </div>
                `;
            }

            const css = this.ownerDocument.createElement("style");
            css.innerHTML = ConfigProfileDivStyle;
            this.shadowRoot?.appendChild(css);

            
        }
}

customElements.define("config-profilediv", ConfigProfileDiv);
export default ConfigProfileDiv;