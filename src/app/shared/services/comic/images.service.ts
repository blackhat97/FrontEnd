import { Injectable } from '@angular/core';

@Injectable()
export class ImagesService {
    private static imagePrefix = 'https://storage.googleapis.com/webcomic-storage';

    public getImageUrl(key: string) {
        const fn = key.replace(/\.[^/.]+$/, '');
    let ext = key.split('.').pop();
    return `${ImagesService.imagePrefix}/${fn}.${ext}`;
    }
}