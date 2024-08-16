import {useState} from 'react'
import {Typography} from 'antd'
import { Divider } from 'antd';
import {CommentOutlined} from '@ant-design/icons'
const {Title} = Typography


// Import Custom Components
import InputField from './InputField'
import CommentList from './CommentList'



interface CommentObj {
    id: number;
    text: string;
     
  }

const CommentSection : React.FC = ()=>{

      // States for the Components
     const [comment, setComment] = useState<string>('')
     const [comments, setComments] = useState<CommentObj[]>([]);
     const [editId, setEditId] = useState<number | null>(null);
     const [id, setId] = useState<number>(1);
      

     // This function triggers on input value change
    const handleInputChange = (value: string): void => {
        setComment(value)
    };

   
    // Function used to Add comment
    const addComment = () => {
        if (comment.trim()) {  
            if(editId !== null){
                setComments(comments.map(findedcomment=>{
                    return(
                        findedcomment.id == editId ? {...findedcomment , text : comment } : findedcomment
                    )
                }))
                  setEditId(null);  
            }else{
                const obj = {
                    id : id,
                    text : comment
                }
                  setComments([...comments, obj]);
                  setId(id+1)
            }

        }
        
    };
    
     // Function used to Edit Comment
   const editComment = (id: any)=>{
    setEditId(id)
    const findComment = comments.find(comment => {
        return comment.id == id 
    })

    if(findComment){
        setComment(findComment.text)
    }

   }
        


    //Function used to Delete comment
   const deleteComment = (id :any)=>{
     const filteredArray =   comments.filter(item => item.id !== id);
     setComments(filteredArray)
   }
        
   
  
    return(
       <div className="commentSectionWrapper min-h-[100%] h-auto">
        <Title level={5} className='text-left font-bold px-2'><CommentOutlined className='mr-1'/>Comments</Title>
        <Divider style={{  borderColor: '#eee', margin:0 }}/> 
        {comments.length > 0 ? (
            <CommentList commentList={comments} editComment={editComment} deleteComment={deleteComment}/>
        ) : (
            <p className='text-[10px] mt-[30px] w-[80%] m-auto text-[#aaa]'>Comments on this file will shown up here</p>
        )}
        <InputField handleChange = {handleInputChange} handleKeyDown={addComment} comment={comment} setComment={setComment} />
      
       </div>
    )
}
   
export default CommentSection