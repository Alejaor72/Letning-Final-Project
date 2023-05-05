import { Actions, AppState, AuthActions, CategoriesActions, TutorialsActions , PsettingsActions , ChannelsActions } from "../types/store";

export const reducer = (currentAction: Actions, currentState: AppState): AppState => {
    const { action, payload } = currentAction; 

    switch (action) {
        case AuthActions.LOGIN:
            return {
                ...currentState,
                user: payload.user
            }

        case AuthActions.LOGOUT:
            return {
                ...currentState,
                user: {
                    userName: "",
                    email: ""
                }
            }
            
        case CategoriesActions.ADD:
            return {
                ...currentState,
                categories: [
                    payload,
                    ...currentState.categories,
                ]
            }

        case TutorialsActions.ADD2:
            return {
                ...currentState,
                tutorials: [
                    payload,
                    ...currentState.tutorials,
                ]
            }
        
        case PsettingsActions.ADD3:
            return {
                ...currentState,
                profileSettings: [
                    payload,
                    ...currentState.profileSettings,
                ]
            }
        
        case ChannelsActions.ADD4:
            return {
                    ...currentState,
                    profileSettings: [
                        payload,
                        ...currentState.profileSettings,
                    ]
        }

            case CategoriesActions.GET:
            return {
                ...currentState,
                categories: payload
            }

        case TutorialsActions.GET2:
            return {
                ...currentState,
                tutorials: payload
            }
        
        case PsettingsActions.GET3:
            return {
                    ...currentState,
                    profileSettings: payload
            }    
        
        case ChannelsActions.GET4:
            return {
                        ...currentState,
                        profileSettings: payload
            }

        default:
            return currentState;
    }
}
