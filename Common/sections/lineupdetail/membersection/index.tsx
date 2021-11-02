import React from 'react'
import { MemberSectionWrapper, StyledTable, TableContent } from './index.style'

const MemberSection: React.FC<{
  allmembers: any
}> = ({ allmembers }) => {
  return (
    <MemberSectionWrapper>
      <TableContent>
        <StyledTable>
          <thead>
            <tr>
              <td>No</td>
              <td>Name</td>
              <td>Email</td>
              <td>Phone</td>
              <td>Level</td>
            </tr>
          </thead>
          <tbody>
            {allmembers.map((item: any, index: number) => {
              return (
                <tr key={item.id}>
                  <td>{index + 1}</td>
                  <td>{item.firstname + ' ' + item.lastname}</td>
                  <td>{item.email}</td>
                  <td>{item.phone || '-'}</td>
                  <td>{item.skill}</td>
                </tr>
              )
            })}
          </tbody>
        </StyledTable>
      </TableContent>
    </MemberSectionWrapper>
  )
}

export default MemberSection
