export type Observer = { render: () => void } & HTMLElement;
import { Screens } from "./navigation";
import { Post } from "./post";
import { User } from "./user";
import { InterCategories} from "./Categories"
import { InterPSettings } from "./ProfileSettings";


export type AppState = {
    categories: InterCategories[]
    profileSettings: InterPSettings[]
    Post: Post[];
    screens: Screens;
    user: string;
    userInfo: User
}

export enum UserActions {
    "SET_USER" = "SET_USER",
    "ADD_USER" = "ADD_USER"
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
  export interface AddUser {
    action: UserActions.ADD_USER,
    payload: User
  }

export enum CategoriesActions {
    "ADD" = "ADD",
    "GET" = "GET",
}

export enum PsettingsActions {
    "ADD3" = "ADD3",
    "GET3" = "GET3",
}


export enum NavigationActions {
  "NAVIGATE" = "NAVIGATE",
}


export interface AddCategoriesAction {
    action: CategoriesActions.ADD,
    payload: InterCategories
}


export interface AddPsettingsAction {
    action: PsettingsActions.ADD3,
    payload: InterPSettings
}


export interface GetCategoriesAction {
    action: CategoriesActions.GET,
    payload: InterCategories[]
}


export interface GetPsettingsAction {
    action: PsettingsActions.GET3,
    payload: InterPSettings[]
}

export interface NavigateAction {
    action: NavigationActions.NAVIGATE;
    payload: Screens;
  }
  
export type Actions = SetUser |Navigate | SavePost | GetPost| AddCategoriesAction | GetCategoriesAction  | AddPsettingsAction | GetPsettingsAction | NavigateAction| AddUser;