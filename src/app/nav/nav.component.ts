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
    })
    .set('.content', {zIndex: 2})
      .fromTo('.content', 1,
        {
          css: {
            background: "linear-gradient(-135deg,#0ff,#00f)"
          }
        },
        {
          css: {
            background: "linear-gradient(-135deg,#D2ADFF,#7F56B3)"
          },
          ease: Power1.easeInOut
        })
      ;
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
