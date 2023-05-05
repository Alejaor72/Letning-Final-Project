import MessagesStyle from "./MessagesStyle.css";

import Chats, { ChatsAtt } from "../../components/Chats/Chats";
import Users, { UsersAtt } from "../../components/Users/Users";
import { getChats } from "../../store/actions";
import { getUsers} from "../../store/actions";
import { addObserver, appState, dispatch } from "../../store/index";

class Messages extends HTMLElement {
    UsersList: Users[] = [];
    ChatsList: Chats[] = [];

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    addObserver(this);
  }

  async connectedCallback() {
    if (appState.chats.length === 0) {
      const action = await getChats();
      dispatch(action);
    } if (appState.users.length === 0) {
      const actions = await getUsers();
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
      <link rel="stylesheet" href="./MessagesStyle.css">
      `;
  }
  
  if (this.shadowRoot) {
      this.shadowRoot.innerHTML += `
      <link rel="stylesheet" href="./MessagesStyle.css">
      <div class="userzone">
              <h2>Letning</h2>
              <div class="oneUser">

              </div> 
              <div class="conversationSearch">
                <h3>Conversations</h3>
                <input type="text">
              </div>
            
              <div class="allUsers">
               
              </div>
            </div>
      `;
  }

    const css = this.ownerDocument.createElement("style");
    css.innerHTML = MessagesStyle;
    this.shadowRoot?.appendChild(css);

     appState.users.forEach((data) => {
        const UsersCard = this.ownerDocument.createElement("my-users") as Users;
        UsersCard.setAttribute(UsersAtt.image, data.image);
        UsersCard.setAttribute(UsersAtt.username, data.username);
        this.UsersList.push(UsersCard);
    });

    const section2 = this.ownerDocument.createElement("section")
    section2.className = 'Section2'
    
    const UsersCards = this.ownerDocument.createElement("div")
    UsersCards.className = 'UsersSection'
    this.UsersList.forEach((UsersCard) => {
        UsersCards.appendChild(UsersCard)
    });
    section2.appendChild(UsersCards)
    this.shadowRoot?.appendChild(section2);

    if (this.shadowRoot) {
      this.shadowRoot.innerHTML += `
      <link rel="stylesheet" href="./MessagesStyle.css">
      <div class="chatzone">
             
          </div>
          <div class="chatsinput">
          <input type="text">
          <button class="sendButton">Send</button></div>
      `;
     }
     
     appState.chats.forEach((data) => {
        const ChatsCard = this.ownerDocument.createElement("my-chats") as Chats;
        ChatsCard.setAttribute(ChatsAtt.image, data.image);
        ChatsCard.setAttribute(ChatsAtt.chat, data.chat);
        this.ChatsList.push(ChatsCard);
    });
    
    const section3 = this.ownerDocument.createElement("section")
    section3.className = 'Section3'

    const ChatsCards = this.ownerDocument.createElement("div")
    ChatsCards.className = 'ChatsSection'
    this.ChatsList.forEach((ChatsCard) => {
        ChatsCards.appendChild(ChatsCard)
    });
    section3.appendChild(ChatsCards)
    this.shadowRoot?.appendChild(section3);
  }
}

customElements.define("my-messages", Messages);