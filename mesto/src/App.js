import Futer from "./component/futer/futer";
import './component/misto/misto.css'
import Header from "./component/heder/heder";
import Mecto from "./component/misto/Mecto";
import MyModal from "./component/modal/MyModal"
import { useState } from "react";
import Postform from "./component/modal/form/Postform";


function App() {
  const [misto, setMisto] = useState([ 
    { id:1, title: "Львів",img: "https://tripmydream.cc/travelhub/travel/blocks/17/4514/block_174514.jpg?v1",like: '22',},
{
    id:2,
    title: "Київ",
    img:  "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/1f/cf/2b/caption.jpg?w=400&h=300&s=1",
    like: '22',
},
{
  id:3,
    title: "Харків",
  img: "https://sho.org.ua/wp-content/uploads/2023/04/harkiv.webp",
  like: '22',
},
{
    id:4,
    title: "Житомир",
    img: "https://www.dilovamova.com/images/wpi.images/h_ua_den_jitomira.jpg",
    like: '22',
},
{
    id:5,
    title: "Івано-франківськ",
    img: "https://aws-travel-guide.s3.eu-west-1.amazonaws.com/default_image_size/607961b4480c8_ivano-frankivsk.jpg",
    like: '22',
},
{
    id:6,
    title: "Луцьк",
    img: "https://www.volynpost.com/img/modules/news/0/e8/ec0545ea9ed62d4897e5e1ba63b8ae80/top-photo.jpg",
    like: '22',
},
{
    id:7,
    title: "Луганськ",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/%D0%92%D0%BE%D0%BA%D0%B7%D0%B0%D0%BB_%D0%9B%D1%83%D0%B3%D0%B0%D0%BD%D1%81%D0%BA.JPG/300px-%D0%92%D0%BE%D0%BA%D0%B7%D0%B0%D0%BB_%D0%9B%D1%83%D0%B3%D0%B0%D0%BD%D1%81%D0%BA.JPG",
    like: '22',
},
{
    id:8,
    title: "Рівне",
    img: "https://rivne1.tv/pics2/2110/i129069.jpg?1634402034",
    like: '22',
},
{
    id:9,
    title: "Тернопіль",
    img: "https://fainemisto.tv/wp-content/uploads/2023/08/ternopil-miska-rada-750x375.jpg",
    like: '22',
},
{
    id:10,
    title: "Вінниця",
    img: "https://tamtour.com.ua/local/image/440/009/ua241-900@.jpg",
    like: '22',
},
])
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
