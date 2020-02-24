import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  constructor() { }

  getImages():  Observable<GalleryItem[]> {
    return of(
      [
        {
          title: "Swmmers",
          format: "6x7 Film",
          imageURL: "/assets/image/images/brewster_flats_swimmers.jpg",
          thumbnailURL: "/assets/image/thumbnails/brewster_flats_swimmers.jpg"
        },
        {
          title: "Noon Dune",
          format: "6x7 Film",
          imageURL: "/assets/image/images/sandy_neck_dunes.jpg",
          thumbnailURL: "/assets/image/images/sandy_neck_dunes.jpg"
        }
      ]
    );
  }

}

interface GalleryItem {
  title: string;
  format: string;
  imageURL: string;
  thumbnailURL: string;
}
