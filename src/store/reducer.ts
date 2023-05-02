import { Actions, AppState, AuthActions, CategoriesActions, TutorialsActions } from "../types/store";

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
                friends: [
                    payload,
                    ...currentState.friends,
                ]
            }

        case TutorialsActions.ADD2:
            return {
                ...currentState,
                servers: [
                    payload,
                    ...currentState.servers,
                ]
            }
        
        case CategoriesActions.GET:
            return {
                ...currentState,
                friends: payload
            }

        case TutorialsActions.GET2:
            return {
                ...currentState,
                servers: payload
            }
    
        default:
            return currentState;
    }
}
