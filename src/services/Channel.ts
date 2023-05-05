import { InterChannels } from "../types/Channels";
import { dataChannel } from "../mocks/dataChannel";

class Channels {
  async get(): Promise<InterChannels[]> {
    console.log("starting channels...");
    const value: InterChannels[] = await new Promise((resolve) => {
      setTimeout(() => resolve(dataChannel), 3000);
    });
    return value;
  }
}

export default new Channels();