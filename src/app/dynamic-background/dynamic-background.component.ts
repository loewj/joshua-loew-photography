import { Component, OnInit, HostListener, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { TimelineMax, Power1 } from 'gsap';

@Component({
  selector: 'app-dynamic-background',
  templateUrl: './dynamic-background.component.html',
  styleUrls: ['./dynamic-background.component.scss']
})
export class DynamicBackgroundComponent implements OnInit {

  private introTimeline;
  private enterTimeline;

  hasEntered = false;
  introComplete = false;

  constructor(private router: Router, private _ngZone: NgZone) { }

  ngOnInit(): void {

    this.introTimeline = new TimelineMax({paused: true, delay:1, onComplete: () => { 
        this.introComplete = true;
      }}) 
        .from('.logo-component', 2, {opacity: 0, stagger: 0.1, ease:Power1.easeInOut})
        .from('#jl-logo-j', 1, {y: 30, ease:Power1.easeInOut}, '-=2')
        .from('#jl-logo-l', 1, {y: -30, ease:Power1.easeInOut}, '-=2')
        .from('.touch-icon', 1, {opacity: 0, ease:Power1.easeInOut}, '-=1')
      ;      

    this.enterTimeline = new TimelineMax({paused: true, onComplete: () => { 
        this.hasEntered = true; 
        this._ngZone.run(() => this.router.navigate(['/home']));
      }
    })
      .to('#jl-logo-j', .5, {y: 30, opacity: 0, ease:Power1.easeInOut})
      .to('#jl-logo-l', .5, {y: -30, opacity: 0, ease:Power1.easeInOut}, '-=0.5')
      .to(".touch-icon", 0.5, {scale: 0.75, opacity: 0, ease:Power1.easeInOut}, '-=')
      .fromTo(".content", 0.2, 
        {css: {background: "linear-gradient(-135deg,#fff,#fff)"}}, 
        {css: {background: "linear-gradient(-135deg,#0ff,#00f)"}}, '-=0.3')
      .from('.navbar-container', 0.2, {autoAlpha:0}, '-=0.1')
    ;

  }

  ngAfterViewInit() {
    this.introTimeline.play();
  }

  clearIntroElements() {

  }

  @HostListener('document:mousedown', ['$event'])
    documentDown(event: MouseEvent) {
        if (this.introComplete === true) {
          this.enterTimeline.play();
        }
    }

    @HostListener('document:mouseup', ['$event'])
    documentUp(event: MouseEvent) {
      if (this.hasEntered === false) {
        this.enterTimeline.reverse();
      }
    }

}
