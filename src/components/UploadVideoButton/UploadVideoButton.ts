
import UploadVideoButtonStyle from "./UploadVideoButton.css"
import { Screens } from "../../types/navigation";
import { Post } from "../../types/post";
import { appState, dispatch } from "../../store";
import { SavePost, navigate } from "../../store/actions";
import firebase from "../../utils/firebase";

const postForm: Post = {
    id: "",
    image: "",
    name: "",
    description: ""
}

class UploadVideoButton extends HTMLElement {
    button?: HTMLElement;


    connectedCallback(){
        this.render();
    }

    constructor() {
        super();
        this.attachShadow({ mode: "open" });

        this.button = this.ownerDocument.createElement('button');
        this.button.className = "UploadVideoButton"
        this.button.textContent = 'Upload';
        this.button.addEventListener("click", async ()=>{
            console.log(postForm)
            dispatch(await SavePost(postForm))
        })
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