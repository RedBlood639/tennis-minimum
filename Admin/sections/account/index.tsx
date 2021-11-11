import React, { useState, useEffect, useContext } from 'react'
import { toast } from 'react-toastify'
import { apiClientwithToken } from '../../utils/apiclient'
import {
  AccountButton,
  AccountContent,
  AccountForm,
  AccountHeader,
  AccountInput,
  AccountLabel,
  AccountWrapper,
} from './index.style'
import { isEmpty } from '../../utils/isEmpty'
const Account: React.FC<{}> = () => {
  const [oldPass, setOldPass] = useState<string>('')
  const [newPass, setNewPass] = useState<string>('')
  const [confirmPass, setConfirmPass] = useState<string>('')
  const [email, setEmail] = useState<string>(
    localStorage.getItem('tennis-admin-email') || '',
  )
  const onSave = () => {
    if (isEmpty(oldPass)) {
      return toast.error('Please input old password.')
    }
    if (isEmpty(confirmPass)) {
      return toast.error('Please input confirm password.')
    }
    if (isEmpty(newPass)) {
      return toast.error('Please input new password.')
    }
    if (isEmpty(confirmPass)) {
      return toast.error('Please input confirm password.')
    }
    if (newPass !== confirmPass) {
      return toast.error("New password didn't match with confirm one.")
    }
    apiClientwithToken(localStorage.getItem('tennis-admin-token'))
      .put('/account', {
        oldPass,
        newPass,
      })
      .then((res) => {
        if (res.data.success) {
          toast.info(res.data.message)
          setOldPass('')
          setNewPass('')
          setConfirmPass('')
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
    <AccountWrapper>
      <AccountHeader>{"User's Account"}</AccountHeader>
      <AccountContent>
        <AccountForm>
          <AccountLabel>{'Email'}</AccountLabel>
          <AccountInput
            disabled
            value={email}
            onChange={(e: any) => setEmail(e.target.value.trim())}
          />
        </AccountForm>
        <AccountForm>
          <AccountLabel>{'Old Password'}</AccountLabel>
          <AccountInput
            type="password"
            value={oldPass}
            onChange={(e: any) => setOldPass(e.target.value.trim())}
          />
        </AccountForm>
        <br></br>
        <AccountForm>
          <AccountLabel>{'New Password'}</AccountLabel>
          <AccountInput
            type="password"
            value={newPass}
            onChange={(e: any) => setNewPass(e.target.value.trim())}
          />
        </AccountForm>
        <AccountForm>
          <AccountLabel>{'Confirm Password'}</AccountLabel>
          <AccountInput
            type="password"
            value={confirmPass}
            onChange={(e: any) => setConfirmPass(e.target.value.trim())}
          />
        </AccountForm>
      </AccountContent>
      <AccountButton onClick={onSave}>{'Save'}</AccountButton>
    </AccountWrapper>
  )
}

export default Account
