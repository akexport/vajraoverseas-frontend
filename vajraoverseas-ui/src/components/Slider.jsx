import React, {useEffect, useState} from 'react'
import "./Slider.css"
import img1 from "../assets/VajraHome1.png"
import img2 from "../assets/VajraHome2.png"
import img3 from "../assets/VajraHome3.png"
import img4 from "../assets/VajraHome4.png"
import img5 from "../assets/VajraHome5.png"

const Slider = () => {
    const [slider, SetSlider] = useState(0)
    const data = [img1, img2, img3, img4, img5]
    const HandlePrevious = () =>{
        SetSlider(slider === 0 ? data.length-1:slider-1)
    }
    const HandleNext = () =>{
        SetSlider(slider === data.length-1 ? 0:slider+1)
    }
    useEffect(() => {

        const slideClear = setInterval(() => {
            HandleNext()
        },2000)

        return () => clearInterval(slideClear)
    },[slider])

  return (
    <div className="row">
        <div className="col-sm">
        <div className="card" >
        {/* <div className="card-body"> */}
            <img src={data[slider]} alt='' />
            {/* style={{width:"100%",height:"500px"}} */}
            {/* <div className='btn'> 
                 <button type="button" class="btn-primary" onClick={HandlePrevious}>-</button>
                 <button type="button" class="btn-primary" onClick={HandleNext}>+</button>
            </div> */}
            {/* </div> */}
            </div>
        </div>
    </div>
    // <div className='slider'>
    //     {
    //         data.map((img,i) => (
    //         <div className={'slider-img ${slider === 0? "block":"hidden"}'} key={i}>
    //         <img src={img} alt='' style={{width:"100%",height:"50vh"}} />
    //         <div className='btn'>
    //             <button onClick={HandlePrevious}>-</button>
    //             <button onClick={HandleNext}>+</button>
    //         </div>
    //         </div>
    //         ))
        
    //     }
    // </div>
    
  )
}

export default Slider