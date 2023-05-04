import CategoriesStyle from "./categoriestyle.css"

export enum CategoriesAtt {
    "image" = "image",
    "name" = "name"
}

class Categories extends HTMLElement {
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
                <link rel="stylesheet" href="./App/index.css">
                <div class="CategoriesDiv">
                    <img class="CategoriesImg" src="${this.image}">
                    <p class="CategoriesName">${this.name}</p>
                </div>
                `;
            }

            const css = this.ownerDocument.createElement("style");
            css.innerHTML = CategoriesStyle;
            this.shadowRoot?.appendChild(css);
        }
}

customElements.define("my-categories",Categories);
export default Categories;
