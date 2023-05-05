
import { InterCategories} from "./Categories"
import { InterTutorials} from "./Tutorials"
import { InterPSettings } from "./ProfileSettings";
import { InterChannels } from "./Channels";
import { InterUsers } from "./Users";
import { InterChats } from "./Chats";

export type Observer = ({ render: () => void } & HTMLElement);

export type AppState = {
    user: {
        userName: string,
        email: string,
    },
    categories: InterCategories[]
    tutorials: InterTutorials[]
    profileSettings: InterPSettings[]
    channels: InterChannels[]
    chats: InterChats[]
    users: InterUsers[]
}

export enum AuthActions {
    "LOGIN" = "LOGIN",
    "LOGOUT" = "LOGOUT",
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

export enum UsersActions {
    "ADD6" = "ADD6",
    "GET6" = "GET6",
}

export interface LogInAction {
    action: AuthActions.LOGIN,
    payload: Pick<AppState, "user">
}

export interface LogOutAction {
    action: AuthActions.LOGOUT,
    payload: void
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

export interface AddUsersAction {
    action: UsersActions.ADD6,
    payload: InterUsers
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

export interface GetUsersAction {
    action: UsersActions.GET6,
    payload: InterUsers[]
}

export type Actions = LogInAction | LogOutAction | AddCategoriesAction | GetCategoriesAction | AddTutorialsAction | GetTutorialsAction | AddPsettingsAction | GetPsettingsAction | AddChannelsAction | GetChannelsAction | AddChatsAction | GetChatsAction | AddUsersAction | GetUsersAction;