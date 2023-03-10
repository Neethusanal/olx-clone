import React ,{useState,useEffect,useContext} from 'react';

import Heart from '../../assets/Heart';
import { FirebaseContext } from '../../store/FirebaseContext.js';
import { postContext } from '../../store/Postcontext';
import './Post.css';
import { useHistory } from 'react-router-dom';

function Posts() {
 const {firebase}= useContext(FirebaseContext)
const [items,setItems]=useState([])
const {setPostDetails}=useContext(postContext)
const history = useHistory()
useEffect(()=>{
  firebase.firestore().collection('items').get().then((snapshot)=>{
    const allPost= snapshot.docs.map((item)=>{
      return{
       ...item.data(),
       id:item.id
      }
    })
    //console.log(allPost)
    setItems(allPost)
  })
})
  return (
    <div className="postParentDiv">
      <div className="moreView">
        <div className="heading">
          <span>Quick Menu</span>
          <span>View more</span>
        </div>
        <div className="cards">
        {items.map((item)=>{ 
        
         return <div
            className="card"
            onClick={()=>{
              setPostDetails(item)
              console.log(item)
              history.push('/view')
            }}
          >
            <div className="favorite">
              <Heart></Heart>
            </div>
            <div className="image">
              <img src={item.url} alt="" />
            </div>
            <div className="content">
              <p className="rate">&#x20B9; {item.price}</p>
              <span className="kilometer">{item.category}</span>
              <p className="name">{item.name}</p>
            </div>
            <div className="date">
              <span>{item.createdAt}</span>
            </div>
          </div>
       
         })}
    

        </div>

      </div>
      <div className="recommendations">
        <div className="heading">
          <span>Fresh recommendations</span>
        </div>
        <div className="cards">
          <div className="card">
            <div className="favorite">
              <Heart></Heart>
            </div>
            <div className="image">
              <img src="../../../Images/R15V3.jpg" alt="" />
            </div>
            <div className="content">
              <p className="rate">&#x20B9; 250000</p>
              <span className="kilometer">Two Wheeler</span>
              <p className="name"> YAMAHA R15V3</p>
            </div>
            <div className="date">
              <span>10/5/2021</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Posts;
