import { style } from "@angular/animations";

import { Component, OnInit } from "@angular/core";

import { ActivatedRoute } from "@angular/router";
import { EventService } from "../shared/event.service";


 

@Component({

    selector:'EventsList',

    templateUrl:'./EventsList.component.html',

    styles:[`

      h1{color:black;}

    `]

})

 

export class  EventsListComponent implements OnInit{

  events:any;

  //Constructor Denpendency injecting

  constructor(private eventService:EventService, private route:ActivatedRoute){

  }



    //life cycle hook of a compoent

    //second life cycle hook

    // write all the initializataion code in this life cycle method

    ngOnInit(){

       // this.eventService.getEvents().subscribe(events => { this.events = events });

       this.events = this.route.snapshot.data['events']

    }



       

}