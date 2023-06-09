
import MyTutorialsCardStyle from "./TutorialsCard.css"
import { appState, addObserver} from "../../store";
import { dispatch } from "../../store";
import { getPosts } from "../../store/actions";

class MyTutorialsCard extends HTMLElement {
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
            container.className = "PostCards"

            appState.Post.forEach(async (p)=>{
                const postCard = this.ownerDocument.createElement('section');
                postCard.className = "Post"
            
                const Upsection = this.ownerDocument.createElement('section');
                Upsection.className = "Upsection"
                
                const Image = this.ownerDocument.createElement("img")
                Image.className = "img"
                await (Image.src = p.image)

                const iconLike = this.ownerDocument.createElement("img")
                iconLike.className = "Icon"
                iconLike.src= "/img/like.png"
                iconLike.addEventListener("click", () =>{
                    iconLike.style.display = 'flex';
                })
                
                const iconnoLike = this.ownerDocument.createElement("img")
                iconnoLike.className = "Icon"
                iconnoLike.src= "/img/nolike.png"

                const name = this.ownerDocument.createElement("h6")
                name.className = "name"
                name.innerText = p.name
                

                Upsection.appendChild(Image)
                Upsection.appendChild(iconLike)
                Upsection.appendChild(iconnoLike)
                postCard.appendChild(Upsection)
                postCard.appendChild(name)

                container.appendChild(postCard)
            });
        
            this.shadowRoot?.appendChild(container);
    

            const css = this.ownerDocument.createElement("style");
            css.innerHTML = MyTutorialsCardStyle;
            this.shadowRoot?.appendChild(css);

            
        }
}

customElements.define("mytutorials-card", MyTutorialsCard);
export default MyTutorialsCard;