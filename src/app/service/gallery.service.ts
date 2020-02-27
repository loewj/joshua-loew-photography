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
          title: "High Noon Dunes",
          format: "6x7 Film",
          imageURL: "/assets/image/images/sandy_neck_dunes.jpg",
          thumbnailURL: "/assets/image/thumbnails/sandy_neck_dunes.jpg"
        },
        {
          title: "Magnanimous",
          format: "6x7 Film",
          imageURL: "/assets/image/images/sandy_neck_tree_silhouette.jpg",
          thumbnailURL: "/assets/image/thumbnails/sandy_neck_tree_silhouette.jpg"
        },
        {
          title: "Uprising",
          format: "6x7 Film",
          imageURL: "/assets/image/images/uprising.jpg",
          thumbnailURL: "/assets/image/thumbnails/uprising.jpg"
        },
        {
          title: "Now Playing!",
          format: "6x7 Film",
          imageURL: "/assets/image/images/ppac.jpg",
          thumbnailURL: "/assets/image/thumbnails/ppac.jpg"
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
