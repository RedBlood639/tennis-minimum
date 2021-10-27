import React from 'react'
import {
  MemberSectionWrapper,
  MemberName,
  MemberCheckBox,
} from './index.styled'

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
      <MemberCheckBox type="checkbox" />
      <MemberName>{id + 1}</MemberName>
      <MemberName>{data.name}</MemberName>
      <MemberName>{''}</MemberName>
      <MemberName>{data.rate}</MemberName>
    </MemberSectionWrapper>
  )
}

export default MemberSection
