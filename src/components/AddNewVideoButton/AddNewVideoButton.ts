
import AddNewVideoButtonStyle from "./AddNewVideoButton.css"
import { appState, addObserver} from "../../store";
import { dispatch } from "../../store";
import { getPosts } from "../../store/actions";
import { Screens } from "../../types/navigation";
import { navigate } from "../../store/actions";


class AddNewVideoButton extends HTMLElement {
    button?: HTMLElement;
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        addObserver(this)
    }

    async connectedCallback() {
        if (appState.Post === null){
            appState.Post = [];
            console.log("Entrando a traer datos")
            dispatch( await getPosts())
            this.render();
        } else{
            this.render();
        }  
    }

    render() {
        
            const container = this.ownerDocument.createElement('section');
            container.className = "AddNewVideo"

            appState.Post.forEach(async (p)=>{

                const iconNew = this.ownerDocument.createElement("img")
                iconNew.className = "Image"
                iconNew.src= "/img/newvideo.jpg"
                iconNew.addEventListener("click", () =>{
                    dispatch(navigate(Screens.POSTCREATE));
                })
                
                iconNew.appendChild(iconNew)

                container.appendChild(iconNew)
            });
        
            this.shadowRoot?.appendChild(container);
    

            const css = this.ownerDocument.createElement("style");
            css.innerHTML = AddNewVideoButtonStyle;
            this.shadowRoot?.appendChild(css);

            
        }
}

customElements.define("addnew-video-button", AddNewVideoButton);
export default AddNewVideoButton;