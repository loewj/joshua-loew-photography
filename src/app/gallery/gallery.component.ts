import { Component, OnInit } from '@angular/core';
import { GalleryService } from '../service/gallery.service';

import baguetteBox from 'baguettebox.js';
import { gsap, Power1 } from 'gsap';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  public images;
  private scrollObserver: IntersectionObserver;

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

    this.scrollObserver = new IntersectionObserver((entries, self) => {

      entries.forEach(entry => {
        if (entry.intersectionRatio > 0) {
          gsap.to(entry.target, 1, {opacity: 1, ease: Power1.easeInOut});
        } else {
          gsap.to(entry.target, 0, {opacity: 0});
        }
      });

    });

    document.querySelectorAll('.image-container').forEach(image => {
      this.scrollObserver.observe(image);
    });


  }

  getImages(): void {
    this.galleryService.getImages()
        .subscribe(
          (images) => { this.images = images; }
        );
  }
      
}
