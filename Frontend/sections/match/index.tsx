import React, { useState } from 'react'
import {
  MatchContent,
  MatchHeader,
  MatchWrapper,
  MatchLabel,
  SaveButton,
  MatchCards,
} from './index.style'
import { matchprops } from '../../components/MatchTable/index.type'
import MatchForm from './matchformsection'
import MatchCard from './matchcard'
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
]

const Match: React.FC<{}> = () => {
  const [open, setOpen] = useState<boolean>(false)
  const [isnew, setIsnew] = useState<boolean>(true)

  const onDisplay = (flag: boolean) => {
    setOpen(flag)
  }
  const onCancel = () => {
    setOpen(false)
  }

  return (
    <MatchWrapper>
      <MatchContent>
        <MatchHeader>
          <MatchLabel>Matches.</MatchLabel>
          <SaveButton onClick={() => onDisplay(true)}>{'New +'}</SaveButton>
        </MatchHeader>
        {open ? <MatchForm onDisplay={onDisplay} /> : null}
        <MatchCards>
          {data.map((item: any, index: number) => {
            return (
              <MatchCard
                data={item}
                key={index}
                index={index + 1}
                onDisplay={onDisplay}
              />
            )
          })}
        </MatchCards>
      </MatchContent>
    </MatchWrapper>
  )
}
export default Match
