import React from 'react'
import {Input} from 'antd'
import {Divider} from 'antd' 

  // Component accepting which types of props
interface InputFieldProps {
    handleChange: (value: string) => void;
    handleKeyDown : ()=> void ;
    comment : string ,
    setComment: (comment: string) => void;
  }

const InputField : React.FC<InputFieldProps> = ({handleChange,handleKeyDown, comment , setComment})=>{

     

    

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        handleChange(e.target.value)
    };


   
     
     const handleKeyPress = (e : React.KeyboardEvent<HTMLInputElement>): void=>{
        if (e.key === 'Enter') {
            e.preventDefault();  
            handleKeyDown();  
            setComment("")
          }
     }


     const handleAddComment = ()=>{
          handleKeyDown();  
          setComment("")
   }

      
  return(
    <div className={`bg-[#eee] w-[250px] fixed bottom-0`}>
     <Divider style={{margin : 0}}/>
     <Input className='w-full' value={comment} placeholder="Join the conversation" variant='borderless' onChange={handleInputChange} onKeyDown={handleKeyPress} style={{padding:10, color:"#000"}} itemRef='inputRef' />
     <button className='bg-[#000] text-[#fff] w-[100%] text-center p-3 block sm:hidden' onClick={handleAddComment}>Add Comment</button>
    </div>
  )
}

export default InputField