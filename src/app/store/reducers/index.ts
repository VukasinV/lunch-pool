import { ActionReducerMap } from '@ngrx/store';
import * as fromSuggestions from './suggestions.reducer';

export interface SuggestionsState {
  suggestions: fromSuggestions.SuggestionState;
}

export const reducers: ActionReducerMap<SuggestionsState> = {
  suggestions: fromSuggestions.reducer
};
