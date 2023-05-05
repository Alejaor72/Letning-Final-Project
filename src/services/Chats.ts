import { InterChats } from "../types/Chats";
import { dataChats } from "../mocks/dataChats";

class Chats {
  async get(): Promise<InterChats[]> {
    console.log("starting chats...");
    const value: InterChats[] = await new Promise((resolve) => {
      setTimeout(() => resolve(dataChats), 3000);
    });
    return value;
  }
}

export default new Chats();