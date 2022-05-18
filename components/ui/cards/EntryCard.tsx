import { DragEvent, FC } from 'react';
import { Entry } from '../../../interfaces';
import styles from '../../../styles/components/singleCard.module.scss';

interface Props {
  entry: Entry
}

export const EntryCard: FC<Props> = ( { entry } ) => {
  
  const handleOnDragStart = ( event:DragEvent ) => {
    event.dataTransfer.setData('id', entry._id);
    console.log(event)
  }

  const handleOnDragEnd = ( ) => {

  }

  return (
    <div className={ styles.container } draggable='true' onDragStart={ handleOnDragStart } onDragEnd={ handleOnDragEnd }> 
       <p> { entry.description }</p> 
    </div>
  )
}
