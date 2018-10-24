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
import { DragAndDropModule } from 'angular-draggable-droppable';

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
    DragAndDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
