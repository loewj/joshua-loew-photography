import { Component, OnInit } from '@angular/core';
import { GalleryService } from '../service/gallery.service';

import baguetteBox from 'baguettebox.js';

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

  ngAfterViewInit() {
    const c = baguetteBox.run('.gallery', {
      buttons: false,
      fullScreen: true,
      animation: 'fadeIn'
    });
  }

  getImages(): void {
    this.galleryService.getImages()
        .subscribe(images => this.images = images);
  }

}
