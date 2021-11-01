import React from 'react'
import { PanelWrapper, PanelContent, PanelLabel } from './index.style'
const Panel: React.FC<{}> = () => {
  return (
    <PanelWrapper>
      <PanelContent>
        <PanelLabel>{'Welcome.'}</PanelLabel>
      </PanelContent>
    </PanelWrapper>
  )
}
export default Panel
