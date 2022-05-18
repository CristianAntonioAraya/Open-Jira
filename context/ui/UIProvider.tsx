import { FC, ReactNode, useReducer } from 'react'
import { UIContext, uiReducer } from './';

export interface UIState{
    sidemenuOpen: boolean;
    isAddNew: boolean
}

const UI_INITIAL_STATE: UIState = { 
    sidemenuOpen: false,
    isAddNew: false
}

type Props = { 
    children: ReactNode
}

export const UIProvider: FC<Props> = ( { children }) => {

    const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE)

    const openSideMenu = () => {
        dispatch({ type: '[UI] Open Sidebar' });
    }

    const closeSideMenu = () => {
        dispatch({ type: '[UI] Close Sidebar' });
    }

    const closeAddNew = () => {
        dispatch({ type: '[UI] Close Add New Modal' });
    }

    const openAddNew = () => {
        dispatch({ type: '[UI] Open Add New Modal' });
    }


    return (
        <UIContext.Provider value={ { ...state, openSideMenu, closeSideMenu, closeAddNew, openAddNew  } }>

            { children }

        </UIContext.Provider>

    )
}
