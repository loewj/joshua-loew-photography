import { Component, OnInit } from '@angular/core';
import { gsap, TimelineMax, Power1 } from 'gsap';
import { WeatherService } from '../service/weather.service';
import * as moment from 'moment';
import { Weather } from '../types/weather';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  public navOpen = false;
  private navTimeline;
  public showClockDelimeter = false;
  public timeHour: string = '';
  public timeMinute: string = '';
  public timeAMPM: string = '';
  private weather: Weather;
  public weatherString: string;
  menuItems: never[];

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {

    this.menuItems = gsap.utils.toArray('.menu-item');
    this.navTimeline = (new TimelineMax({
      paused: true, onComplete: () => {

      }
    }) as any) // <--- casting as any since there's a type issue with TimelineMax
      .to('#navOverlay', 0.5, { height: '100%', ease: Power1.easeInOut })
      .staggerFrom(gsap.utils.shuffle(this.menuItems), 0.3, {opacity: 0}, 0.1)
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
      this.timeHour = moment().format('h');
      this.timeMinute = moment().format('mm');
      this.timeAMPM = moment().format('a');
      this.showClockDelimeter = !this.showClockDelimeter;
    }, 1000);;
  }

  getLocation(): void {
    navigator.geolocation.getCurrentPosition((position) => {
      const longitude = position.coords.longitude;
      const latitude = position.coords.latitude;
      this.weatherService.buildUrl(latitude, longitude);
      this.weatherService.getWeather().subscribe(
        res => {
          this.weather = new Weather(res);
          this.weatherString = this.weather.getWeatherString();
        },
        error => this.weather = error
      );
    }, () => { this.weatherString = "Who said privacy was dead?" });
  }

}
