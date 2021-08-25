import {IIngredient} from "./ingredient.model";

export interface IRecipe {
  id?: number;
  title?: string;
  userId?: number;
  description?: string;
  ingredients?: IIngredient;
}

export class Recipe implements IRecipe {
  ingredients_attributes: any;
  constructor(
    public id?: number,
    public title?: string,
    public description?: string,
    public ingredients?: any
  ) {
    this.ingredients_attributes = ingredients
  }
}
