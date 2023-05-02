import { InterCategories } from "../types/Categories";
import { dataCategories } from "../mocks/dataCategories";

class Categories {
  async get(): Promise<InterCategories[]> {
    console.log("starting categories...");
    const value: InterCategories[] = await new Promise((resolve) => {
      setTimeout(() => resolve(dataCategories), 3000);
    });
    return value;
  }
}

export default new Categories();