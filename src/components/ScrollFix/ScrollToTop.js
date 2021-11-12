import React, { useEffect, useState } from 'react'
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp'
import './ScrollToTop.css'

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () =>
      window.pageYOffset > 30 ? setIsVisible(true) : setIsVisible(false)

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  return isVisible ? (
    <div className='scroll-top'>
      <a href='#top'>
        <KeyboardArrowUpIcon className='material-icons alter'/>
      </a>
    </div>
  ) : null
}

export default ScrollToTop