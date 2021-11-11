import React, { useState, useEffect } from 'react'
import { toast } from 'react-toastify'
import { apiClientwithToken } from '../../utils/apiclient'
import { isEmpty } from '../../utils/isEmpty'
import {
  ProfileContent,
  ProfileHeader,
  ProfileWrapper,
  ProfileForm,
  ProfileLabel,
  ProfileInput,
  ProfileButton,
  ProfileSelect,
} from './index.style'

const Profile: React.FC<{}> = () => {
  const [firstname, setFirstName] = useState<string>('')
  const [lastname, setLastName] = useState<string>('')
  const [club, setClub] = useState<string>('')
  const [skill, setSkill] = useState<string>('0.0')
  const [gender, setGender] = useState<string>('Male')
  const [zipcode, setZipCode] = useState<string>('')
  const [phone, setPhone] = useState<string>('')
  const [birth, setBirth] = useState<string>('')

  useEffect(() => {
    apiClientwithToken(localStorage.getItem('tennis-admin-token'))
      .get('/profile')
      .then((res) => {
        if (res.data.success) {
          setFirstName(res.data.item.firstname || '')
          setClub(res.data.item.club || '')
          setLastName(res.data.item.lastname || '')
          setSkill(res.data.item.skill || '')
          setGender(res.data.item.gender || '')
          setZipCode(res.data.item.zipcode || '')
          setPhone(res.data.item.phone || '')
          setBirth(res.data.item.birth || '')
        }
      })
      .catch((err) => {
        if (err.response.status == 404) {
          toast.error('Server Disconected.')
        } else {
          toast.error(err.response.data.message)
        }
      })
  }, [])

  const onSave = () => {
    if (isEmpty(firstname)) {
      return toast.error('Please input the firstname.')
    }
    if (isEmpty(lastname)) {
      return toast.error('Please input the lastname')
    }
    apiClientwithToken(localStorage.getItem('tennis-admin-token'))
      .put('/profile', {
        firstname,
        lastname,
        club,
        skill,
        gender,
        zipcode,
        phone,
        birth,
        user: localStorage.getItem(`tennis`),
      })
      .then((res) => {
        if (res.data.success) {
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
    <ProfileWrapper>
      <ProfileHeader>{"User's Profile"}</ProfileHeader>
      <ProfileContent>
        <ProfileForm>
          <ProfileLabel>{'First Name'}</ProfileLabel>
          <ProfileInput
            value={firstname}
            onChange={(e: any) => setFirstName(e.target.value.trim())}
          />
        </ProfileForm>
        <ProfileForm>
          <ProfileLabel>{'Last Name'}</ProfileLabel>
          <ProfileInput
            value={lastname}
            onChange={(e: any) => setLastName(e.target.value.trim())}
          />
        </ProfileForm>
        <ProfileForm>
          <ProfileLabel>{'Skill Level'}</ProfileLabel>
          <ProfileSelect
            value={skill}
            onChange={(e: any) => setSkill(e.target.value)}
          >
            <option value="0.0">{'0.0'}</option>
            <option value="2.5">{'2.5'}</option>
            <option value="2.5">{'2.5'}</option>
            <option value="3.0">{'3.0'}</option>
            <option value="3.5">{'3.5'}</option>
            <option value="4.0">{'4.0'}</option>
            <option value="4.5">{'4.5'}</option>
            <option value="5.0">{'5.0'}</option>
            <option value="Pro">{'Pro'}</option>
          </ProfileSelect>
        </ProfileForm>
        <ProfileForm>
          <ProfileLabel>{'Home Club'}</ProfileLabel>
          <ProfileInput
            value={club}
            onChange={(e: any) => setClub(e.target.value.trim())}
          />
        </ProfileForm>
        <ProfileForm>
          <ProfileLabel>{'Gender'}</ProfileLabel>
          <ProfileSelect
            value={gender}
            onChange={(e: any) => setGender(e.target.value)}
          >
            <option value="Male">{'Male'}</option>
            <option value="Female">{'Female'}</option>
          </ProfileSelect>
        </ProfileForm>
        <ProfileForm>
          <ProfileLabel>{'Zip Code'}</ProfileLabel>
          <ProfileInput
            value={zipcode}
            onChange={(e: any) => setZipCode(e.target.value.trim())}
          />
        </ProfileForm>
        <ProfileForm>
          <ProfileLabel>{'phone Number'}</ProfileLabel>
          <ProfileInput
            value={phone}
            onChange={(e: any) => setPhone(e.target.value.trim())}
          />
        </ProfileForm>
        <ProfileForm>
          <ProfileLabel>{'Birth Year'}</ProfileLabel>
          <ProfileInput
            value={birth}
            onChange={(e: any) => setBirth(e.target.value.trim())}
          />
        </ProfileForm>
      </ProfileContent>
      <ProfileButton onClick={onSave}>{'Save'}</ProfileButton>
    </ProfileWrapper>
  )
}

export default Profile
