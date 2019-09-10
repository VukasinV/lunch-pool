import { Component, OnInit } from '@angular/core';
import { SuggestionsService } from '../services/suggestions.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-suggestion',
  templateUrl: './add-suggestion.component.html',
  styleUrls: ['./add-suggestion.component.css']
})
export class AddSuggestionComponent implements OnInit {
  addSuggestion: FormGroup;

  constructor(
    private suggestionsService: SuggestionsService,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.addSuggestion = this.fb.group({
      name: new FormControl(''),
      description: new FormControl('')
    });
  }
}
