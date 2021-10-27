import React, { useState } from 'react'
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
  const [skilllevel, setSkillLevel] = useState<string>('')
  const [gender, setGender] = useState<string>('')
  const [zipcode, setZipCode] = useState<string>('')
  const [phone, setPhone] = useState<string>('')
  const [birth, setBirth] = useState<string>('')

  const onSave = () => {
    console.log('save')
  }
  return (
    <ProfileWrapper>
      <ProfileHeader>{"User's Profile"}</ProfileHeader>
      <ProfileContent>
        <ProfileForm>
          <ProfileLabel>{'First Name'}</ProfileLabel>
          <ProfileInput
            value={firstname}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </ProfileForm>
        <ProfileForm>
          <ProfileLabel>{'Last Name'}</ProfileLabel>
          <ProfileInput
            value={lastname}
            onChange={(e) => setLastName(e.target.value)}
          />
        </ProfileForm>
        <ProfileForm>
          <ProfileLabel>{'Skill Level'}</ProfileLabel>
          <ProfileSelect
            value={skilllevel}
            onChange={(e) => setSkillLevel(e.target.value)}
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
            onChange={(e) => setClub(e.target.value)}
          />
        </ProfileForm>
        <ProfileForm>
          <ProfileLabel>{'Gender'}</ProfileLabel>
          <ProfileSelect
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          >
            <option value="Male">{'Male'}</option>
            <option value="Female">{'Female'}</option>
          </ProfileSelect>
        </ProfileForm>
        <ProfileForm>
          <ProfileLabel>{'Zip Code'}</ProfileLabel>
          <ProfileInput
            value={zipcode}
            onChange={(e) => setZipCode(e.target.value)}
          />
        </ProfileForm>
        <ProfileForm>
          <ProfileLabel>{'phone Number'}</ProfileLabel>
          <ProfileInput
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </ProfileForm>
        <ProfileForm>
          <ProfileLabel>{'Birth Year'}</ProfileLabel>
          <ProfileInput
            value={birth}
            onChange={(e) => setBirth(e.target.value)}
          />
        </ProfileForm>
      </ProfileContent>
      <ProfileButton onClick={onSave}>{'Save'}</ProfileButton>
    </ProfileWrapper>
  )
}

export default Profile
