import React from 'react'
import { MemberSectionWrapper, MemberName, MemvberRate } from './index.styled'

type memberprops = {
  name: string
  rate: number
}

const MemberSection: React.FC<{ data: memberprops; id: number }> = ({
  data,
  id,
}) => {
  return (
    <MemberSectionWrapper>
      <MemberName>{id + 1}</MemberName>
      <MemberName>{data.name}</MemberName>
      <MemvberRate>{data.rate}</MemvberRate>
    </MemberSectionWrapper>
  )
}

export default MemberSection
