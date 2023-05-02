import { InterTutorials } from "../types/Tutorials";
import { dataTutorials } from "../mocks/dataTutorials";

class Tutorials {
  async get(): Promise<InterTutorials[]> {
    console.log("starting Tutorials...");
    const value: InterTutorials[] = await new Promise((resolve) => {
      setTimeout(() => resolve(dataTutorials), 3000);
    });
    return value;
  }
}

export default new Tutorials();