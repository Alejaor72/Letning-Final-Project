import { InterUsers } from "../types/Users";
import { dataUsers } from "../mocks/dataUsers";

class Users {
  async get(): Promise<InterUsers[]> {
    console.log("starting Users...");
    const value: InterUsers[] = await new Promise((resolve) => {
      setTimeout(() => resolve(dataUsers), 3000);
    });
    return value;
  }
}

export default new Users();