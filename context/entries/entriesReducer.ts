import { EntriesState } from "./EntriesProvider";


type EntriesActionType = 
| { type: '[Entries] action' }


export const entriesReducer = ( state:EntriesState, action :EntriesActionType ):EntriesState => {
    switch (action.type) {
        // case :
            
        //     break;
    
        default:
            return state;
    }
} 