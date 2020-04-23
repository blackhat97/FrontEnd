import { Injectable } from '@angular/core';
import Dexie from 'dexie';
import { DexieService } from '../dexie.service';
import { Page } from '../../models/page.model';


export interface PageListData {
    pageid: number;
    imgurl: string;
    chapterid: number;
    pageNumber: number;
    altText: string;
}

@Injectable()
export class ComicStoreService {

    constructor(
        private dexieService: DexieService,
    ) { }
    
    unpackPageListItem(entry: PageListData) {
        return new Page(
            entry.pageid,
            entry.pageNumber,
            entry.chapterid,
            entry.imgurl,
            entry.altText
        );
    }
    
    cachePageList(data: PageListData[], loc: string) {
        const comicListTable: Dexie.Table<PageListData, string> = this.dexieService.table(loc);
        comicListTable.bulkPut(data);
        const validIds = new Set(data.map(comic => comic.chapterid));
        this.getCachedPageList(loc).then(comics => {
            const toDelete = comics
                .filter(comic => !validIds.has(comic.chapterID))
                .map(comic => comic.imgURL);
            comicListTable.bulkDelete(toDelete);
        });
    }

    getCachedPageList(loc: string) {
        let comicListTable: Dexie.Table<PageListData, string> = this.dexieService.table(loc);
        return comicListTable.toArray().then((data: PageListData[]) => {
            return data.map(this.unpackPageListItem);
        }).catch((e) => {
            console.error(e);
            return new Array<Page>();
        });
    }


}