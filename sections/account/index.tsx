import React, { useState } from 'react'
import {
  AccountButton,
  AccountContent,
  AccountForm,
  AccountHeader,
  AccountInput,
  AccountLabel,
  AccountWrapper,
} from './index.style'
const Account: React.FC<{}> = () => {
  const [oldPass, setOldPass] = useState<string>('')
  const [newPass, setNewPass] = useState<string>('')
  const [confirmPass, setConfirmPass] = useState<string>('')

  const onSave = () => {
    console.log(`object`)
  }

  return (
    <AccountWrapper>
      <AccountHeader>{"User's Account"}</AccountHeader>
      <AccountContent>
        <AccountForm>
          <AccountLabel>{'Email'}</AccountLabel>
          <AccountInput disabled />
        </AccountForm>
        <AccountForm>
          <AccountLabel>{'Old Password'}</AccountLabel>
          <AccountInput
            type="password"
            value={oldPass}
            onChange={(e) => setOldPass(e.target.value)}
          />
        </AccountForm>
        <br></br>
        <AccountForm>
          <AccountLabel>{'New Password'}</AccountLabel>
          <AccountInput
            type="password"
            value={newPass}
            onChange={(e) => setNewPass(e.target.value)}
          />
        </AccountForm>
        <AccountForm>
          <AccountLabel>{'Confirm Password'}</AccountLabel>
          <AccountInput
            type="password"
            value={confirmPass}
            onChange={(e) => setConfirmPass(e.target.value)}
          />
        </AccountForm>
      </AccountContent>
      <AccountButton onClick={onSave}>{'Save'}</AccountButton>
    </AccountWrapper>
  )
}

export default Account
