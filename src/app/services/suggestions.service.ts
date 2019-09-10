import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Suggestion } from '../models/suggestion.model';
import { catchError } from 'rxjs/operators';

@Injectable()
export class SuggestionsService {
  readonly url = 'http://localhost:5000';

  constructor(private http: HttpClient) {}

  getSuggestions(): Observable<Suggestion[]> {
    return this.http
      .get<Suggestion[]>(`${this.url}/suggestions`)
      .pipe(catchError(error => of([])));
  }

  addSuggestion(suggestion: Suggestion) {
    return this.http.post(`${this.url}/suggestions`, suggestion);
  }
}
