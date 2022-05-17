import { FC, ReactNode, useReducer } from "react";

import { v4 as uuidv4 } from 'uuid';

import { Entry } from "../../interfaces";
import { EntriesContext } from "./EntriesContext";
import { entriesReducer } from "./entriesReducer";


export interface EntriesState{
    entries: Entry[]
}

const ENTRIES_INITIAL_STATE:EntriesState = {
    entries: [ 
        {
            _id: uuidv4(),
            description: 'Pending - Est laboris magna dolor et incididunt ad adipisicing culpa deserunt ipsum.',
            status: 'pending',
            createdAt: Date.now()
        },
        {
            _id: uuidv4(),
            description: 'In-Progress - Aliqua nostrud proident proident adipisicing sint.',
            status: 'in-progress',
            createdAt: Date.now() - 1000000
        },
        {
            _id: uuidv4(),
            description: 'finished - Enim nulla dolore qui qui reprehenderit do amet.',
            status: 'finished',
            createdAt: Date.now() -100000
        },
        {
            _id: uuidv4(),
            description: 'Pending - Labore magna pariatur officia ea exercitation proident officia.',
            status: 'pending',
            createdAt: Date.now() -100000
        },
        {
            _id: uuidv4(),
            description: 'Finished - Consequat minim Lorem ex ad irure reprehenderit occaecat esse dolor do ullamco.',
            status: 'finished',
            createdAt: Date.now() -100000
        },
    ]
}


type Props = {
    children: ReactNode
}

export const EntriesProvider: FC<Props> = ( { children }) => {

    const [state, dispatch] = useReducer(entriesReducer, ENTRIES_INITIAL_STATE)

    return (
        <EntriesContext.Provider value={ { ...state } }>
            { children }
        </EntriesContext.Provider>
    )

}