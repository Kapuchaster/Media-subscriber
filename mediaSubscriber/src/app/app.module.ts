import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ClientComponent } from './client/client.component';
import { ServerComponent } from './server/server.component';
import { UserListComponent } from './user-list/user-list.component';
import { ActivityCreatorComponent } from './modals/activity-creator/activity-creator.component';
import { ColorPickerModule } from 'ngx-color-picker';
import { DragulaModule } from 'ng2-dragula';

@NgModule({
  declarations: [
    AppComponent,
    ClientComponent,
    ServerComponent,
    UserListComponent,
    ActivityCreatorComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    ColorPickerModule,
    DragulaModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
