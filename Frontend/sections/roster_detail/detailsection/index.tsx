import React from 'react'
import {
  DetailContent,
  DetailForm,
  DetailInput,
  DetailLabel,
  DetailWrapper,
  MemberLabel,
  MemeberWrapper,
  DeleteButton,
  SaveButton,
  DetailArea,
  MemberState,
} from './index.style'
const data = [
  {
    name: 'nameasddddddddddddddddddddddddddddddddddddddddddddd',
    rate: 0,
  },
  {
    name: 'name',
    rate: 0,
  },
  {
    name: 'name',
    rate: 0,
  },
  {
    name: 'name',
    rate: 0,
  },
  {
    name: 'name',
    rate: 0,
  },
  {
    name: 'name',
    rate: 0,
  },
  {
    name: 'name',
    rate: 0,
  },

  {
    name: 'name',
    rate: 0,
  },
  {
    name: 'name',
    rate: 0,
  },
]

const MemberCard: React.FC<{ item: any; index: number }> = ({
  item,
  index,
}) => {
  return (
    <MemeberWrapper>
      <MemberLabel>{index}</MemberLabel>
      <MemberLabel>{item.name}</MemberLabel>
      <div></div>
      <MemberLabel>{item.rate}</MemberLabel>
      <DeleteButton>{'Delete'}</DeleteButton>
    </MemeberWrapper>
  )
}

const DetailSection: React.FC<{}> = () => {
  return (
    <DetailWrapper>
      <DetailForm>
        <DetailLabel>{'Title : '}</DetailLabel>
        <DetailInput></DetailInput>
      </DetailForm>
      <DetailForm>
        <DetailLabel>{'Description : '}</DetailLabel>
        <DetailArea></DetailArea>
      </DetailForm>
      <br />
      <DetailForm>
        <DetailLabel>{'Members : '}</DetailLabel>
        <DetailContent>
          {data.map((item: any, index: number) => {
            return (
              <MemberCard
                key={index}
                item={item}
                index={index + 1}
              ></MemberCard>
            )
          })}
        </DetailContent>
      </DetailForm>
      <DetailForm>
        <SaveButton>{'Save'}</SaveButton>
      </DetailForm>
    </DetailWrapper>
  )
}

export default DetailSection
