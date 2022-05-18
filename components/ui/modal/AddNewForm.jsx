import { useContext, useState } from 'react'
import styles from '../../../styles/components/addNew.module.scss'
import { UIContext } from '../../../context/ui';
import Save from '../../../public/icons/Save.svg';
import Trash from '../../../public/icons/Trash.svg';
import Close from '../../../public/icons/close.svg';
import { EntriesContext } from '../../../context/entries';

export const AddNewForm = () => {

  const { isAddNew, closeAddNew } = useContext(UIContext);
  const { addNewEntry } = useContext(EntriesContext);
  const [input, setInput] = useState('');
  const [error, setError] = useState(false);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if( input === '' ){
      setError(true);
      return;
    }
    else{
      setError(false)
      addNewEntry( input )
      setInput('')
      closeAddNew()
    }
    setError(false)
  }

  const handleCloseModal = () => {
    closeAddNew()
    setError(false)
  }
  const handleResetForm = () => {
    setInput('')
  }

  return (
    <div className={ `${ isAddNew ? styles.container : styles.hidden }`}>
      <form className={ styles.content} onSubmit={ handleOnSubmit }>
        <h3 className={ styles.title }>Adding new entry</h3>
        <Close className={ styles.close_icon } onClick={ handleCloseModal }/>
        <div className={ styles.input_container}>
          <label className={ `${error ? styles.red_color : styles.white_color} ${styles.label}` }>New Entry</label>
          <input className={ `${error ? styles.red_border : styles.white_border} ${styles.input}` } placeholder="New Entry" value={input} onChange={ (e) => setInput(e.target.value)} />
        </div>

        <div className={ styles.btn_container}> 
          <button className={ `${styles.btn_cancel} ${ styles.btn }`} type="reset" onClick={ handleResetForm }>
            <Trash className={ styles.trash_icon}/>
            Clear
          </button>

          <button className={ `${styles.btn_save} ${ styles.btn }`} type="submit">
            <Save className={ styles.save_icon}/>
            Save
          </button>
        </div>

      </form>
    </div>
  )
}
