import HomeVisitorsStyle from "./HomeVisitorsStyle.css";

import Categories, { CategoriesAtt } from "../../components/Categories/Categories";
import Tutorials, { TutorialsAtt } from "../../components/Tutorials/Tutorials";
import { getCategories } from "../../store/actions";
import { getTutorials} from "../../store/actions";
import { addObserver, appState, dispatch } from "../../store/index";

class HomeVisitors extends HTMLElement {
  TutorialsList: Tutorials[] = [];
  CategoriesList: Categories[] = [];

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    addObserver(this);
  }

  async connectedCallback() {
    if (appState.friends.length === 0) {
      const action = await getCategories();
      dispatch(action);
    } if (appState.servers.length === 0) {
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

    const css = this.ownerDocument.createElement("style");
    css.innerHTML = HomeVisitorsStyle;
    this.shadowRoot?.appendChild(css);

    appState.servers.forEach((data) => {
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

    appState.friends.forEach((data) => {
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

  }
}

customElements.define("my-home-visitors", HomeVisitors);
