import { Component, OnInit, Input } from '@angular/core';
import { Suggestion } from '../models/suggestion.model';

@Component({
  selector: 'app-suggestion',
  templateUrl: './suggestion.component.html',
  styleUrls: ['./suggestion.component.css']
})
export class SuggestionComponent implements OnInit {
  @Input() suggestion: Suggestion;

  constructor() {}

  ngOnInit() {}
}
