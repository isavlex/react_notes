import {useEffect} from 'react'
import {useContext} from 'react/cjs/react.development'
import {Form} from '../components/Form'
import {Loader} from '../components/Loader'
import {Notes} from '../components/Notes'
import {FirebaseContext} from '../context/firebase/firebaseContext'

export const Home = () => {
  const {loading, notes, fetchNotes} = useContext(FirebaseContext)
  useEffect(() => {
    fetchNotes()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  
  return (
    <>
      <Form />
      <hr />
      {loading ? <Loader /> : <Notes notes={notes} />}
    </>
  )
}
