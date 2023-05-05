import VideoInStyle from "./VideoStyle.css"
import { addObserver, appState, dispatch } from "../../store/index";

class Video extends HTMLElement {
  
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
      addObserver(this);
    }

    connectedCallback() {
        if (this.shadowRoot) {
            this.render()
        }
    } 

    render() {
       this.shadowRoot!.innerHTML = ``

        const css = this.ownerDocument.createElement("style");
        css.innerHTML = VideoInStyle;
        this.shadowRoot?.appendChild(css);

        this.shadowRoot!.innerHTML += `
        <div class="header">
            <h1>Letning</h1>
            <input class="searchbar" type="text"></input>
            <button class="createtutorial">Create a tutorial</button>
            <img url="https://i.pinimg.com/originals/64/00/17/64001798df0233f43a9885424bd33ae5.png" class="profileIcon">
            <img src="/img/Vector.png" class="sendIcon">
        </div>
        
        <div class="VideoSection">

            <div class="parteizquierda">
                <img src="/img/Musica.jpg">
                <div class="videoInfo">
                    <img url="https://i.pinimg.com/originals/64/00/17/64001798df0233f43a9885424bd33ae5.png" class="creatorIcon">
                    <h2>Lorem ipsum dolor sit amet</h2>
                    <h3>By: Lorem ipsum</h3>
                    <p class="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                    <img src="/img/Vector.png" class="sendIcon">
                </div>
            </div>
            
            <div class="partederecha">

                <div class="userinfo">
                    <img url="https://i.pinimg.com/originals/64/00/17/64001798df0233f43a9885424bd33ae5.png" class="userinfoIcon">
                    <h3>Lorem Ipsum</h3>
                </div>

                <div class="commentSection">
                    <h2>Comments Section</h2>
                    <div class="comment">
                        <h3>Cool!!! :)))</h3>
                        <img url="https://i.pinimg.com/564x/0b/d9/ee/0bd9ee34eb24311e6cf5cae41e06fe10.jpg" class="usercomment">
                    </div>
                    <div class="sendSection">
                        <input class="commentbar" type="text"></input>
                        <button class="sendbtn">Send</button>
                    </div>
                    
                </div>
            </div>
        </div>
        `
    }
}
customElements.define('my-video', Video)
export default Video