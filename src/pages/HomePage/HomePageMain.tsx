import { useEffect } from 'react'
import { useNavigate } from 'react-router'

const HomePageMain = () => {
  const navigate = useNavigate()
  useEffect(() => {
    navigate('blog')
  }, [navigate])
  return (
    <div>
      abc
    </div>
  )
}

export default HomePageMain
