import HomeStyle from "./HomeStyle.css";

import Categories, { CategoriesAtt } from "../../components/Categories/Categories";
import Tutorials, { TutorialsAtt } from "../../components/Tutorials/Tutorials";
import { getCategories } from "../../store/actions";
import { getTutorials} from "../../store/actions";
import { addObserver, appState, dispatch } from "../../store/index";

class Home extends HTMLElement {
  TutorialsList: Tutorials[] = [];
  CategoriesList: Categories[] = [];
  MyTutorialsList:Tutorials[] = [];

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    addObserver(this);
  }

  async connectedCallback() {
    if (appState.categories.length === 0) {
      const action = await getCategories();
      dispatch(action);
    } if (appState.tutorials.length === 0) {
      const actions = await getTutorials();
      dispatch(actions);
    } else {
      this.render();
    }
  }

  render() {
    if (this.shadowRoot) {
      this.shadowRoot.innerHTML = ``;
    }
    if (this.shadowRoot) {
      this.shadowRoot.innerHTML += `
      <link rel="stylesheet" href="./HomeStyle.css">
      `;
  }
  
  if (this.shadowRoot) {
      this.shadowRoot.innerHTML += `
      <link rel="stylesheet" href="./HomeStyle.css">
      <div class="Menu">
        <h2>Letning</h2>
         <input></input>
        <div class="menutext">
         <a href="">Create a tutorial</a>
         <a href="" class="profilephoto">
         <img src="../../img/gatico.jpg" class="perfil" />
         </a>
         <a>
         <img src="../../img/vector.png" class="message" />
         </a>
        </div>
      </div>
      `;
  }

  if (this.shadowRoot) {
      this.shadowRoot.innerHTML += `
      <link rel="stylesheet" href="./HomeStyle.css">   
    <div class="Banner">
       <img src="/img/Component1.jpg" alt="" class="image1">
       <div class="Bannertext">
        <h1>Letning is a platform of variety tutorials</h1>
        <p>Learn with people of all kinds, and from anywhere.</p>
        <div class="Bannerbuttons">
          <button class="button1">Show your knowledge</button>
       </div>
      </div>
    </div>
      `;
  }

  if (this.shadowRoot) {
      this.shadowRoot.innerHTML += `
      <link rel="stylesheet" href="./HomeStyle.css">
      <div class="Title">
      <h3>Select the Categories</h3>
      </div>
      `;
  }
    const css = this.ownerDocument.createElement("style");
    css.innerHTML = HomeStyle;
    this.shadowRoot?.appendChild(css);

     appState.categories.forEach((data) => {
        const CategoriesCard = this.ownerDocument.createElement("my-categories") as Categories;
        CategoriesCard.setAttribute(CategoriesAtt.image, data.image);
        CategoriesCard.setAttribute(CategoriesAtt.name, data.title);
        this.CategoriesList.push(CategoriesCard);
    });

    const section2 = this.ownerDocument.createElement("section")
    section2.className = 'Section2'
    
    const CategoriesCards = this.ownerDocument.createElement("div")
    CategoriesCards.className = 'CategoriesSection'
    this.CategoriesList.forEach((CategoriesCard) => {
      CategoriesCards.appendChild(CategoriesCard)
    });
    section2.appendChild(CategoriesCards)
    this.shadowRoot?.appendChild(section2);

    if (this.shadowRoot) {
      this.shadowRoot.innerHTML += `
      <link rel="stylesheet" href="./HomeStyle.css">
      <div class="Title">
      <h3>My Tutorials</h3>
      </div>
      `;
     }
    /////my tutorials 
    const MyTutorials = appState.tutorials.filter((user)=>{
      return user.like === true
    })

    MyTutorials.forEach((data)=>{
      const MyTutorialsCard = this.ownerDocument.createElement("my-tutorials") as Tutorials;
      MyTutorialsCard.setAttribute(TutorialsAtt.image, data.image);
      MyTutorialsCard.setAttribute(TutorialsAtt.tittle, data.title);
      MyTutorialsCard.setAttribute(TutorialsAtt.creator, data.creator);
      this.MyTutorialsList.push(MyTutorialsCard);
    })
    
    const section3 = this.ownerDocument.createElement("section")
    section3.className = 'Section3'

    const MyTutorialsCards = this.ownerDocument.createElement("div")
    MyTutorialsCards.className = 'MyTutorialsSection'
    this.MyTutorialsList.forEach((MyTutorialsCard) => {
      MyTutorialsCards.appendChild(MyTutorialsCard)
    });
    section3.appendChild(MyTutorialsCards)
    this.shadowRoot?.appendChild(section3);

    if (this.shadowRoot) {
      this.shadowRoot.innerHTML += `
      <link rel="stylesheet" href="./HomeStyle.css">
      <div class="Title">
      <h3>Tutorials</h3>
      </div>
      `;
  }

    appState.tutorials.forEach((data) => {
      const TutorialsCard = this.ownerDocument.createElement("my-tutorials") as Tutorials;
      TutorialsCard.setAttribute(TutorialsAtt.image, data.image);
      TutorialsCard.setAttribute(TutorialsAtt.tittle, data.title);
      TutorialsCard.setAttribute(TutorialsAtt.creator, data.creator);
      this.TutorialsList.push(TutorialsCard);
  });

  const section1 = this.ownerDocument.createElement("section")
  section1.className = 'Section1'

  const TutorialsCards = this.ownerDocument.createElement("div")
  TutorialsCards.className = 'TutorialsSection'
  this.TutorialsList.forEach((TutorialsCard) => {
      TutorialsCards.appendChild(TutorialsCard)
  });
  section1.appendChild(TutorialsCards)
  this.shadowRoot?.appendChild(section1);

  }
}

customElements.define("my-home", Home);
