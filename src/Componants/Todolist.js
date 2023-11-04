import React, { useState } from 'react'
import './style.css'
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import AddIcon from '@mui/icons-material/Add';
import List from './List'


export const Todolist = () => {
    const [data, setdata] = useState('');
    const [add, setAdd] = useState([]);
    const [validation,setValidation]=useState('');
    console.log(add);
    const addlist = (e) => {
        setdata(e.target.value);

    }

    const additems = () => {

        if(data == ''){
            setValidation('Enter your task')
        }else{
            setAdd(() => {
                return [...add, data]
            })
            setdata('')
            setValidation('')
        }

        
        
    }
    const deletitems=(id)=>{
      const dleindex = add.filter((ele,ind)=>{
        return ind !== id 
      })
      setAdd(dleindex)
    }
    return (
        <>
            <div className='main-container'>
                <div className='todo-box'>
                    <img src='' alt='todoimg' />
                    <h2 className='heading'>Write Your Todo List Here</h2>
                    <h3 className='validation'>{validation}</h3>
                    <div className='input-container'>
                        <input type='text' name='todo' id='' placeholder='Enter your task'
                            onChange={addlist} value={data} />
                        <Tooltip title='Add'>
                            <Button className='addbtn' onClick={additems}>
                                <AddIcon />
                            </Button>
                        </Tooltip>

                    </div>
                    <div className='store-container'>
                        <ul>
                            {add.map((item,index)=>{
                                return(
                                    <>
                                     <List  id={index} text={item} deletitems={deletitems}/>
                                    </>
                                )
                            })}
                            
                            
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Todolist