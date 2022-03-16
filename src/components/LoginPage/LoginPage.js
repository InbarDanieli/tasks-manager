import React, { useEffect } from 'react'
import { useNavigate } from "react-router-dom"
import { GetPageName } from '../../services/TaskService'


function LoginPage() {
  const navigate = useNavigate()

  useEffect(() => {
    const pageName = GetPageName()

    navigate(pageName ? `/${pageName}` : '/intro')

  }, [navigate])

  return (<></>)
}

export default LoginPage