import { ApiEnum } from '../enum/ApiEnum';


export const apiUrl = (api) => {
      const API = ApiEnum;
      switch(api) {
        case API.GET_PERSONAL_BLOG:
          console.log(process.env.REACT_APP_API_GET_PERSONAL_BLOG);
          return process.env.REACT_APP_API_GET_PERSONAL_BLOG;

        case API.GET_TECHNICAL_BLOG:
         console.log(process.env.REACT_APP_API_GET_TECHNICAL_BLOG)
         return process.env.REACT_APP_API_GET_TECHNICAL_BLOG;

      case API.POST_CONTACT_ME:
           console.log(process.env.REACT_APP_API_POST_CONTACT_ME)
          return process.env.REACT_APP_API_POST_CONTACT_ME;

      default:

          console.error("Api not configured in .env");
      }
}