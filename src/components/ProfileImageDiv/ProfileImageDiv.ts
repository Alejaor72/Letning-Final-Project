
import ProfileImageDivStyle from "./ProfileImageDiv.css"

export enum ProfileImageDivAtt {
    "image" = "image",
    "name" = "name"
}

class ProfileImageDiv extends HTMLElement {
    image?: string;
    name?: string;

    static get observedAttributes() {
        const attrs: Record<ProfileImageDivAtt, null> = {
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
        propimg: ProfileImageDivAtt,
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
                <div class="ProfileImageDiv">
                    <img class="ProfileImage" src="${this.image}">
                    <p class="Profilename">${this.name}</p>
                </div>
                `;
            }

            const css = this.ownerDocument.createElement("style");
            css.innerHTML = ProfileImageDivStyle;
            this.shadowRoot?.appendChild(css);

            
        }
}

customElements.define("profile-imagediv", ProfileImageDiv);
export default ProfileImageDiv;