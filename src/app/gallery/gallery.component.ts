import { Component, OnInit } from '@angular/core';
import { GalleryService } from '../service/gallery.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  public images;

  constructor(private galleryService: GalleryService) { }

  ngOnInit(): void {
    this.getImages();
  }

  getImages(): void {
    this.galleryService.getImages()
        .subscribe(images => this.images = images);
  }

}
