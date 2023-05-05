
import { InterCategories} from "./Categories"
import { InterTutorials} from "./Tutorials"
import { InterPSettings } from "./ProfileSettings";

export type Observer = ({ render: () => void } & HTMLElement);

export type AppState = {
    user: {
        userName: string,
        email: string,
    },
    categories: InterCategories[]
    tutorials: InterTutorials[]
    profileSettings: InterPSettings[]
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
export type Actions = LogInAction | LogOutAction | AddCategoriesAction | GetCategoriesAction | AddTutorialsAction | GetTutorialsAction | AddPsettingsAction | GetPsettingsAction;