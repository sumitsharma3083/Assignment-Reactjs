import React, {useState, useRef , useEffect} from 'react'
import {Document, Page , pdfjs } from 'react-pdf'
 import doc from '../assets/test.pdf'
import {DownloadOutlined} from '@ant-design/icons'
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';


pdfjs.GlobalWorkerOptions.workerSrc = new URL(
   'pdfjs-dist/build/pdf.worker.min.mjs',
   import.meta.url,
 ).toString();

const PDFViewer : React.FC = ()=>{

   const [containerSize, setContainerSize] = useState<{ width: number; height: number }>({
      width: 0,
      height: 0,
    });
   
  const containerRef = useRef<HTMLDivElement>(null);


  useEffect(() => {
   const updateSize = () => {
     if (containerRef.current) {
       setContainerSize({
         width: containerRef.current.clientWidth,
         height: containerRef.current.clientHeight,
       });
     }
   };

   updateSize();  
   window.addEventListener('resize', updateSize);  

   return () => window.removeEventListener('resize', updateSize);
 }, []);



    return(
       <div ref={containerRef} className='w-[80%] max-h-[90%] h-fit bg-[#efefef]  overflow-scroll' style={{ border: '1px solid #ccc'}}>
         <h1 className='text-left sm:text-center capitalize font-bold text-[15px] relative p-3'>
            Document
            <span className='absolute right-5 bg-[#444] text-[#fff] rounded-md p-1 cursor-pointer text-[10px] sm:text-[15px]'>
               <a href={doc} download="document.pdf">  <DownloadOutlined />  Download</a>
            </span>
         </h1>
         <Document file={doc}>
         <Page pageNumber={1} width={containerSize.width} height={containerSize.height}/>
        </Document>
       </div>
    )
   }
   
   export default PDFViewer