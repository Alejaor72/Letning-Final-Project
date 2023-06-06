import Categories from '../services/Categories'
import ProfileSettings from '../services/ProfileSettings'
import firebase  from "../utils/firebase";
import { Screens } from "../types/navigation";
import { Post } from "../types/post";
import { User } from "../types/user";
import { AddCategoriesAction, GetCategoriesAction, CategoriesActions , AddPsettingsAction , PsettingsActions , GetPsettingsAction } from "../types/store"
import { Actions, NavigateActions, UserActions, PostActions,  AddUser ,SetUser} from "../types/store"


export const getCategories = async (): Promise<GetCategoriesAction> => {
    const categories = await Categories.get();
    console.log('Categories',categories);
    return {
        action: CategoriesActions.GET,
        payload: categories
    }
}

export const addNewCategories = ({payload}: Pick<AddCategoriesAction, "payload">): AddCategoriesAction => {
    return {
        action: CategoriesActions.ADD,
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


export const setUserCredentials =  (user: string): SetUser=>{
    return{
        action: UserActions.SET_USER,
        payload: user,
    }
  } 
  
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

    export const addUser = (user: User): AddUser =>{
        return{
            action: UserActions.ADD_USER,
            payload: user,
        }
      }
