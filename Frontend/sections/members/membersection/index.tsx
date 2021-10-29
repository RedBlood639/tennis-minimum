import React, { useState } from 'react'
import { isEmpty } from '../../../utils/isEmpty'
import {
  MemberSectionWrapper,
  StyledTable,
  ModalContent,
  ModalValue,
  CustomModal,
  ModalLabel,
  HeaderLabel,
} from './index.styled'

const MemberSection: React.FC<{ data: any }> = ({ data }) => {
  const [open, setOpen] = useState<boolean>(false)
  const [Item, setItem] = useState<any>(null)
  return (
    <MemberSectionWrapper>
      <div className="tableDiv">
        <StyledTable>
          <thead>
            <tr>
              <td>NO</td>
              <td>NAME</td>
              <td>GENDER</td>
              <td>PHONE</td>
              <td>LEVEL</td>
            </tr>
          </thead>
          <tbody>
            {data.map((item: any, index: number) => {
              return (
                <tr
                  key={index}
                  onClick={() => {
                    setItem(item)
                    setOpen(true)
                  }}
                >
                  <td>{index + 1}</td>
                  <td className="name">
                    {item.firstname + ' ' + item.lastname}
                  </td>
                  <td>{item.gender}</td>
                  <td>{item.phone}</td>
                  <td>{item.skill}</td>
                </tr>
              )
            })}
          </tbody>
        </StyledTable>
      </div>
      <CustomModal open={open} onClose={() => setOpen(false)}>
        {isEmpty(Item) ? (
          <></>
        ) : (
          <>
            <HeaderLabel>{Item.firstname + ' ' + Item.lastname}</HeaderLabel>
            <ModalContent>
              <ModalLabel>
                <p>Firstname : </p>
                <p>Lastname : </p>
                <p>Email : </p>
                <p>Gender : </p>
                <p>Skill : </p>
                <p>Club : </p>
                <p>Zipcode : </p>
                <p>Phone : </p>
              </ModalLabel>
              <ModalValue>
                <p>{Item.firstname}</p>
                <p>{Item.lastname}</p>
                <p>{Item.email}</p>
                <p>{Item.gender}</p>
                <p>{Item.skill}</p>
                <p>{Item.club}</p>
                <p>{Item.zipcode}</p>
                <p>{Item.phone}</p>
              </ModalValue>
            </ModalContent>
          </>
        )}{' '}
      </CustomModal>
    </MemberSectionWrapper>
  )
}

export default MemberSection
