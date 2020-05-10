import { PageModel } from './page.model';

export interface ComicViewerModel {
    chapterID: number;
    name: string;
    date: string;
    published: number;
    prev_id: number;
    next_id: number;
    pages: PageModel[];
}

