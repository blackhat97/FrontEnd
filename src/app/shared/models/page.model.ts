export class PageModel {
    static empty = new PageModel(0, 0, 0, '', '');
    constructor(
        public pageID: number,
        public pageNumber: number,
        public chapterID: number,
        public imgURL: string,
        public altText: string,
    ) { }
}





