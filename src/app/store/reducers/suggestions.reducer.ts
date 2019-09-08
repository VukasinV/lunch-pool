import * as fromSuggestions from '../actions/suggestions.action';
import { Suggestion } from 'src/app/models/suggestion.model';

export interface SuggestionState {
  data: Suggestion[];
  loaded: boolean;
  loading: boolean;
}

export const initialState: SuggestionState = {
  data: [],
  loaded: false,
  loading: false
};

export function reducer(
  state = initialState,
  action: fromSuggestions.SuggestionsAction
): SuggestionState {
  switch (action.type) {
    case fromSuggestions.LOAD_SUGGESTIONS: {
      return {
        ...state,
        loading: true
      };
    }
    case fromSuggestions.LOAD_SUGGESTIONS_SUCCESS: {
      return {
        ...state,
        loading: false,
        loaded: true
      };
    }
    case fromSuggestions.LOAD_SUGGESTIONS_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: false
      };
    }
  }
  return state;
}
