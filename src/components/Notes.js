import {useContext} from 'react'
import {TransitionGroup, CSSTransition} from 'react-transition-group'
import {AlertContext} from '../context/alert/alertContext'
import {FirebaseContext} from '../context/firebase/firebaseContext'

export const Notes = ({notes}) => {
  const {removeNote} = useContext(FirebaseContext)
  const {show} = useContext(AlertContext)

  const remNote = async (id) => {
    try {
      await removeNote(id)
      show('Заметка удалена', 'success')
    } catch (e) {
      console.log(e)
    }
  }
  return (
    <TransitionGroup component="ul" className="list-group">
      {notes.map((note) => (
        <CSSTransition key={note.id} classNames={'note'} timeout={800}>
          <li className="list-group-item note">
            <div>
              <strong>{note.title}</strong>
              <small>{new Date().toLocaleDateString()}</small>
            </div>
            <button
              type="button"
              className="btn btn-danger btn-sm"
              onClick={() => remNote(note.id)}
            >
              &times;
            </button>
          </li>
        </CSSTransition>
      ))}
    </TransitionGroup>
  )
}
