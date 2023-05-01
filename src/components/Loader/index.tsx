import React, { memo } from 'react'

const Component = () => {
  return (
    <div style={{
      position: 'absolute',
      width: "100vw",
      height: "100vh",
      display: "flex",
      alignItems: 'center',
      justifyContent: 'center',
      background: "#00000056"
    }}>
      <p>CARREGANDO</p>
    </div>
  )
}

export const Loader = memo(Component);