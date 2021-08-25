export interface IRecipe {
  id?: number;
  title?: string;
  userId?: number;
  description?: any;
}

export class Recipe implements IRecipe {
  constructor(
    public id?: number,
    public title?: string,
    public userId?: number,
    public description?: any
  ) {}
}
