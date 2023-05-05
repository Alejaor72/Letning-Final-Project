import "./screens/homevisitors/homevisitors"
import "./screens/home/home"
import "./screens/tutorials/tutorials"
import "./screens/channels/channel"
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
        const dashboard = this.ownerDocument.createElement('my-channel-profile');
        this.shadowRoot?.appendChild(dashboard);
    }
}

customElements.define('app-container', AppContainer)
