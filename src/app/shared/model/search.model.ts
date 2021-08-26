export interface ISearchCriteria {
  query?: string;
}

export class SearchCriteria implements ISearchCriteria {

  constructor(public query?: string) {}
}
