import React from 'react'
import ImageSection from './imagesection'
import Card1 from '../../assests/image/slide1.png'
import Card2 from '../../assests/image/slide2.png'
import Card3 from '../../assests/image/slide3.png'
import { HomeWrapper, CardGroup } from './home.style'
import CardSection from '../home/cardsection'

import { CardProps } from './home.type'

const data = [
  {
    imageURL: Card1,
    description:
      "Create your own group with a few clicks and easily add players to your roster. You can have 'regular' members and 'sub' members. Your group plays by your rules. Select the frequency of play, scoring rules, format, number of courts/lines, etc. Players have access to your rules and guidelines, schedules, court assignments, and contact info for other members.",
    alt: 'slider1',
  },
  {
    imageURL: Card2,
    description:
      'Matches can be scheduled in several ways, depending on your preference. When a new match is scheduled, players can set their availability. The system can auto-add players to the line-up as they respond, or the captain can manage the line-up manually. Court assignments can be manual, in order of response, or randomized. When a committed player needs to cancel, the system can help find a sub by inviting all other available and/or sub players in the roster. First responder will be added to the match in their place.',
    alt: 'slider2',
  },
  {
    imageURL: Card3,
    description:
      'Stay in touch with your group and match schedules wherever you go. Quickly check upcoming matches, player availability, and club location/directions. Managing subs and cancellations is made easy with automated alerts and match invites when someone cannot play.',
    alt: 'slider3',
  },
]

const Home: React.FC<{}> = () => {
  return (
    <HomeWrapper>
      <ImageSection />
      <CardGroup>
        {data.map((item: CardProps, index: number) => {
          return (
            <CardSection
              key={index}
              imageURL={item.imageURL}
              alt={item.alt}
              description={item.description}
            />
          )
        })}
      </CardGroup>
    </HomeWrapper>
  )
}

export default Home
