import React from 'react'

type Props = {
  name?: string
  pic?: string
  link?: string
}

const NavButton = ({name,}:Props) => {
  return (

    
    <div className='bg-slate-400'>{name}</div>
  )
}

export default NavButton