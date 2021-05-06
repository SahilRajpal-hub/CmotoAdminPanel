import firebase from './../firebase/firebase.utils.js'
import React, { useEffect, useState } from 'react'

const TodaysCollectionSection = ({ workersSnapshot }) => {
  const carstyle = {
    textAlign: 'center',
    border: '1px solid #e9ecef',
    marginBottom: 0.75,
    padding: 7,
    fontSize: 14,
    color: 'black',
  }

  function getTodayDate() {
    var todayUs = new Date()
    var offset = '+5.5' // since database belongs to US
    var utc = todayUs.getTime() + todayUs.getTimezoneOffset() * 60000 // therefore converting time to IST
    var today = new Date(utc + 3600000 * offset)
    var dd = String(today.getDate()).padStart(2, '0')
    var mm = String(today.getMonth() + 1).padStart(2, '0') //January is 0!
    var yyyy = today.getFullYear()

    today = yyyy + '-' + mm + '-' + dd
    return today.toString()
  }

  useEffect(() => {
    workersSnapshot.forEach((workerSnapshot) => {
      console.log(workerSnapshot.val())
      console.log(workerSnapshot.val()['Name'])
      console.log(workerSnapshot.val()['Payment History'])
    })
  }, [])

  return (
    <div>
      <h1>Hey</h1>
      {workersSnapshot.forEach((workerSnapshot) => {
        return <h1>{workerSnapshot.val()['Name']}</h1>
      })}
    </div>
  )
}

// // <div class='card'>
//     //   <div class='card-body'>
//     //     <table>
//     //       <tbody>
//     <div>
//       {workersSnapshot.forEach((workerSnapshot) => {
//         // ;<td>
//         ;<h1
//           style={{
//             textAlign: 'center',
//             border: '1px solid #e9ecef',
//             marginBottom: 0.75,
//             padding: 14,
//             fontSize: 20,
//             fontWeight: 'bold',
//             color: 'black',
//           }}
//         >
//           {workerSnapshot.val()['Name']}
//         </h1>

//         // <div>
//         //   {workerSnapshot.val()['Payment History'][getTodayDate()]
//         //     ? workerSnapshot['Payment History'][getTodayDate()].forEach(
//         //         (el) => {
//         //           return <h5 style={{ ...carstyle }}>{el}</h5>
//         //         }
//         //       )
//         //     : null}
//         // </div>
//         // </td>
//       })}
//     </div>
//     //       </tbody>
//     //     </table>
//     //   </div>
//     // </div>
export default TodaysCollectionSection
