import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ClientComponent } from './client/client.component';
import { ServerComponent } from './server/server.component';
import { UserListComponent } from './user-list/user-list.component';
import { EntityCreatorComponent } from './modals/entity-creator/entity-creator.component';
import { UserManagerComponent } from './modals/user-manager/user-manager.component';
import { ColorPickerModule } from 'ngx-color-picker';
import { DragAndDropModule } from 'angular-draggable-droppable';
import { TileCreatorComponent } from './modals/tile-creator/tile-creator.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientComponent,
    ServerComponent,
    UserListComponent,
    EntityCreatorComponent,
    TileCreatorComponent,
    UserManagerComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    ColorPickerModule,
    DragAndDropModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
