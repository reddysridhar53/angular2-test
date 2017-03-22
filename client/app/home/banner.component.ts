import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({

  selector: 'banner-layout',
  template: require('./banner.html'),
  styles:  [require('./banner.scss')]
})

export class BannerComponent  { 

	constructor( private router:Router){}	

	btnClick = function () {

        this.router.navigateByUrl('/talkItOut');
	};
}
