import React, { useEffect, useState } from 'react'
import { PanelWrapper, PanelContent, PanelLabel } from './index.style'
const Panel: React.FC<{}> = () => {
  const [time, setTime] = useState<string>('')
  useEffect(() => {
    setInterval(() => {
      setTime(new Date().toLocaleTimeString())
    }, 1000)
  }, [])

  return (
    <PanelWrapper>
      <PanelContent>
        <PanelLabel>{time}</PanelLabel>
      </PanelContent>
    </PanelWrapper>
  )
}
export default Panel
