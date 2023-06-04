import { Actions, AppState, CategoriesActions, TutorialsActions , PsettingsActions , ChannelsActions , ChatsActions , NavigateActions, UserActions, PostActions} from "../types/store";

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

        case TutorialsActions.ADD2:
            return {
                ...appState,
                tutorials: [
                    payload,
                    ...appState.tutorials,
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
        
        case ChannelsActions.ADD4:
            return {
                    ...appState,
                    profileSettings: [
                        payload,
                        ...appState.profileSettings,
                    ]
        }
        
        case ChatsActions.ADD5:
            return {
                    ...appState,
                    chats: [
                        payload,
                        ...appState.chats,
                    ]
        }
        

            case CategoriesActions.GET:
            return {
                ...appState,
                categories: payload
            }

        case TutorialsActions.GET2:
            return {
                ...appState,
                tutorials: payload
            }
        
        case PsettingsActions.GET3:
            return {
                    ...appState,
                    profileSettings: payload
            }    
        
        case ChannelsActions.GET4:
            return {
                        ...appState,
                        profileSettings: payload
            }

        case ChatsActions.GET5:
                return {
                            ...appState,
                            chats: payload
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
