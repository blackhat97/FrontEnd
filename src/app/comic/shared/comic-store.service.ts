import { Injectable } from '@angular/core';
import Dexie from 'dexie';
import { DexieService } from 'src/app/shared/services/dexie.service';
import { Chapter, Page, Comic, OrganizationType } from 'src/app/shared/models/comic.model';

export interface ComicListData {
  comicURL: string;
  comicID: number;
  accountID: number;
  title: string;
  description: string;
  tagline: string;
  thumbnailURL: string;
}

export interface PagesReadData {
  comicURL: string;
  pagesRead: Array<number>;
}

export interface ComicData {
  comicURL: string;
  comicID: number;
  accountID: number;
  title: string;
  description: string;
  thumbnailURL: string;
  tagline: string;
  organization: string;
  pages: Array<{
    pageID: number
    pageNumber: number
    chapterID: number
    imgURL: string
    altText: string
  }>;

  chapters: Array<{
    chapterID: number
    chapterNumber: number
  }>;

}

@Injectable({
  providedIn: 'root'
})
export class ComicStoreService {

  constructor(
    private dexieService: DexieService,
  ) { }

  unpackComicListItem(entry: ComicListData) {
    return new Comic(
      entry.comicID,
      entry.accountID,
      entry.title,
      entry.comicURL,
      entry.description,
      entry.tagline,
      entry.thumbnailURL,
      null
    );
  }

  packPagesRead(comicURL: string, pagesRead: Set<number>): PagesReadData {
    return {
      comicURL: comicURL,
      pagesRead: Array.from(pagesRead.values())
    };
  }

  unpackPagesRead(entry: PagesReadData): number[] {
    let pagesRead = entry.pagesRead;
    return entry.pagesRead;
  }

  unpackComic(entry: ComicData) {
    let chapters: Chapter[] = [];
    let pages: Page[] = [];
    for (let chapter of entry.chapters) {
        let c: Chapter = new Chapter(
            chapter.chapterID,
            chapter.chapterNumber,
        );
        chapters.push(c);
    }

    for (let page of entry.pages) {
        let p: Page = new Page(
            page.pageID,
            page.pageNumber,
            page.chapterID,
            page.imgURL,
            page.altText
        );
        pages.push(p);
    }

    let comic = new Comic(
        entry.comicID,
        entry.accountID,
        entry.title,
        entry.comicURL,
        entry.description,
        entry.tagline,
        entry.thumbnailURL,
        entry.organization,
        chapters,
        pages
    );

    return comic;
  }

  packComic(comic: Comic): ComicData {
      return {
          comicURL: comic.comicURL,
          comicID: comic.comicID,
          accountID: comic.accountID,
          tagline: comic.tagline,
          title: comic.title,
          description: comic.description,
          thumbnailURL: comic.thumbnailURL,
          organization: OrganizationType[comic.getOrganization()],
          chapters: comic.chapters.map(chapter => {
              return {
                  chapterID: chapter.chapterID,
                  chapterNumber: chapter.chapterNumber
              };
          }),
          pages: comic.pages.map(page => {
              return {
                  pageID: page.pageID,
                  pageNumber: page.pageNumber,
                  chapterID: page.chapterID,
                  imgURL: page.imgURL,
                  altText: page.altText
              };
          })
      };
  }

  cacheComicList(data: ComicListData[], loc: string) {
    const comicListTable: Dexie.Table<ComicListData, string> = this.dexieService.table(loc);
    comicListTable.bulkPut(data);
    const validIds = new Set(data.map(comic => comic.comicID));
    this.getCachedComicList(loc).then(comics => {
        const toDelete = comics
            .filter(comic => !validIds.has(comic.comicID))
            .map(comic => comic.comicURL);
        comicListTable.bulkDelete(toDelete);
    });
  }
  getCachedComicList(loc: string) {
    let comicListTable: Dexie.Table<ComicListData, string> = this.dexieService.table(loc);
    return comicListTable.toArray().then((data: ComicListData[]) => {
      return data.map(this.unpackComicListItem);
    }).catch((e) => {
      console.error(e);
      return new Array<Comic>();
    });
  }

  cachePagesRead(data: PagesReadData) {
    let pagesReadTable: Dexie.Table<PagesReadData, string> = this.dexieService.table('pagesRead');
    pagesReadTable.put(data)
        .catch(console.error);
  }

  getCachedPagesRead(comicURL: string): Promise<number[]> {
    let pagesReadTable: Dexie.Table<PagesReadData, string> = this.dexieService.table('pagesRead');
    return pagesReadTable.get({ comicurl: comicURL }).then((data) => {
        if (data)
            return this.unpackPagesRead(data);
        else
            return [];
    }).catch((e) => {
        console.error(e);
        return [];
    });
  }

  cacheComic(data: ComicData) {
    let comicTable: Dexie.Table<ComicData, string> = this.dexieService.table('comic');
    comicTable.put(data);
  }

  getCachedComic(comicURL: string): Promise<Comic> {
    let comicTable: Dexie.Table<ComicData, string> = this.dexieService.table('comic');
    return comicTable.get({ comicurl: comicURL }).then((data) => {
        if (data)
            return this.unpackComic(data);
        else
            return null;
    }).catch((e) => {
        console.error(e);
        return null;
    });
  }

}
