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
          title: "Passage",
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
          title: "Dawn Twilight Sands",
          format: "6x7 Film",
          imageURL: "/assets/image/images/sandy_neck_sand.jpg",
          thumbnailURL: "/assets/image/thumbnails/sandy_neck_sand.jpg"
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
        },
        {
          title: "Sanctuary",
          format: "Digital",
          imageURL: "/assets/image/images/cross_moss.jpg",
          thumbnailURL: "/assets/image/thumbnails/cross_moss.jpg"
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
