import React from 'react'
import Header from './components/Header/Header'
import Dashboard from './components/Dashboard/Dashboard'
import Sidebar from './components/Sidebar/Sidebar'

function App() {
  return (
    <div>
      {/* <Header /> */}
      <Dashboard />
      {/* <Sidebar /> */}
    </div>
  )

  // const [backendData, setBackendData] = useState([])
  
  // useEffect(() => {
  //   fetch("/api").then(
  //     response => response.json()
  //   ).then(
  //     data => {
  //       setBackendData(data)
  //     }
  //   )
  // }, [])

  // return (
  //   <div>
  //       {(typeof backendData.users === 'undefined') ? (
  //         <p>Loading...</p>
  //       ) : (
  //         backendData.users.map((user, i) => (
  //           <p key={i}>{user}</p>
  //         ))
  //       )}
  //   </div>
  // )
}

export default App
