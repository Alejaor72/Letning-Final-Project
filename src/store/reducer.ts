import { Actions, AppState, CategoriesActions, PsettingsActions , NavigateActions, UserActions, PostActions} from "../types/store";

export const reducer = (actions: Actions, appState: AppState) => {
    const {action, payload} = actions;


    switch (action) {
            
        case CategoriesActions.ADD:
            return {
                ...appState,
                categories: [
                    payload,
                    ...appState.categories,
                ]
            }
        
        case PsettingsActions.ADD3:
            return {
                ...appState,
                profileSettings: [
                    payload,
                    ...appState.profileSettings,
                ]
            }
        

            case CategoriesActions.GET:
            return {
                ...appState,
                categories: payload
            }

        
        case PsettingsActions.GET3:
            return {
                    ...appState,
                    profileSettings: payload
            }    
        
        
        
                case PostActions.SAVE_POST:
                    appState.Post = [...appState.Post, payload]
                    return appState
            
                case PostActions.GET_POST:
                    appState.Post = payload
                    return appState
        
                case NavigateActions.NAVIGATE:
                    appState.screens = payload;
                    return appState
        
                case UserActions.SET_USER:
                    appState.user = payload;
                    return appState
        
                default:
                    return appState
    }
}
