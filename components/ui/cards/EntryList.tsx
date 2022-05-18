import { DragEvent, FC, useContext, useMemo } from 'react'
import { EntriesContext } from '../../../context/entries';
import { EntryStatus } from '../../../interfaces';

import styles from '../../../styles/components/cardList.module.scss';
import { EntryCard } from './EntryCard';

interface Props {
  title: string,
  status: EntryStatus,
}

export const EntryList: FC<Props> = ( { title, status}) => {

  const { entries } = useContext( EntriesContext );

  const entriesByStatus = useMemo(() => entries.filter( entry => entry.status == status ) , [ entries ])
  
  const allowDrop = (event:DragEvent) => {
    event.preventDefault();
  }

  const handleOnDrop = (event:DragEvent) => {
    const id = event.dataTransfer.getData('id')
    console.log(id)
  }

  return (
    <div className={ styles.container } onDrop={ handleOnDrop } onDragOver={ allowDrop }>
        <div className={ styles.cards }>
          <h2 className={ styles.title}> { title } </h2>
            {
              entriesByStatus.map( entry => (
                <EntryCard key={entry._id} entry={entry}/>
              ))
            }
        </div>
    </div>
  )
}
