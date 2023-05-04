import TutorialsStyle from "./Tutorialstyle.css"

export enum TutorialsAtt {
    "image" = "image",
    "tittle" = "tittle",
    "creator"= "creator",
    "like"= "like"
}

class Tutorials extends HTMLElement {
    image?: string;
    tittle?: string;
    creator?: string;
    like?: boolean;

    static get observedAttributes() {
        const attrs: Record<TutorialsAtt, null> = {
            image: null,
            tittle: null,
            creator: null,
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
        propimg: TutorialsAtt,
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
                <link rel="stylesheet"  href="./app/components/Tutorials/Tutorials.css">
                <div class="TutorialsDiv">
                    <img class="imgT" src="${this.image}">
                    <h6 class="textT">${this.tittle}</h6>
                    <p>${this.creator}</p>
                </div>
                `;
            }

            const css = this.ownerDocument.createElement("style");
            css.innerHTML = TutorialsStyle;
            this.shadowRoot?.appendChild(css);
        }
}

customElements.define("my-tutorials",Tutorials);
export default Tutorials;
