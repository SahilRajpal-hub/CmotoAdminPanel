import React, { useEffect, useState } from 'react'
import firebase from './../firebase/firebase.utils'
import Loader from './Loader'

const Cars = () => {
  const [societies, setSocieties] = useState([])
  const [areas, setAreas] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    firebase
      .database()
      .ref('cars')
      .on(
        'value',
        (snapshot) => {
          const a = []
          const s = []
          snapshot.forEach((element) => {
            if (element.key !== 'clusters') {
              // element.key -> area name
              // element.val() -> societies Object
              console.log(element.key + ' : ' + element.val())
              a.push(element.key)
              s.push(element.val())
            }
          })
          setAreas(a)
          setSocieties(s)
          setLoading(false)
        },
        (err) => {
          console.log(err)
        }
      )
  }, [])
  return (
    <div className='main-content' id='panel'>
      <div className='container-fluid'>
        <h1>Cars</h1>
        {loading ? <Loader /> : areas.map((area) => <h1>{area}</h1>)}
        {loading ? (
          <Loader />
        ) : (
          societies.map((society) => <h1>{Object.keys(society)[0]}</h1>)
        )}
      </div>
    </div>
  )
}

export default Cars
