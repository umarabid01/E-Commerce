import React from 'react'
import Acard6 from '../../components/Admin/Acard6'
import Aheader from '../../components/Admin/Aheader'
import Afooter from '../../components/Admin/Afooter'

function Aorder() {
  return (
    <div class="text-white d-flex flex-column min-vh-100">
        <main class="flex-grow-1">
        <Aheader/>
        <Acard6/>
            
        </main>
        <Afooter/>
    </div>
  )
}

export default Aorder