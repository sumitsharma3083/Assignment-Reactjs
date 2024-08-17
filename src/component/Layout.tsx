import React, {useState} from 'react';
import { Layout , Flex, Breadcrumb, Button , Dropdown, Space } from 'antd';
import {UserOutlined, DownOutlined} from '@ant-design/icons' 

import {CommentOutlined, MessageOutlined, DownloadOutlined , LinkOutlined, ArrowLeftOutlined , ArrowRightOutlined} from '@ant-design/icons' 
const {Content, Sider,Header } = Layout;
//Import Custom Components 
import PDFViewer from './PDFViewer'
import CommentSection from './CommentSection'

import type { MenuProps } from 'antd';

 
 
const handleMenuClick: MenuProps['onClick'] = (e) => {
  
  console.log('click', e);
};

const items: MenuProps['items'] = [
  {
    label: '25%',
    key: '1',
    
  },
  {
    label: '50%',
    key: '2',
    
  },
  {
    label: '75%',
    key: '3',
    
  },
  {
    label: '100%',
    key: '4',
    
  },
];

const menuProps = {
  items,
  onClick: handleMenuClick,
};



const LayoutMain : React.FC = ()=>{   
 
 
  const [collapsed, setCollapsed] = useState<boolean>(true); 
  

   // This function will perform the sidebar collapsing
  const toggleCollapsed = () => {
    if (collapsed) {
      setCollapsed(false);
    } else {
      setCollapsed(true)
    }
  };

  

 return(
    <Layout style={{height: '100vh', overflowX: 'hidden', position:"relative" }}>
      <Header>
           <Flex 
            vertical={false}
            justify='space-between'
            align='flex-start'
            style={{height:"100px"}}
           >
                      <div className='h-[100%]'>
                          <Breadcrumb
                            items={[
                            {
                              title: "Financial Practice Statement"
                            },
                            {
                              title: <p className='font-bold'>tax-statement_practice3</p> 
                            }
                            ]}
                            />
                          <ul className='menuOne'>
                            <li className='menuItem'>
                              File
                            </li>
                            <li className='menuItem'>
                              Edit
                            </li>
                            <li className='menuItem'>
                              View
                            </li>
                            <li className='menuItem'>
                              Help
                            </li>

                          </ul>
                          <ul className='menuTwo'>
                              <li className='menuItem1'>
                                Rotate Left
                              </li>
                              <li className='menuItem1'>
                                Rotate Right
                              </li>
                              <li className='menuItem1'>
                                Flip
                              </li>
                              <li className='menuItem1'>
                                Crop
                              </li>
                              <li className='menuItem1'>
                                Enhance
                              </li>
                              <li className='menuItem1'>
                                WaterMark
                              </li>
                              
                              <li className='menuItem1'>
                                Adjust
                              </li>
                              <li className='menuItem1'>
                                Comment
                              </li>
                              <li className='menuItem1'>
                                Self Sign
                              </li>
                              <li className='menuItem1'>
                                Send for signature
                              </li>
                          </ul>
                      </div>
 
                       <div className='h-[100%] relative'>
                           <ul className='right_featurelist'>
                       <li>
                      {[1,2].map(num=>{
                        return(
                          <UserOutlined style={{background:"gray", color:"#fff", borderRadius:"7px", fontSize:"25px", padding:"4px", marginRight:"2px"}}/>
                        )
                      })}
                       </li>
                       <li>
                           <button><ArrowLeftOutlined /></button>
                           <span className='text-[#bbb] mx-[10px] font-bold'>2 of 34</span>
                           <button><ArrowRightOutlined /></button>
                       </li>
                       <li>
                       <MessageOutlined style={{fontSize:"18px", marginRight:"15px"}}/>
                       <DownloadOutlined style={{fontSize:"18px", marginRight:"15px"}} />
                       <LinkOutlined style={{fontSize:"18px", marginRight:"15px"}}/>
                        <Button type="primary" icon={<DownloadOutlined />} size="middle" iconPosition='end' style={{background:"#000"}}>
                           Share
                        </Button>
                       </li>
                           </ul>

                     
                            <Dropdown menu={menuProps}>
                      <Button style={{position:"absolute", bottom:"10px", right:"10%"}}>
                        <Space>
                           90%
                          <DownOutlined />
                        </Space>
                      </Button>
                            </Dropdown>
                      

                        </div>
           </Flex>
      </Header>
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
      
    </Layout>
 )
}

export default LayoutMain
 