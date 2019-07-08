import React from 'react'
// added style file
import "./style.scss";
// import 'font-awesome/css/font-awesome.min.css';
//TODOList --> Main Component
import TODOList from '../components/TODOList'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEdit, faTrash, faCheck } from '@fortawesome/free-solid-svg-icons';
library.add(faEdit, faTrash, faCheck);

const Home = () => (
  
  <div className="abc">
    <TODOList/>
  </div>
)

export default Home
