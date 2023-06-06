
import "./screens/export"
import "./components/export"
import { addObserver, appState} from "./store/index";
import { Screens } from "./types/navigation";

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
        if (this.shadowRoot) this.shadowRoot.innerHTML = "";
    
        switch (appState.screens) {
          case Screens.LOGIN:
            const login = this.ownerDocument.createElement("login-channel");
            this.shadowRoot?.appendChild(login);
            break;
    
          case Screens.SIGNUP:
            const signup = this.ownerDocument.createElement("signup-channel");
            this.shadowRoot?.appendChild(signup);
            break;
    
          case Screens.DASHBOARD:
            const dashboard = this.ownerDocument.createElement("my-home-visitors");
            this.shadowRoot?.appendChild(dashboard);
            break;

        case Screens.HOME:
            const home = this.ownerDocument.createElement("my-home");
            this.shadowRoot?.appendChild(home);
            break;

      
          default:
            break;
        }
      }
}

customElements.define('app-container', AppContainer)