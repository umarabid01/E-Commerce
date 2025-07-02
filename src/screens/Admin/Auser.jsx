
import React from 'react'
import Acard4 from '../../components/Admin/Acard4'
import Aheader from '../../components/Admin/Aheader'
import Afooter from '../../components/Admin/Afooter'

function Auser() {
  return (
    <div class="text-white d-flex flex-column min-vh-100">
        <main class="flex-grow-1">
        <Aheader/>
        <Acard4/>
            
        </main>
        <Afooter/>
    </div>
  )
}

export default Auser