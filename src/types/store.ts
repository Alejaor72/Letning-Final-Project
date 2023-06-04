export type Observer = { render: () => void } & HTMLElement;
import { Screens } from "./navigation";
import { Post } from "./post";

export type AppState = {
  Post: Post[];
  screens: Screens;
  user: string;
  
};
 
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

export type Actions =  SetUser |Navigate | SavePost | GetPost;