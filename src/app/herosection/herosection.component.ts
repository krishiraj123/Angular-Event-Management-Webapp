import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-herosection',
  templateUrl: './herosection.component.html',
  styleUrl: './herosection.component.css'
})
export class HerosectionComponent implements OnInit {
  countdownText: string = '';
  show_days = 0
  show_hours = 0
  show_mins = 0
  show_secs = 0

  ngOnInit() {
    const countDownDate = new Date("Dec 10, 2023 07:30:00").getTime();

    const x = setInterval(() => {
      const now = new Date().getTime();

      const distance = countDownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      this.show_days = days
      this.show_hours = hours
      this.show_secs = seconds
      this.show_mins = minutes
      

      if (distance < 0) {
        clearInterval(x);
        this.countdownText = "EXPIRED";
      }
    }, 1000);
  }
}
