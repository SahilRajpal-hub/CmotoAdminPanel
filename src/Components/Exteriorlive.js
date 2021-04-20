import React, { useEffect, useState } from 'react'
import firebase from './../firebase/firebase.utils'
import Loader from './Loader'
import Exsection from './Exsection/exsection.jsx'

const Exteriorlive = () => {
  const [societies, setSocieties] = useState([])
  const [areas, setAreas] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    firebase
      .database()
      .ref('Employees')
      .on(
        'value',
        (snapshot) => {
          const a = []
          const s = []
          snapshot.forEach((element) => {
            if (element.key !== 'clusters') {
              // element.key -> area name
              // element.val() -> societies Object
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
  },[])

  return (
    <div className='main-content' id='panel'>
      <div className='container-fluid' style={{ paddingTop: 25 }}>
        {loading ? <Loader /> : areas.map((area,i) => 
          <Exsection area={area} societies={societies[i]}/>
        )}
      </div>
    </div>
  )
}

export default Exteriorlive

