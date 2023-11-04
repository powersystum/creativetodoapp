
import React from 'react'
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import DeleteIcon from '@mui/icons-material/Delete';


export const LIst = ({id,text ,deletitems}) => {
  return (
    <>
    <div className='items'>
     <li>
        {text}
     </li>
     <Tooltip title='delete'>
                            <Button className='dltbtn'onClick={()=>deletitems(id)} >
                                < DeleteIcon/>
                            </Button>
                        </Tooltip>
    </div>
    </>
  )
}

export default LIst
