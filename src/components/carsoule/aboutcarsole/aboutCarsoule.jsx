import React, { useState } from 'react'
import "../../../css/aboutcarsoule.css"
import carsoleImg from "../../../assets/features-2.png"
import { FaGreaterThan,FaLessThan } from "react-icons/fa";
export default function AboutCarsoule() {
  const items =[
    {
      image:carsoleImg,
      headding:"WEB DEVELOPMENT",
    },
    {
      image:carsoleImg,
  headding:"UX DESIGN & DEVELOPMENT",
  discription:["At Analogue IT Solutions, we transform your ideas into meaningful user stories with our creative UI/UX development. Our expert UI/UX designers mainly focus on user expectations and incorporate the UX design practice in every stage of the app development cycle.","At Analogue IT Solutions, we transform your ideas into meaningful user stories with our creative UI/UX development. Our expert UI/UX designers mainly focus on user expectations and incorporate the UX design practice in every stage of the app development cycle. We create interfaces that are aesthetically appealing, easy to navigate, and truly user-friendly. We build creative and impressive designs with our deep knowledge of web designing and implementing the latest technology trends in your business."]
},
{
  image:carsoleImg,
headding:"UX DESIGN & DEVELOPMENT1",
discription:["At Analogue IT Solutions, we transform your ideas into meaningful user stories with our creative UI/UX development. Our expert UI/UX designers mainly focus on user expectations and incorporate the UX design practice in every stage of the app development cycle.","At Analogue IT Solutions, we transform your ideas into meaningful user stories with our creative UI/UX development. Our expert UI/UX designers mainly focus on user expectations and incorporate the UX design practice in every stage of the app development cycle. We create interfaces that are aesthetically appealing, easy to navigate, and truly user-friendly. We build creative and impressive designs with our deep knowledge of web designing and implementing the latest technology trends in your business."]
}
,{
  image:carsoleImg,
  headding:"Mobile Apps DEVELOPMENT",
  discription:[
    "According to the latest market research, the Android platform holds the majority of shares in the smartphone market. Because of its huge user base, Android became the most important and popular application development platform. There is a lot of demand for Android app development in India as every business owner looking to build their solid presence on this platform."
    
  ],
  points:[
    "CUSTOM ANDROID APP",
    "ANDROID APP DESIGN.",
   " ANDROID WEB APPS.",
   " ANDROID APP TESTING."
  ]
}
]


  const [activeIndex,setActiveIndex]=useState(0);





  //  const carsoleTransformStyle={
  //   transform:`translatex(-${activeIndex * 100}%)`
  //  }

  //  const updateIndex = (newIndex) => {
  //   if (newIndex < 0) {
  //     newIndex = 0;
  //   } else if (newIndex > items.length-1) {
  //     newIndex = 0;
  //   }

  //   setActiveIndex(newIndex);
  //   console.log("clicked")
  // };

  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent(current === items.length - 1 ? 0 : current + 1)

  }
  const prevSlide = () => {
      setCurrent(current === 0 ? items.length - 1 : current - 1)
  }

  return (
    <>
    <div className='about-carsole-div'>
     <button className='btn-right' onClick={nextSlide}>
     <FaGreaterThan className='rightIcon' />
     </button>
     <div className='slider-div'>
     {items.map((item,i)=>{
          return  <div key={i} className={current==i?"innerdiv":"innerdiv-deactive"}
        //    style={{ transform: `translatex(${ -(activeIndex *100)}%)`
        // }} 
        >
          <img className='sliderImg' s src={carsoleImg} alt="sliderImg" />
            <div className="slider-body">
              <h1>{item.headding}</h1>
              <p>At Analogue IT Solutions, we transform your ideas into meaningful user stories with our creative UI/UX development. Our expert UI/UX designers mainly focus on user expectations and incorporate the UX design practice in every stage of the app development cycle.</p>
              <p>At Analogue IT Solutions, we transform your ideas into meaningful user stories with our creative UI/UX development. Our expert UI/UX designers mainly focus on user expectations and incorporate the UX design practice in every stage of the app development cycle. We create interfaces that are aesthetically appealing, easy to navigate, and truly user-friendly. We build creative and impressive designs with our deep knowledge of web designing and implementing the latest technology trends in your business.</p>
            </div>
         
      </div>
        })}
     </div>
        
       
        
        <button className='btn-left' onClick={prevSlide}>
     <FaLessThan className='rightIcon' />
     </button>
    </div>
    </>
  )
}
