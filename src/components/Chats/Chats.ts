import ChatsStyle from "./ChatsStyle.css"

export enum ChatsAtt {
    "image" = "image",
    "chat" = "chat"
}

class Chats extends HTMLElement {
    image?: string;
    chat?: string;

    static get observedAttributes() {
        const attrs: Record<ChatsAtt, null> = {
            image: null,
            chat: null
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
        propimg: ChatsAtt,
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
                    <h6 class="textT">${this.chat}</h6>
                </div>
                `;
            }

            const css = this.ownerDocument.createElement("style");
            css.innerHTML = ChatsStyle;
            this.shadowRoot?.appendChild(css);
        }
}

customElements.define("my-chats",Chats);
export default Chats;
