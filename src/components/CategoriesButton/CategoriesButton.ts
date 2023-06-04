import CategoriesStyle from "./categoriestyle.css"

export enum CategoriesAtt {
    "image" = "image",
    "name" = "name"
}

class CategoriesButton extends HTMLElement {
    image?: string;
    name?: string;

    static get observedAttributes() {
        const attrs: Record<CategoriesAtt, null> = {
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
        propimg: CategoriesAtt,
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
                <div class="CategoriesDiv">
                    <img class="imgC" src="${this.image}">
                    <h3 class="textC">${this.name}</h3>
                </div>
                `;
            }

            const css = this.ownerDocument.createElement("style");
            css.innerHTML = CategoriesStyle;
            this.shadowRoot?.appendChild(css);
        }
}

customElements.define("my-categories-button",CategoriesButton);
export default CategoriesButton;
