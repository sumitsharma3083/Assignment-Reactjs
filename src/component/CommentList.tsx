import React from 'react'
import {EditOutlined , DeleteOutlined} from '@ant-design/icons'



  // Comment Properties
interface obj {
    id: number;
    text: string;
  }
   
   // Component accepting which types of props
interface CommentProps {
    commentList: obj[],
    editComment : (id: number)=> void,
    deleteComment: (id: number)=> void
  }


const CommentList : React.FC<CommentProps> = ({commentList, editComment , deleteComment})=>{
  return(
    <div className='pb-8' id="listScrollbar">
     {commentList.map(comment=>{
        return(
            <div className='grid grid-cols-[2fr_1fr]'>
                <p key={comment.id} className='mb-4 mt-4 px-2 py-2 capitalize text-[15px] text-[#999]'>
                    {comment.text}
                </p>
                
                <div className='flex justify-around items-center'>
                    <EditOutlined className='cursor-pointer text-[#999]' onClick={()=>{editComment(comment.id)}}/>
                    <DeleteOutlined className='cursor-pointer text-[#999]' onClick={()=>{deleteComment(comment.id)}}/>
                </div>
            </div>
        )
     })}
    </div>
  )
}

export default CommentList