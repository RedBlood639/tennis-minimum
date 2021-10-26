import React from 'react'
import { MatchWrapper } from './index.style'
import MatchTable from '../MatchTable'
import { matchprops } from '../MatchTable/index.type'
const data: matchprops[] = [
  {
    Date: 'Afghanistan',
    Opponent: 'Dunwoodt TC',
    Result: '4-2',
    Site: 'Away',
  },
  {
    Date: 'Afghanistan',
    Opponent: 'Dunwoodt TC',
    Result: '4-2',
    Site: 'Away',
  },

  {
    Date: 'Afghanistan',
    Opponent: 'Dunwoodt TC',
    Result: '4-2',
    Site: 'Away',
  },
  {
    Date: 'Afghanistan',
    Opponent: 'Dunwoodt TC',
    Result: '4-2',
    Site: 'Away',
  },
  {
    Date: 'Afghanistan',
    Opponent: 'Dunwoodt TC',
    Result: '4-2',
    Site: 'Away',
  },
  {
    Date: 'Afghanistan',
    Opponent: 'Dunwoodt TC',
    Result: '4-2',
    Site: 'Away',
  },
  {
    Date: 'Afghanistan',
    Opponent: 'Dunwoodt TC',
    Result: '4-2',
    Site: 'Away',
  },
  {
    Date: 'Afghanistan',
    Opponent: 'Dunwoodt TC',
    Result: '4-2',
    Site: 'Away',
  },
  {
    Date: 'Afghanistan',
    Opponent: 'Dunwoodt TC',
    Result: '4-2',
    Site: 'Away',
  },
  {
    Date: 'Afghanistan',
    Opponent: 'Dunwoodt TC',
    Result: '4-2',
    Site: 'Away',
  },
]
const Match: React.FC<{}> = () => {
  return (
    <MatchWrapper>
      <MatchTable data={data} />
    </MatchWrapper>
  )
}

export default Match
