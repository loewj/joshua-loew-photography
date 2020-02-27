import { Component, OnInit } from '@angular/core';
import { TimelineMax, Power1 } from 'gsap';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  public navOpen = false;
  private navTimeline;

  constructor() { }

  ngOnInit(): void {
    this.navTimeline = new TimelineMax({
      paused: true, onComplete: () => {

      }
    });
  }

  toggleNav() {

    // perform the GSAP animation to shrink and darken the content pane
    if (this.navOpen === false) {
      this.navTimeline.play();
    } else {
      this.navTimeline.reverse();
    }

    this.navOpen = !this.navOpen;

  }

}
