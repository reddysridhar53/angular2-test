import { Component, OnInit } from '@angular/core';
import { ExpertsService } from './experts.service';
import { Observable } from 'rxjs/Observable';
import { Expert } from './expert.model';

@Component({

  selector: 'experts-layout',
  template: require('./experts.html'),
  styles:  [require('./experts.css')]

})

export class ExpertsComponent implements OnInit{ 

	constructor(

    private expertsService: ExpertsService
  ){}

  experts: Expert[];

	loadExperts(){

		this.expertsService.getExperts("https://yourdost.com/zion/v1/counselor")
							.subscribe(

                 	experts => {
                 		var j:number = 0;
                 		var expertsArr:any = [];
                 		for(var i =0; i< experts.length;i++){

                 			if(experts["id"] !=101 && j<3){

                 				j++;
                 				expertsArr.push(experts[i])
                 			}
                 		}
                 		this.experts = expertsArr;
                 	},
                  err => {

                      console.log(err);
                  }
              );
    }

    ngOnInit(){

        this.loadExperts();
    }
}
