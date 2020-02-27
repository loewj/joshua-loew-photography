import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private weatherAPIkey = 'cd98ab4c3c08cc7dee080f18c6d846ab';
  private url: string = null;

  constructor(private http: HttpClient) {

  }

  buildUrl(latitude: number, longitude: number) {
    this.url = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${this.weatherAPIkey}`;
  }

  getWeather(): any {
    return this.http.get<any>(this.url).pipe(
      tap(data => JSON.stringify(data)),
      catchError(this.handleError)
    );

  }

  private handleError(err: HttpErrorResponse) {

    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {

      errorMessage = `An error occurred: ${err.error.message}`;
    } else {

      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }

}
