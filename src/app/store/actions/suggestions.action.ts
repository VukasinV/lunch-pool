import { Action } from "@ngrx/store";
import { Suggestion } from "src/app/models/suggestion.model";

// load suggestions
export const LOAD_SUGGESTIONS = "[Suggestions] Load Suggestions";
export const LOAD_SUGGESTIONS_FAIL = "[Suggestions] Load Suggestions Fail";
export const LOAD_SUGGESTIONS_SUCCESS =
  "[Suggestions] Load Suggestions Success";

export class LoadSuggestions {
  readonly type = LOAD_SUGGESTIONS;
}

export class LoadSuggestionsFail {
  readonly type = LOAD_SUGGESTIONS_FAIL;
  constructor(public payload: any) {}
}

export class LoadSuggestionsSuccess {
  readonly type = LOAD_SUGGESTIONS;
  constructor(public payload: Suggestion[]) {}
}
