import React from 'react'
import { StyledTable } from './index.style'
import { matchprops } from './index.type'

const MatchTable: React.FC<{ data: matchprops[] }> = ({ data }) => {
  console.log(data)
  return (
    <StyledTable>
      <thead>
        <tr>
          <td>Match</td>
          <td>Date</td>
          <td>Opponent</td>
          <td>Site</td>
          <td>Result</td>
        </tr>
      </thead>
      <tbody>
        {data.map((item: matchprops, index: number) => {
          return (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.Date}</td>
              <td>{item.Opponent}</td>
              <td>{item.Site}</td>
              <td>{item.Result}</td>
            </tr>
          )
        })}
      </tbody>
    </StyledTable>
  )
}
export default MatchTable
