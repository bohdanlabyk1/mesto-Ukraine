import React from 'react'
import { useState } from 'react'
import './form.css'

const Postform = ({create}) => {
    const [post, setPost] = useState({title: '', img:'' })

    const addNewMisto = (e) => {
        e.preventDefault();
        const newPost = {
         
        }
       create(newPost)
        setPost({title: '', img:'' })
      };
    
  return (
    <form>
    <input
    value={post.img}
    type="url"
    placeholder="Силка на картинка"
    onChange={(e) => setPost({ ...post, img: e.target.value })}
    />
    <input
    value={post.title}
    type="text"
    placeholder="Назва"
    onChange={e=> setPost({...post, title: e.target.value})}
    />
    <button onClick={addNewMisto}>Створити</button>
  </form>
  )
}

export default Postform