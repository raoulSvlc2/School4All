// ./main.ts
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import {AppRoutingModule} from '../src/app/app-routing.module'

bootstrapApplication(AppComponent,
    {
        providers: [...AppRoutingModule]
    })
.catch(e => console.error(e));