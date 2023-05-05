import UsersStyle from "./UsersStyle.css"

export enum UsersAtt {
    "image" = "image",
    "username" = "username"
}

class Users extends HTMLElement {
    image?: string;
    username?: string;

    static get observedAttributes() {
        const attrs: Record<UsersAtt, null> = {
            image: null,
            username: null
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
        propimg: UsersAtt,
        _: any | undefined,
        newValue: any | undefined
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
                <link rel="stylesheet"  href="">
                <div class="ChannelsDiv">
                    <img class="imgT" src="${this.image}">
                    <h6 class="textT">${this.username}</h6>
                </div>
                `;
            }

            const css = this.ownerDocument.createElement("style");
            css.innerHTML = UsersStyle;
            this.shadowRoot?.appendChild(css);
        }
}

customElements.define("my-users",Users);
export default Users;
