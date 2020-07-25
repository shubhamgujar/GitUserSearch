import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { JwPaginationModule } from 'jw-angular-pagination'

import { AppComponent } from './app.component';
import { UserServiceService} from './services/user-service.service'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, FormsModule, JwPaginationModule
  ],
  providers: [UserServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
