import { Component, OnInit } from '@angular/core';
import { TimelineMax, Power1 } from 'gsap';
import { WeatherService } from '../service/weather.service';
import * as moment from 'moment';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  public navOpen = false;
  private navTimeline;
  public time: string = '';
  public weather: string = '';
  private hasLocation = false;

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {

    this.navTimeline = new TimelineMax({
      paused: true, onComplete: () => {
        
      }
    })
    // .to('.content', 0.5, {css:{paddingTop:'5em'}, ease:Power1.easeInOut})
    // .to('.navbar-item-container', 0, {autoAlpha: 1, display:'inherit'})
    ;

    this.startClock();
    this.getLocation();

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

  startClock() {
    setInterval(() => {
      this.time = moment().format('h:mm a');
    }, 1000);;
  }

  getLocation(): void{
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position)=>{
          const longitude = position.coords.longitude;
          const latitude = position.coords.latitude;
          this.weatherService.buildUrl(latitude, longitude);
          this.weatherService.getWeather().subscribe(
            res => {
               this.weather = res; 
               console.log(this.weather);
            },
            error => this.weather = error
        );
          this.hasLocation = true;
        });
    } else {
       console.log("No support for geolocation")
    }
  }

}
