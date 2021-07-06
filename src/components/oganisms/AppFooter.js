import React from 'react'
import { CFooter } from '@coreui/react'

const AppFooter = () => {
  return (
    <CFooter>
      <div>
        <a href="https://meete.io" target="_blank" rel="noopener noreferrer">
          Meete.co
        </a>
        <span className="ms-1">&copy; 2021 Meete loyalty.</span>
      </div>
      <div className="ms-auto">
        <span className="me-1">Powered by</span>
        <a href="https://meete.io/grow" target="_blank" rel="noopener noreferrer">
          Meete team
        </a>
      </div>
    </CFooter>
  )
}

export default React.memo(AppFooter)
