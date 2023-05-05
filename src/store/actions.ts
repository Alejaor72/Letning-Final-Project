import Categories from '../services/Categories'
import Tutorials from '../services/Tutorials'
import ProfileSettings from '../services/ProfileSettings'
import Channels from '../services/Channel'
import { AddCategoriesAction, AuthActions, GetCategoriesAction, LogInAction, LogOutAction, CategoriesActions, AddTutorialsAction, GetTutorialsAction, TutorialsActions , AddPsettingsAction , PsettingsActions , GetPsettingsAction , ChannelsActions, AddChannelsAction, GetChannelsAction} from "../types/store"


export const logOut = (): LogOutAction => {
    return {
        action: AuthActions.LOGOUT,
        payload: undefined
    }
}

export const logIn = ({payload}: Pick<LogInAction, "payload">): LogInAction => {
    return {
        action: AuthActions.LOGIN,
        payload
    }
}

export const getCategories = async (): Promise<GetCategoriesAction> => {
    const categories = await Categories.get();
    console.log('Categories',categories);
    return {
        action: CategoriesActions.GET,
        payload: categories
    }
}

export const getChannels = async (): Promise<GetChannelsAction> => {
    const channels = await Channels.get();
    console.log('Channels',channels);
    return {
        action: ChannelsActions.GET4,
        payload: channels
    }
}

export const getTutorials = async (): Promise<GetTutorialsAction> => {
    const tutorials = await Tutorials.get();
    console.log('Tutorials',tutorials);
    return {
        action: TutorialsActions.GET2,
        payload: tutorials
    }
}

export const addNewCategories = ({payload}: Pick<AddCategoriesAction, "payload">): AddCategoriesAction => {
    return {
        action: CategoriesActions.ADD,
        payload
    }
}

export const addNewTutorials = ({payload}: Pick<AddTutorialsAction, "payload">): AddTutorialsAction => {
    return {
        action: TutorialsActions.ADD2,
        payload
    }
}

export const addNewChannels = ({payload}: Pick<AddChannelsAction, "payload">): AddChannelsAction => {
    return {
        action: ChannelsActions.ADD4,
        payload
    }
}

export const getPsettingsAction = async (): Promise<GetPsettingsAction> => {
    const profileSettings = await ProfileSettings.get();
    console.log('profile settings',profileSettings);
    return {
        action: PsettingsActions.GET3,
        payload: profileSettings
    }
}

export const addPsettingsAction = ({payload}: Pick<AddPsettingsAction, "payload">): AddPsettingsAction => {
    return {
        action: PsettingsActions.ADD3,
        payload
    }
}