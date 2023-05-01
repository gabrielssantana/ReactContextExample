import React, { memo, useCallback } from 'react'
import { useLoader } from '../../contexts';

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
      <p>Content</p>
      <button onClick={openLoader}>Abrir loader do Content</button>
    </>
  )
}

export const Content = memo(Component);