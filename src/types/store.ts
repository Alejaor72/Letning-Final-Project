export type Observer = { render: () => void } & HTMLElement;
import { Screens } from "./navigation";
import { Post } from "./post";
import { InterCategories} from "./Categories"
import { InterTutorials} from "./Tutorials"
import { InterPSettings } from "./ProfileSettings";
import { InterChannels } from "./Channels";
import { InterChats } from "./Chats";


export type AppState = {
    categories: InterCategories[]
    tutorials: InterTutorials[]
    profileSettings: InterPSettings[]
    channels: InterChannels[]
    chats: InterChats[]
    Post: Post[];
    screens: Screens;
    user: string;
}

export enum UserActions {
    "SET_USER" = "SET_USER",
  }
    
  export enum PostActions {
    "SAVE_POST" = "SAVE_POST",
    "GET_POST" = "GET_POST",
  }
  
  export enum NavigateActions {
    "NAVIGATE" = "NAVIGATE",
  }
  
  export interface Navigate {
    action: NavigateActions.NAVIGATE;
    payload: Screens
  }
  

  export interface SavePost {
    action: PostActions.SAVE_POST;
    payload: Post
  }
  
  export interface GetPost {
    action: PostActions.GET_POST;
    payload: Post[]
  }
  
  export interface SetUser{
      action: UserActions.SET_USER;
      payload: string
  }

export enum CategoriesActions {
    "ADD" = "ADD",
    "GET" = "GET",
}

export enum TutorialsActions {
    "ADD2" = "ADD2",
    "GET2" = "GET2",
}

export enum PsettingsActions {
    "ADD3" = "ADD3",
    "GET3" = "GET3",
}

export enum ChannelsActions {
    "ADD4" = "ADD4",
    "GET4" = "GET4",
}

export enum ChatsActions {
    "ADD5" = "ADD5",
    "GET5" = "GET5",
}


export enum NavigationActions {
  "NAVIGATE" = "NAVIGATE",
}


export interface AddCategoriesAction {
    action: CategoriesActions.ADD,
    payload: InterCategories
}

export interface AddTutorialsAction {
    action: TutorialsActions.ADD2,
    payload: InterTutorials
}

export interface AddPsettingsAction {
    action: PsettingsActions.ADD3,
    payload: InterPSettings
}

export interface AddChannelsAction {
    action: ChannelsActions.ADD4,
    payload: InterChannels
}

export interface AddChatsAction {
    action: ChatsActions.ADD5,
    payload: InterChats
}


export interface GetCategoriesAction {
    action: CategoriesActions.GET,
    payload: InterCategories[]
}

export interface GetTutorialsAction {
    action: TutorialsActions.GET2,
    payload: InterTutorials[]
}

export interface GetPsettingsAction {
    action: PsettingsActions.GET3,
    payload: InterPSettings[]
}

export interface GetChannelsAction {
    action: ChannelsActions.GET4,
    payload: InterChannels[]
}

export interface GetChatsAction {
    action: ChatsActions.GET5,
    payload: InterChats[]
}

export interface NavigateAction {
    action: NavigationActions.NAVIGATE;
    payload: Screens;
  }
  
export type Actions = SetUser |Navigate | SavePost | GetPost| AddCategoriesAction | GetCategoriesAction | AddTutorialsAction | GetTutorialsAction | AddPsettingsAction | GetPsettingsAction | AddChannelsAction | GetChannelsAction | AddChatsAction | GetChatsAction | NavigateAction;