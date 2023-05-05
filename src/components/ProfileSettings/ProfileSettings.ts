import PsettingsStyle from "./Psettingsstyle.css"

export enum PSettingsAtt {
    "image" = "image",
    "name" = "name"
}

class Psettings extends HTMLElement {
    image?: string;
    name?: string;

    static get observedAttributes() {
        const attrs: Record<PSettingsAtt, null> = {
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
        propimg: PSettingsAtt,
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
                <link rel="stylesheet" href="">
                <div class="PsettingsDiv">
                    <img class="imgC" src="${this.image}">
                    <h3 class="textC">${this.name}</h3>
                </div>
                `;
            }

            const css = this.ownerDocument.createElement("style");
            css.innerHTML = PsettingsStyle;
            this.shadowRoot?.appendChild(css);
        }
}

customElements.define("my-profile-settings",Psettings);
export default Psettings;
