export class Chapter {
    public pages: Page[] = [];
    constructor(
        public chapterID: number,
        public chapterNumber: number,
    ) { }
}

export class Page {
    static empty = new Page(0, 0, 0, '', '');
    constructor(
        public pageID: number,
        public pageNumber: number,
        public  chapterID: number,
        public imgURL: string,
        public altText: string,
    ) { }
}

export enum OrganizationType {
    Pages, Chapters
}

export class Comic {
    static empty = new Comic(0, 0, '', '', '', '', '', 'pages', [], []);

    private chapterMap: Map<number, Chapter>;
    private highestChapter: number;
    private organization: OrganizationType;

    constructor(
        public comicID: number,
        public accountID: number,
        public title: string,
        public comicURL: string,
        public description: string,
        public tagline: string,
        public thumbnailURL: string,
        organization: string,
        public chapters: Chapter[] = [],
        public pages: Page[] = [],
    ) {
        switch (organization) {
            case 'pages':
                this.organization = OrganizationType.Pages;
                break;
            case 'chapters':
                this.organization = OrganizationType.Chapters;
                break;
        }
        this.chapterMap = new Map();
        this.highestChapter = Math.max(...this.chapters.map(chapter => chapter.chapterID));
        this.pages.sort((p1, p2) => this.pageSortValue(p1) - this.pageSortValue(p2));
        this.groupPages();

    }

    private groupPages() {
        if (this.hasChapters()) {
            for (let page of this.pages) {
                if (this.chapterMap.has(page.chapterID))
                    this.chapterMap.get(page.chapterID).pages.push(page);
            }
        }
    }

    public getOrganization() {
        return this.organization;
    }

    public hasChapters() {
        return this.organization === OrganizationType.Chapters;
    }

    public addChapter(chapter: Chapter) {
        this.chapters.push(chapter);
        this.chapterMap.set(chapter.chapterID, chapter);
        //this.highestChapter = Math.max(this.highestVolume, chapter.chapterNumber);
        
    }

    private pageSortValue(page: Page) {
        return null;
    }

    public getChapter(chapterID) {
        return this.chapterMap.get(chapterID);

    }
}