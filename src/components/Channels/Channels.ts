import Channelstyle from "./Channelstyle.css"

export enum ChannelsAtt {
    "image" = "image",
    "tittle" = "tittle",
    "like"= "like"
}

class Channels extends HTMLElement {
    image?: string;
    tittle?: string;
    creator?: string;
    like?: boolean;

    static get observedAttributes() {
        const attrs: Record<ChannelsAtt, null> = {
            image: null,
            tittle: null,
            like: null
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
        propimg: ChannelsAtt,
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
                    <h6 class="textT">${this.tittle}</h6>
                </div>
                `;
            }

            const css = this.ownerDocument.createElement("style");
            css.innerHTML = Channelstyle;
            this.shadowRoot?.appendChild(css);
        }
}

customElements.define("my-channels",Channels);
export default Channels;
