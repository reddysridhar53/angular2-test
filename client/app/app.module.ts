import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HomeComponent } from './home/home.component';
import { BannerComponent } from './home/banner.component';
import { ExpertsComponent} from './home/experts.component';
import { HttpModule } from '@angular/http';
import { ExpertsService } from './home/experts.service';
import { TalkitoutComponent } from './talkitout/talkitout.component';
import { Routes, RouterModule} from '@angular/router';

const appRoutes: Routes = [
    
    { path: 'talkItOut', component: TalkitoutComponent }
];

@NgModule({

    imports: [ 

        BrowserModule,
        HttpModule,
        RouterModule.forRoot(appRoutes)
    ],

    declarations: [ 

        HomeComponent,
        BannerComponent,
        ExpertsComponent,
        TalkitoutComponent
    ],

    providers: [

        ExpertsService
    ],

    bootstrap: [ 

        HomeComponent
    ]
  
})
export class AppModule { 


}