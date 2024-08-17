import './App.css'
import Layout from './component/Layout'
import { ConfigProvider } from 'antd';

function App() {
  return (
    <>
    <ConfigProvider
      theme={{
       components:{
        Layout:{
          headerBg : "#fff"
        }
       }
      }}
    >
       <Layout/>
    </ConfigProvider>
    </>
  )
}

export default App
