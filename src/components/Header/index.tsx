import React, { memo, useCallback } from 'react'
import { useLoader } from '../../contexts'

const Component = () => {
  const { openLoading, closeLoading } = useLoader()

  const openLoader = useCallback(
    () => {
      openLoading();
      setTimeout(() => closeLoading(), 2000)
    },
    [closeLoading, openLoading],
  )

  return (
    <>
      <h1>Header</h1>
      <button onClick={openLoader}>Abrir loader do header</button>
    </>
  )
}

export const Header = memo(Component);