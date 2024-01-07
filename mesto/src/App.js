import Futer from "./component/futer/futer";
import './component/misto/misto.css'
import Header from "./component/heder/heder";
import Mecto from "./component/misto/Mecto";
import MyModal from "./component/modal/MyModal"
import { misto as mistoua } from "./component/misto/misto";
import { useState } from "react";
import Postform from "./component/modal/form/Postform";


function App() {
  const [misto, setMisto] = useState(mistoua)
  const [isModalOpen, setModalOpen] = useState(false);
  
  const createPost = (newPost)=>{
  setMisto([...misto, newPost])
  }
  
  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  }
  return (
   <div className="app-content" >
    <Header />
   
    <button  onClick={openModal}>+</button>
  
    <MyModal isOpen={isModalOpen} onClose={closeModal}>
    <Postform create={createPost}/>
    </MyModal>
   <Mecto misto={misto}/>
    <Futer />
   </div>
   
  );
}

export default App;
