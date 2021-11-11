import React, { useState } from 'react'
import { toast } from 'react-toastify'
import { apiClientwithToken } from '../../../utils/apiclient'
import { isEmpty } from '../../../utils/isEmpty'
import {
  MemberSectionWrapper,
  StyledTable,
  ModalContent,
  ModalValue,
  CustomModal,
  ModalLabel,
  HeaderLabel,
  SaveButton,
  CancelButton,
} from './index.styled'

const MemberSection: React.FC<{ data: any; onRefresh: Function }> = ({
  data,
  onRefresh,
}) => {
  const [open, setOpen] = useState<boolean>(false)
  const [Item, setItem] = useState<any>(null)

  const onDisable = (id: number, userid: number) => {
    apiClientwithToken(localStorage.getItem('tennis-admin-token'))
      .put(`/members/${id}/${userid}`)
      .then((res) => {
        if (res.data.success) {
          onRefresh()
          toast.info(res.data.message)
        }
      })
      .catch((err) => {
        if (err.response.status == 404) {
          toast.error('Server Disconected.')
        } else {
          toast.error(err.response.data.message)
        }
      })
  }
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
              <td>STATE</td>
            </tr>
          </thead>
          <tbody>
            {data.map((item: any, index: number) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td
                    className="name"
                    onClick={() => {
                      setItem(item)
                      setOpen(true)
                    }}
                  >
                    {item.firstname + ' ' + item.lastname}
                  </td>
                  <td>{item.gender}</td>
                  <td>{item.phone}</td>
                  <td>{item.skill}</td>
                  <td>
                    {item.isDisable === 1 ? (
                      <SaveButton
                        onClick={() =>
                          onDisable(item.isDisable == 1 ? 0 : 1, item.id)
                        }
                      >
                        {'Inabled'}
                      </SaveButton>
                    ) : (
                      <CancelButton
                        onClick={() =>
                          onDisable(item.isDisable == 1 ? 0 : 1, item.id)
                        }
                      >
                        {'Disabled'}
                      </CancelButton>
                    )}
                  </td>
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
                <p>{Item.firstname || '-'}</p>
                <p>{Item.lastname || '-'}</p>
                <p>{Item.email || '-'}</p>
                <p>{Item.gender || '-'}</p>
                <p>{Item.skill || '-'}</p>
                <p>{Item.club || '-'}</p>
                <p>{Item.zipcode || '-'}</p>
                <p>{Item.phone || '-'}</p>
              </ModalValue>
            </ModalContent>
          </>
        )}{' '}
      </CustomModal>
    </MemberSectionWrapper>
  )
}

export default MemberSection
