import React from 'react'
import { useState } from 'react'
import Card from './Card'

const Cards = () => {

    const [items,setItems] = useState([
        { id: 1, img: '/img/html.png', stat: "" },
        { id: 1, img: '/img/html.png', stat: "" },
        { id: 2, img: '/img/css.png', stat: "" },
        { id: 2, img: '/img/css.png', stat: "" },
        { id: 3, img: '/img/js.png', stat: "" },
        { id: 3, img: '/img/js.png', stat: "" },
        { id: 4, img: '/img/scss.png', stat: "" },
        { id: 4, img: '/img/scss.png', stat: "" },
        { id: 5, img: '/img/react.png', stat: "" },
        { id: 5, img: '/img/react.png', stat: "" },
        { id: 6, img: '/img/vue.png', stat: "" },
        { id: 6, img: '/img/vue.png', stat: "" },
        { id: 7, img: '/img/angular.png', stat: "" },
        { id: 7, img: '/img/angular.png', stat: "" },
        { id: 8, img: '/img/nodejs.png', stat: "" },
        { id: 8, img: '/img/nodejs.png', stat: "" }
    ].sort(()=> Math.random()-0.5) )

    function check(current){
        if(items[current].id == items[prev].id){
            items[current].stat = "correct"
            items[prev].stat="correct"
            setItems([...items])
            setPrev(-1)
        }else{
            items[current].stat ="wrong"
            items[prev].stat="wrong"
            setItems([...items])
            setTimeout(()=>{
                items[current].stat = ""
                items[prev].stat=""
                setItems([...items])
                setPrev(-1)
            },1000)
        }
    }

    const [prev,setPrev]= useState(-1)

     function handleClick(id){
        items[id].stat="active"
        setItems([...items])

        if (prev === -1) {
            setItems([...items])
            setPrev(id)
        }else{
            check(id)
        }
     }

  return (
     <div className="container">
        {
            items.map((item,index)=>(
              <Card key={index} item={item} id={index} handleClick={handleClick}/>
            ))
        }
     </div> 
  )
}

export default Cards