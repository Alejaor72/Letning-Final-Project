import "./screens/homevisitors/homevisitors"
import "./screens/home/home"
import "./screens/tutorials/tutorials"
import "./screens/channels/channel"
import "./screens/configuration/configuration"
import "./screens/login/login"
import "./screens/sigin/signin"
import "./screens/video/video"
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
        const dashboard = this.ownerDocument.createElement('my-video');
        this.shadowRoot?.appendChild(dashboard);
    }
}

customElements.define('app-container', AppContainer)
