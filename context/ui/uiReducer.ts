import { UIState } from "./";


type UIActionType = 
| { type: '[UI] Open Sidebar' } 
| { type: '[UI] Close Sidebar'}
| { type: '[UI] Open Add New Modal'}
| { type: '[UI] Close Add New Modal'}

export const uiReducer = ( state: UIState, action: UIActionType ): UIState => {

    switch (action.type) {
        case  '[UI] Open Sidebar':
            return { 
                ...state,
                sidemenuOpen: true
            }
        case '[UI] Close Sidebar':
            return {
                ...state,
                sidemenuOpen: false
            }    
        case '[UI] Open Add New Modal':
        return {
            ...state,
            isAddNew: true
        }   
        case '[UI] Close Add New Modal':
        return {
            ...state,
            isAddNew: false
        }   
    
        default:
            return state
    }
}