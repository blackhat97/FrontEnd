import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {
  private static imagePrefix = 'http://webcomics.surge.sh/images';
  private webpAvalible = null;

  constructor() { }

  private getSize() {
    return this.webpAvalible ? 'high' : 'medium';
  }

  public getImageUrl(key: string, multires = true) {
    if (this.webpAvalible === null)
      this.webpAvalible = this.canUseWebP();
    return `${ImagesService.imagePrefix}/${key}.jpg`;
  }

  private canUseWebP() {
    let elem = document.createElement('canvas');
    if (!!(elem.getContext && elem.getContext('2d'))) {
      return elem.toDataURL('image/webp').indexOf('data:image/webp') === 0;
    } else {
      return false;
    }
  }

}
