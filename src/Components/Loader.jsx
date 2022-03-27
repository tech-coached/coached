import React from 'react'
import ReactLoading from 'react-loading'

const Loader = ({ type, color }) => (
  <div
    style={{
      width: '100vw',
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <ReactLoading type='bars' color='#7316FB' height={'10%'} width={'10%'} />
  </div>
)

export default Loader
