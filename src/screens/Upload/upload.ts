import UploadChannelStyle from "./upload.css";
import User from "../../components/User/User";
import TutorialsCard from "../../components/Tutorials/Tutorials";
import { addObserver, appState, dispatch } from "../../store/index";
import { CreatePostBarClick } from "../../components/export";
import { UploadVideoButton } from "../../components/export";



export default class UploadChannel extends HTMLElement {

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    addObserver(this);
  }

  connectedCallback() {
    this.render();
  }

  render() {
    
    if (this.shadowRoot) {
        this.shadowRoot.innerHTML = ``;
      
        const css = this.ownerDocument.createElement("style");
        css.innerHTML = UploadChannelStyle;
        this.shadowRoot?.appendChild(css);

    }

    const section3 = this.ownerDocument.createElement("section")
    section3.className = 'PostSection'

    const createPostBar = this.ownerDocument.createElement("create-postclick") as CreatePostBarClick;
    section3.appendChild(createPostBar)

    const button = this.ownerDocument.createElement("upload-video-button") as  UploadVideoButton;
    section3.appendChild(button)
    
    const PostCards = this.ownerDocument.createElement("tutorials-card") as TutorialsCard;
    section3.appendChild(PostCards)

    this.shadowRoot?.appendChild(section3);

    const section4 = this.ownerDocument.createElement("section")
    section4.className = 'Section4'
    const user = this.ownerDocument.createElement("my-user") as User;
    section4.appendChild(user)
    this.shadowRoot?.appendChild(section4);
  
  }
}

customElements.define("upload-channel", UploadChannel);