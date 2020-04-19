import { ComicModel } from './comic.model';

export interface ComicCategoryModel {
    page: number;
    results: ComicModel[];
    total_pages: number;
}
