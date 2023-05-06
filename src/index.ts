import "./screens/homevisitors/homevisitors"
import "./screens/home/home"
import "./screens/tutorials/tutorials"
import "./screens/channels/channel"
import "./screens/configuration/configuration"
import "./screens/login/login"
import "./screens/sigin/signin"
import "./screens/video/video"
import "./screens/messages/messages"
import { navigate } from "./store/actions";
import { addObserver, appState, dispatch } from "./store/index";
import { Screens } from "./types/store";
import "./components/export"

class AppContainer extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
        addObserver(this);
    }

    connectedCallback() {
        this.render()
    }

    render() {
        const dashboard = this.ownerDocument.createElement('my-channels');
        this.shadowRoot?.appendChild(dashboard);
        ////if (this.shadowRoot) this.shadowRoot.innerHTML = "";

    ////switch (appState.screen) {
      ////case Screens.LOGIN:
        ////const login = this.ownerDocument.createElement("my-login");
        ////login.innerText = "esta es la pantalla de login";
        ////const btn = this.ownerDocument.createElement("button");
        ////btn.innerText = "¡No tienes cuenta? Registrate";
        ////btn.addEventListener("click", () => {
          ////dispatch(navigate(Screens.DASHBOARD));
        ////});
        ////this.shadowRoot?.appendChild(login);
        ////this.shadowRoot?.appendChild(btn);
        ////break;
      ////case Screens.HOME:
            ////const home = this.ownerDocument.createElement("my-home");
            ////home.innerText = "esta es la pantalla de home";
            ////this.shadowRoot?.appendChild(home);
            ////break;
      ////case Screens.SIGNUP:
        ////const signup = this.ownerDocument.createElement("my-sigin");
        ////signup.innerText = "esta es la pantalla de signup";
        ////this.shadowRoot?.appendChild(signup);
        ////break;

      ////case Screens.DASHBOARD:
        ////const dashboard = this.ownerDocument.createElement("my-home-visitors");
        ////dashboard.innerText = "este es la pantalla de dashboard";
        ////this.shadowRoot?.appendChild(dashboard);
        ////break;

      ////default:
        ////break;
    ////}
}
}

customElements.define('app-container', AppContainer)
