import { InterPSettings } from "../types/ProfileSettings";
import { dataProfileSettings } from "../mocks/dataProfileSettings";

class ProfileSettings {
  async get(): Promise<InterPSettings[]> {
    console.log("starting profile settings...");
    const value: InterPSettings[] = await new Promise((resolve) => {
      setTimeout(() => resolve(dataProfileSettings), 3000);
    });
    return value;
  }
}

export default new ProfileSettings();