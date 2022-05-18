import { createContext } from 'react';

interface ContextProps {
    sidemenuOpen: boolean;

    isAddNew: boolean;

    openSideMenu: () => void;
    closeSideMenu: () => void;
    closeAddNew: () => void;
    openAddNew: () => void;
    
}


export const UIContext = createContext({} as ContextProps );
 