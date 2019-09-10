import { Component, OnInit } from '@angular/core';
import { Suggestion } from '../models/suggestion.model';
import { SuggestionsService } from '../services/suggestions.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-poll',
  templateUrl: './poll.component.html',
  styleUrls: ['./poll.component.css']
})
export class PollComponent implements OnInit {
  suggestions$: Observable<Suggestion[]>;

  constructor(private suggestionsService: SuggestionsService) {}

  ngOnInit() {
    this.suggestions$ = this.suggestionsService.getSuggestions();
  }
}
