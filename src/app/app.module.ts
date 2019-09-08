import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { TextFieldModule } from '@angular/cdk/text-field';
import { MatButtonModule } from '@angular/material/button';
import { StoreModule } from '@ngrx/store';
import * as fromSuggestions from './store/reducers/suggestions.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { PollComponent } from './poll/poll.component';
import { SuggestionComponent } from './suggestion/suggestion.component';
import { ChatComponent } from './chat/chat.component';
import { AddSuggestionComponent } from './add-suggestion/add-suggestion.component';

@NgModule({
  declarations: [
    AppComponent,
    PollComponent,
    SuggestionComponent,
    ChatComponent,
    AddSuggestionComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    TextFieldModule,
    MatButtonModule,
    StoreModule.forRoot({ Suggestions: fromSuggestions.reducer }),
    StoreDevtoolsModule.instrument()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
