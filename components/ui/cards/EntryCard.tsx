import { FC } from 'react';
import { Entry } from '../../../interfaces';
import styles from '../../../styles/components/singleCard.module.scss';

interface Props {
  entry: Entry
}

export const EntryCard: FC<Props> = ( { entry } ) => {
  return (
    <div className={ styles.container }> 
       <p> { entry.description }</p> 
    </div>
  )
}
