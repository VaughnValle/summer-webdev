import React from 'react'
import Navbar from './components/Navbar.jsx'
import Sidebar from './components/Sidebar.jsx'
import Main from './components/Main.jsx'


const App = () => {
    return(
        <>
        <Navbar />
        <div className='flex mx-auto p-5 w-90'>
            <Sidebar />
            <Main />
        </div>
        </>
    )
}

export default App
