import React from 'react'
import Acard3 from '../../components/Admin/Acard3'
import Aheader from '../../components/Admin/Aheader'
import Afooter from '../../components/Admin/Afooter'

function Asales() {
  return (
    <div class="text-white d-flex flex-column min-vh-100">
        <main class="flex-grow-1">
        <Aheader/>
        <Acard3/>
            
        </main>
        <Afooter/>
    </div>
  )
}

export default Asales