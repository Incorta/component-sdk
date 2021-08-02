import { IQueryBuilder } from './QueryBuilder';

export interface QueryBuilderFactory {
  getQueryBuilder(): IQueryBuilder;
}
