import React, { useState } from 'react'
import {
  ContactWrapper,
  ContactHeader,
  ContactContent,
  MessageBox,
  ContactLabel,
  ContactForm,
  FormInput,
  ContactButton,
  ContactMain,
} from './index.style'
const Contact: React.FC<{}> = () => {
  const [name, setName] = useState<string>('')
  const [email1, setEmail1] = useState<string>('')
  const [email2, setEmail2] = useState<string>('')
  const [teamname, setTeamName] = useState<string>('')
  const [description, setDescription] = useState<string>('')

  const getDate = () => {
    console.log(description)
  }
  return (
    <ContactWrapper>
      <ContactHeader>{'Contact Us.'}</ContactHeader>
      <ContactContent>
        <ContactMain>
          <ContactForm>
            <ContactLabel>{'* Name'}</ContactLabel>
            <FormInput
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></FormInput>
          </ContactForm>
          <ContactForm>
            <ContactLabel> {'Team Name'}</ContactLabel>
            <FormInput
              value={teamname}
              onChange={(e) => setTeamName(e.target.value)}
            ></FormInput>
          </ContactForm>
          <ContactForm>
            <ContactLabel>{'* Email'}</ContactLabel>
            <FormInput
              value={email1}
              onChange={(e) => setEmail1(e.target.value)}
            ></FormInput>
          </ContactForm>
          <ContactForm>
            <ContactLabel>{'* Confirm Email'}</ContactLabel>
            <FormInput
              value={email2}
              onChange={(e) => setEmail2(e.target.value)}
            ></FormInput>
          </ContactForm>
        </ContactMain>
        <ContactForm>
          <ContactLabel>{' Description'}</ContactLabel>
          <MessageBox
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></MessageBox>
        </ContactForm>
        <ContactForm>
          <ContactButton onClick={() => getDate()}>{'Submit'}</ContactButton>
        </ContactForm>
      </ContactContent>
    </ContactWrapper>
  )
}

export default Contact
