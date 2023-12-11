import { Component } from '@angular/core';
import { ApiEventService } from '../api-event.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent {
  activeCategory: string = 'ShowAll';
  events: any = {
    ShowAll: [
      {
        id: 1,
        name: 'Bridge Target',
        description: 'Build a bridge with the given materials and specifications',
        img: "https://frolic.aswdc.in/img/events/Build-O-Brick.jpg"
      },
      {
        id: 2,
        name: 'Dare To Code',
        description: "Solve the given problem statement using your coding skills",
        img: "https://frolic.aswdc.in/img/events/Dare%20To%20Code.jpg"
      },
      {
        id: 3,
        name: 'Electrify Your Ideas',
        description: "Present your ideas on the given topic",
        img: "https://frolic.aswdc.in/img/events/Electrify%20Your%20Ideas.jpg"
      },
      {
        id: 4,
        name: 'CAD Master',
        description: "Design the given model using CAD software",
        img: "https://frolic.aswdc.in/img/events/CAD%20Master.jpg"
      }
    ],
    Civil: [
      {
        id: 1,
        name: 'Bridge Target',
        description: 'Build a bridge with the given materials and specifications',
        img: "https://frolic.aswdc.in/img/events/Build-O-Brick.jpg"
      }
    ],
    Computer: [
      {
        id: 2,
        name: 'Dare To Code',
        description: "Solve the given problem statement using your coding skills",
        img: "https://frolic.aswdc.in/img/events/Dare%20To%20Code.jpg"
      }
    ],
    Electrical: [
      {
        id: 3,
        name: 'Electrify Your Ideas',
        description: "Present your ideas on the given topic",
        img: "https://frolic.aswdc.in/img/events/Electrify%20Your%20Ideas.jpg"
      }
    ],
    Mechanical: [
      {
        id: 4,
        name: 'CAD Master',
        description: "Design the given model using CAD software",
        img: "https://frolic.aswdc.in/img/events/CAD%20Master.jpg"
      }
    ],
  };

  constructor(private _api: ApiEventService) { }
  
  filterEvents(category: string) {
    this.activeCategory = category;
  }
}

// import { Component, OnInit } from '@angular/core';
// import { ApiEventService } from '../api-event.service';

// @Component({
//   selector: 'app-events',
//   templateUrl: './events.component.html',
//   styleUrls: ['./events.component.css']
// })
// export class EventsComponent implements OnInit {
//   activeCategory: string = 'ShowAll';
//   events: any = {
//     ShowAll: [],
//     Civil: [],
//     Computer: [],
//     Electrical: [],
//     Mechanical: [],
//   };

//   constructor(private _api: ApiEventService) { }

//   ngOnInit() {
//     this.loadEvents();
//   }

//   loadEvents() {
//     this._api.getAllEvents().subscribe(
//       (data: any) => {
//         console.log('API Response:', data);
//         if (data && typeof data === 'object') {
//           this.events = data[0];
//         } else {
//           console.error('Invalid response structure:', data);
//         }
//       },
//       (error) => {
//         console.error('Error fetching events:', error);
//       }
//     );
//   }

//   filterEvents(category: string) {
//     this.activeCategory = category;
//   }
// }
