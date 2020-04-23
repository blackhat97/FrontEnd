import Dexie from 'dexie';
import { Injectable } from "@angular/core";

@Injectable()
export class DexieService extends Dexie {
    constructor() {
        super('ComicLocalStorage');
        this.version(1).stores({
            comic: 'comicurl',
            comics: 'comicurl',
            pagesRead: 'comicurl'
        });
    }
}
