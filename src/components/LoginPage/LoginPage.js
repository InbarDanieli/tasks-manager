import React, { useEffect } from 'react'
import { useNavigate } from "react-router-dom"
import { GetPageName, GetTaskLists } from '../../services/TaskService'


function LoginPage() {
  const navigate = useNavigate()

  useEffect(() => {
    const pageName = GetPageName()
    if (!Object.keys(GetTaskLists()).length) {
      navigate("/empty")
    }
    else {
      navigate(pageName ? `/${pageName}` : '/intro')
    }

  }, [navigate])

  return (<></>)
}

export default LoginPage