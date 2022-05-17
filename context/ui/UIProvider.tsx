import { FC, ReactNode, useReducer } from 'react'
import { UIContext, uiReducer } from './';

export interface UIState{
    sidemenuOpen: boolean;
}

const UI_INITIAL_STATE: UIState = { 
    sidemenuOpen: false
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


    return (
        <UIContext.Provider value={ { ...state, openSideMenu, closeSideMenu } }>

            { children }

        </UIContext.Provider>

    )
}
