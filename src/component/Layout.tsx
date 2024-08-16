import React, {useState} from 'react';
import { Layout } from 'antd';
import {CommentOutlined} from '@ant-design/icons' 
const {Content, Sider } = Layout;

//Import Custom Components 
import PDFViewer from './PDFViewer'
import CommentSection from './CommentSection'

const LayoutMain : React.FC = ()=>{   

  const [collapsed, setCollapsed] = useState<boolean>(true);
  


  const toggleCollapsed = () => {
    if (collapsed) {
      setCollapsed(false);
    } else {
      setCollapsed(true)
    }
  };

 return(
    <Layout style={{height: '100vh', overflowX: 'hidden', position:"relative" }}>
       
            <CommentOutlined onClick={toggleCollapsed} className='absolute top-0 right-0 z-10 text-[15px] sm:text-[30px] cursor-pointer bg-[#000] text-[#fff] p-2 rounded-tl-lg rounded-bl-lg' /> 
          
              <Content style={{display : "flex" , justifyContent:"center", alignItems:"center", width:"100%" , height: "100%"}}>
                <PDFViewer/>
              </Content>

               <Sider  
                width={200}
                collapsible
                collapsedWidth={0}
                collapsed={collapsed}
                onCollapse={toggleCollapsed}
                breakpoint="lg"
                onBreakpoint={(broken) => {
                  if (broken) {
                    setCollapsed(true) 
                  }
                }}
                style={{height: '100%', transition: 'width 0.3s ease' }}
                 
               >
                 <CommentSection/>
               </Sider>  
           
    </Layout>
 )
}

export default LayoutMain
 