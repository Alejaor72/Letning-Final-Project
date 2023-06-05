
import UploadVideoButtonStyle from "./UploadVideoButton.css"
import { dispatch } from "../../store";
import { navigate } from "../../store/actions";
import { Screens } from "../../types/navigation";

class UploadVideoButton extends HTMLElement {
    button?: HTMLElement;

    onButtonClicked() {
        
    }

    connectedCallback(){
        this.render();
    }

    constructor() {
        super();
        this.attachShadow({ mode: "open" });

        this.button = this.ownerDocument.createElement('button');
        this.button.className = "UploadVideoButton"
        this.button.textContent = 'Upload';
        this.button.addEventListener("click",this.onButtonClicked);
    }

    render() {
        
        this.shadowRoot?.appendChild(this.button!);

        const css = this.ownerDocument.createElement("style");
        css.innerHTML = UploadVideoButtonStyle;
        this.shadowRoot?.appendChild(css);
        
    }
}

customElements.define("upload-video-button", UploadVideoButton);
export default UploadVideoButton;