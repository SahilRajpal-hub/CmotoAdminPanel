import React, { useEffect, useState } from 'react'
import firebase from './../firebase/firebase.utils'

const Cars = () => {
  const [societies, setSocieties] = useState([])
  const [areas, setAreas] = useState([])

  useEffect(() => {
    firebase
      .database()
      .ref('cars')
      .on(
        'value',
        (snapshot) => {
          const a = []
          snapshot.forEach((element) => {
            if (element.key !== 'clusters') {
              // element.key -> area name
              // element.val() -> societies Object
              console.log(element.key + ' : ' + element.val())
              a.push(element.key)
            }
          })
          setAreas(a)
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
        {areas.map((area) => (
          <h1>{area}</h1>
        ))}
      </div>
    </div>
  )
}

export default Cars
