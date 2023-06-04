import Categories from '../services/Categories'
import Tutorials from '../services/Tutorials'
import ProfileSettings from '../services/ProfileSettings'
import Channels from '../services/Channel'
import Chats from '../services/Chats'
import Users from '../services/Users'
import firebase  from "../utils/firebase";
import { Screens } from "../types/navigation";
import { Post } from "../types/post";
import { AddCategoriesAction, GetCategoriesAction, CategoriesActions, AddTutorialsAction, GetTutorialsAction, TutorialsActions , AddPsettingsAction , PsettingsActions , GetPsettingsAction , ChannelsActions, AddChannelsAction, GetChannelsAction , ChatsActions, AddChatsAction, GetChatsAction } from "../types/store"
import { Actions, NavigateActions, UserActions, PostActions } from "../types/store"


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

export const getChats = async (): Promise<GetChatsAction> => {
    const chats = await Chats.get();
    console.log('chats',Chats);
    return {
        action: ChatsActions.GET5,
        payload: chats
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

export const addChatsAction = ({payload}: Pick<AddChatsAction, "payload">): AddChatsAction => {
    return {
        action: ChatsActions.ADD5,
        payload
    }
}

export const setUserCredentials = (user: string) => {
    return {
      action: UserActions.SET_USER,
      payload: user,
    };
  };  
  
  export const SavePost = async (post: Post): Promise<Actions>=>{
    await firebase.SavePostDB(post);
    return{
        action: PostActions.SAVE_POST,
        payload: post,
    }
  }
  
  export const getPosts = async(): Promise<Actions>=>{
      const Posts = await firebase.GetPostDB();
      return{
          action: PostActions.GET_POST,
          payload: Posts,
      }
  }
  export const navigate = (screen: Screens) => {
      return {
        action: NavigateActions.NAVIGATE,
        payload: screen,
      };
    };

