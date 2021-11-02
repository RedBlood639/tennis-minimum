import React, { useState } from 'react'
import { toast } from 'react-toastify'
import { apiClientwithToken } from '../../utils/apiclient'
import { isEmpty } from '../../utils/isEmpty'
import { validateEmail } from '../../utils/validateemail'
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
  const [description, setDescription] = useState<string>('')

  const getDate = () => {
    if (isEmpty(name)) {
      return toast.error('Pease input your name.')
    }
    if (isEmpty(email1)) {
      return toast.error('Pease input your email.')
    }
    if (!validateEmail(email1)) {
      return toast.error('Pleae input correct email.')
    }
    if (isEmpty(email2)) {
      return toast.error('Pease confirm your email.')
    }
    if (isEmpty(description)) {
      return toast.error('Pease input description.')
    }
    if (email1 !== email2) {
      return toast.error("Your email didn't match")
    }

    apiClientwithToken(localStorage.getItem('tennis-common-token'))
      .post('/contact', {
        name,
        email1,
        description,
      })
      .then((res) => {
        if (res.data.success) {
          toast.info(res.data.message)
          setName('')
          setEmail1('')
          setEmail2('')
          setDescription('')
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
    <ContactWrapper>
      <ContactHeader>{'Contact Us.'}</ContactHeader>
      <ContactContent>
        <ContactMain>
          <ContactForm>
            <ContactLabel>{'* Name'}</ContactLabel>
            <FormInput
              value={name}
              onChange={(e: any) => setName(e.target.value.trim())}
            ></FormInput>
          </ContactForm>
          <ContactForm>
            <ContactLabel>{'* Email'}</ContactLabel>
            <FormInput
              value={email1}
              onChange={(e: any) => setEmail1(e.target.value.trim())}
            ></FormInput>
          </ContactForm>
          <ContactForm>
            <ContactLabel>{'* Confirm Email'}</ContactLabel>
            <FormInput
              value={email2}
              onChange={(e: any) => setEmail2(e.target.value.trim())}
            ></FormInput>
          </ContactForm>
        </ContactMain>
        <ContactForm>
          <ContactLabel>{' Description'}</ContactLabel>
          <MessageBox
            value={description}
            onChange={(e: any) => setDescription(e.target.value.trim())}
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
