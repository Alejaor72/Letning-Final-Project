import { appState } from "../../store";
import UserStyle from "./user.css"

class User extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        this.render();
    }

    render() {
            const css = this.ownerDocument.createElement("style");
            css.innerHTML = UserStyle;
            this.shadowRoot?.appendChild(css);

            const sectionUser = this.ownerDocument.createElement("section");
            sectionUser.className = "sectionUser"

            const userImg =  this.ownerDocument.createElement("img");
            userImg.className = "userImg"
            userImg.src = appState.userInfo.image
            sectionUser.appendChild(userImg)

            const sectionUserData = this.ownerDocument.createElement("section");
            sectionUserData.className = "sectionUserData"

            const UserName = this.ownerDocument.createElement("p");
            UserName.textContent = appState.userInfo.username
            UserName.className = "userText"
            sectionUserData.appendChild(UserName)
            sectionUser.appendChild(sectionUserData)

            const uid = String(appState.userInfo.uid).slice(0, -23)

            const UserId = this.ownerDocument.createElement("p");
            UserId.textContent = "#"+ uid
            UserId.className = "userText"
            sectionUserData.appendChild(UserId)

            const iconConfig =  this.ownerDocument.createElement("img");
            iconConfig.className = "configImg"
            iconConfig.src= "/img/config.png"
            sectionUser.appendChild(iconConfig)

            this.shadowRoot?.appendChild(sectionUser);
        }
}

customElements.define("my-user", User);
export default User;