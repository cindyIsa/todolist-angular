import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatInputModule } from '@angular/material/input'
import { MatBadgeModule } from '@angular/material/badge'
import { MatDividerModule } from '@angular/material/divider'
import { MatIconModule } from '@angular/material/icon'
import { MatButtonModule } from '@angular/material/button'
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeadInputComponent } from './components/head-input/head-input.component';
import { UndoneTaskComponent } from './components/undone-task/undone-task.component';
import { DoneTaskComponent } from './components/done-task/done-task.component';
import { StoreModule } from '@ngrx/store';
import { todoReduce } from './store/reducers/todo.reducer';
import { FormsModule } from '@angular/forms';
import { ItemStyleComponent } from './components/shared/item-style/item-style.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadInputComponent,
    UndoneTaskComponent,
    DoneTaskComponent,
    ItemStyleComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatBadgeModule,
    MatIconModule,
    MatDividerModule,
    MatButtonModule,
    FormsModule,
    StoreModule.forRoot({
      todo:todoReduce,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
