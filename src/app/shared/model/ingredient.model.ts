export interface IIngredient {
  id?: number;
  name?: string;
  quantity?: number;
}

export class Ingredient implements IIngredient {
  constructor(
    public id?: number,
    public name?: string,
    public quantity?: number
  ) {}
}
