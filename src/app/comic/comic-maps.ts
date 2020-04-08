import { Comic, Chapter } from '../shared/models/comic.model';

// these maps store array indices and corresponding objects, they are gotten by their ID key
export class ComicMaps {
    private comic: Comic;
    private chapterMap: Map<number, [number, Chapter]>;

    constructor(comic: Comic) {
        this.comic = comic;
        this.chapterMap = new Map<number, [number, Chapter]>();
        for (let i in comic.chapters) {
            let chapter = comic.chapters[i];
            this.chapterMap.set(+chapter.chapterID, [+i, chapter]);
        }
    }

    // functions utilizing on the maps
    getChapterIndex(chapterID: number): number {
        if (this.chapterMap.get(chapterID))
            return this.chapterMap.get(chapterID)[0];
        return -1;
    }
    getChapter(chapterID: number): Chapter {
        if (this.chapterMap.get(chapterID))
            return this.chapterMap.get(chapterID)[1];
        return null;
    }
    getComic(): Comic {
        return this.comic;
    }
}
