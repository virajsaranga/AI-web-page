import React from 'react'
import Artical from '../../component/artical/Artical';
import { blog01, blog02, blog03, blog04, blog05 } from './import';
import  './adds.css';


const adds = () => {
  return (
    <div className='adds_section_1' id='add'>
      <div className='add_heading'>
        <h1 className='heading_color'> Ai advertisment</h1><br></br>
        <div className='add_container'>
        <div className='add_container_group_A'>
        <Artical imgUrl={blog01} date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
        <div className='add_container_group_B'>
        <Artical imgUrl={blog02} topic ="AI mind controlling" date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
        <Artical imgUrl={blog03} topic ="AI facial " date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
        <Artical imgUrl={blog04} topic ="crypto currency" date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
        <Artical imgUrl={blog05} topic ="bitcoin" date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" /> 

        </div>
        </div>

        </div>
        
      

      

      </div>
      
    </div>
  )
}

export default adds
