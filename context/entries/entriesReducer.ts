import { Entry } from "../../interfaces";
import { EntriesState } from "./EntriesProvider";


type EntriesActionType = 
| { type: '[Entry] Add entry', payload: Entry }


export const entriesReducer = ( state:EntriesState, action :EntriesActionType ):EntriesState => {
    switch (action.type) {
        case '[Entry] Add entry':
            return {
                ...state,
                entries: [ ...state.entries, action.payload ]
            }
    
        default:
            return state;
    }
} 