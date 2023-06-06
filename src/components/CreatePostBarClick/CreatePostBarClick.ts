
import CreatePostBarClickStyle from "./CreatePostBarClick.css"
import { Post } from "../../types/post";
import { dispatch } from "../../store";
import { SavePost, navigate } from "../../store/actions";
import { Screens } from "../../types/navigation";
import firebase from "../../utils/firebase";


const postForm: Post = {
    id: "",
    image: "",
    name: "",
    description: ""
}
class CreatePostBarClick extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        this.render();
    }
    
    render() {

            if (this.shadowRoot) {
                this.shadowRoot.innerHTML = ``;

                const css = this.ownerDocument.createElement("style");
                css.innerHTML = CreatePostBarClickStyle;
                this.shadowRoot?.appendChild(css);
            }

        const formSection = this.ownerDocument.createElement("section")
        formSection.className = "FormSection"
        
        const leftformSection = this.ownerDocument.createElement("section")
        leftformSection.className = "leftformSection"
        
        const Image = this.ownerDocument.createElement("input")
        Image.src = "/img/input_file.png"
        Image.placeholder = "Choose File"
        Image.className = "InputPost"
        Image.type = "file"
        Image.addEventListener("change", async () =>{
            const file = Image.files?.[0];
            if (file) await firebase.uploadFile(file);
            console.log(file?.name);
            if (file) {
              const img = await firebase.getFile(file.name);
              console.log("img", img);
              const src = String(img)
              postForm.image = src
          }
          });
        

        const sectionInputs = this.ownerDocument.createElement("section")
        sectionInputs.className = "sectionInputs"
        
        const tittle = this.ownerDocument.createElement("input")
        tittle.placeholder = "Title"
        tittle.className = "InputPost"
        tittle.type = "text"
        tittle.addEventListener("change", (e:any)=>{
            postForm.name = e.target.value
        })

        const Message = this.ownerDocument.createElement("input")
        Message.placeholder = "Descripcion"
        Message.className = "InputPost"
        Message.type = "text"
        Message.addEventListener("change", (e:any)=>{
            postForm.description = e.target.value
        })

  

        const Postbtn = this.ownerDocument.createElement("button")
        Postbtn.innerText = "Upload"
        Postbtn.className = "ButtonPost"
        Postbtn.addEventListener("click", async ()=>{
            console.log(postForm)
            dispatch(await SavePost(postForm))
        })

        sectionInputs.appendChild(tittle)
        sectionInputs.appendChild(Message)
        formSection.appendChild(sectionInputs)
        formSection.appendChild(Image)
        formSection.appendChild(Postbtn)
        

        this.shadowRoot?.appendChild(formSection)
        }
}

customElements.define("create-postclick", CreatePostBarClick);
export default CreatePostBarClick;