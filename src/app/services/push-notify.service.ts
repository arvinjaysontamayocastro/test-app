import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PushNotifyService {
  eventSource!: EventSource;
  url = 'http://localhost:5000/api/Notification/subscribe';

  constructor() { }

  getNotify() {
    return new Observable(obs => {
      this.eventSource = new EventSource(this.url);

      this.eventSource.onerror = (error) => {
        console.log(error);
      }

      this.eventSource.onmessage = (message) => {
        obs.next(message.data);
      }
    });
  }
}