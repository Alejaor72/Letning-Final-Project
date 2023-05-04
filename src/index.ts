import "./screens/homevisitors/homevisitors"
import "./components/export"

class AppContainer extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    connectedCallback() {
        this.render()
    }

    render() {
        const dashboard = this.ownerDocument.createElement('my-home-visitors');
        this.shadowRoot?.appendChild(dashboard);
    }
}

customElements.define('app-container', AppContainer)
