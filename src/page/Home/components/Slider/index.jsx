// import React, { useState } from 'react'

// const { useState } = require("react");
// const { default: Item } = require("./Item");

// const Slider = () => {
//     const [state, setState] = useState([
//         {
//         stage:'stage ',
//         img:'https://staging.postlater.io/assets/landing/img/color-stage-1.png',
//         title:'Publish'
//     },
//     {
//         stage:'stage ',
//         img:'https://staging.postlater.io/assets/landing/img/color-stage-2.png',
//         title:'Engage'
//     },
//     {
//         stage:'stage ',
//         img:'https://staging.postlater.io/assets/landing/img/color-stage-3.png',
//         title:'Monitor'
//     },
//     {
//         stage:'stage ',
//         img:'https://staging.postlater.io/assets/landing/img/color-stage-4.png',
//         title:'Analyze'
//     },
//     {
//         stage:'stage ',
//         img:'https://staging.postlater.io/assets/landing/img/color-stage-5.png',
//         title:'Autorespond'
//     },
//     {
//         stage:'stage ',
//         img:'https://staging.postlater.io/assets/landing/img/color-stage-6.png',
//         title:'Competitive Analysis'
//     },
//     {
//         stage:'stage ',
//         img:'https://staging.postlater.io/assets/landing/img/color-stage-7.png',
//         title:'Team Member Access'
//     }
// ])
//   return (
//     <div>
// {state.map((item) => (
//             <div key={item.id}>
//               <img src={item.img}  alt={item.alt} />
//             </div>
//           ))}
//     </div>
//   )
// }

// export default Slider


// var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

// class Carousel extends React.Component {

//     constructor(props) {
//         super(props)
//         this.state = {
//             items: this.props.items,
//             active: this.props.active,
//             direction: ''
//         }
//         this.rightClick = this.moveRight.bind(this)
//         this.leftClick = this.moveLeft.bind(this)
//     }

//     generateItems() {
//         var items = []
//         var level
//         console.log(this.state.active)
//         for (var i = this.state.active - 2; i < this.state.active + 3; i++) {
//             var index = i
//             if (i < 0) {
//                 index = this.state.items.length + i
//             } else if (i >= this.state.items.length) {
//                 index = i % this.state.items.length
//             }
//             level = this.state.active - i
//             items.push(<Item key={index} id={this.state.items[index]} level={level} />)
//         }
//         return items
//     }

//     moveLeft() {
//         var newActive = this.state.active
//         newActive--
//         this.setState({
//             active: newActive < 0 ? this.state.items.length - 1 : newActive,
//             direction: 'left'
//         })
//     }

//     moveRight() {
//         var newActive = this.state.active
//         this.setState({
//             active: (newActive + 1) % this.state.items.length,
//             direction: 'right'
//         })
//     }

//     render() {
//         return(
//             <div id="carousel" className="noselect">
//                 <div className="arrow arrow-left" onClick={this.leftClick}><i className="fi-arrow-left"></i></div>
//                 <ReactCSSTransitionGroup 
//                     transitionName={this.state.direction}>
//                     {this.generateItems()}
//                 </ReactCSSTransitionGroup>
//                 <div className="arrow arrow-right" onClick={this.rightClick}><i className="fi-arrow-right"></i></div>
//             </div>
//         )
//     }
// }

// class Item extends React.Component {

//     constructor(props) {
//         super(props)
//         this.state = {
//             level: this.props.level
//         }
//     }

//     render() {
//         const className = 'item level' + this.props.level
//         return(
//             <div className={className}>
//                 {this.props.id}
//             </div>
//         )
//     }
// }

// var items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// ReactDOM.render(<Carousel items={items} active={0}/>, document.getElementById('app'))

// import React, { useState}from "react";
// import Slider from "react-slick";

//  const MultipleRows =  ()=> {
//     const [state, setState] = useState([
//                 {
//                 stage:'stage ',
//                 img:'https://staging.postlater.io/assets/landing/img/color-stage-1.png',
//                 title:'Publish'
//             },
//             {
//                 stage:'stage ',
//                 img:'https://staging.postlater.io/assets/landing/img/color-stage-2.png',
//                 title:'Engage'
//             },
//             {
//                 stage:'stage ',
//                 img:'https://staging.postlater.io/assets/landing/img/color-stage-3.png',
//                 title:'Monitor'
//             },
//             {
//                 stage:'stage ',
//                 img:'https://staging.postlater.io/assets/landing/img/color-stage-4.png',
//                 title:'Analyze'
//             },
//             {
//                 stage:'stage ',
//                 img:'https://staging.postlater.io/assets/landing/img/color-stage-5.png',
//                 title:'Autorespond'
//             },
//             {
//                 stage:'stage ',
//                 img:'https://staging.postlater.io/assets/landing/img/color-stage-6.png',
//                 title:'Competitive Analysis'
//             },
//             {
//                 stage:'stage ',
//                 img:'https://staging.postlater.io/assets/landing/img/color-stage-7.png',
//                 title:'Team Member Access'
//             }
//         ])

//             const settings = {
//               className: "center",
//               centerMode: true,
//               infinite: true,
//               centerPadding: "60px",
//               slidesToShow: 3,
//               speed: 500,
//               rows: 2,
//               slidesPerRow: 2
//             };
//     return (
//       <div>

//         <Slider {...settings}>

//           <div>
//  {state.map((item) => (
//             <div key={item.id} style ={{display:'flex'}}>
//             <div> <img src={item.img}  alt={item.alt} /></div> 
//             </div>
//           ))}
//     </div>
//         </Slider>
//       </div>
//     );
//   }

// export default MultipleRows

// import React, { useState } from 'react'
// import { SECTION2 } from '../Section/data'
// import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
// import NavigateNextIcon from '@mui/icons-material/NavigateNext';

// const Slider = ({slides}) => {
//     const [current,setCurrent]= useState(0)
//     const length = slides.length 

//     const nextSlide = ()=>{
//         setCurrent(current === length-1 ? 0 : current +1)
//     }
//     const prevSlide = ()=>{
//         setCurrent(current === 0 ? length-1 :current-1)
//     }
// if(!Array.isArray(slides)|| slides.length <= 0){
//     return null
// }

//   return (




//              <div className='sliderContainer' >
//                 <KeyboardArrowLeftIcon onClick ={prevSlide}/>
//                <NavigateNextIcon onClick = {nextSlide}/>
//       {/* {SECTION2.map((item,index) => {
//         return(

//             <div key={item.id} className={index === current? 'slideActive':'slide'}>
//              {index === current &&   ( 
//             <div> <img src={item.img}  alt={item.alt} /></div>
//               ) } 

//             </div>


//         )


//              })} */}
//               <div className='slider' >
//   {SECTION2.map((item,index) => (
//      <div className={index === current? 'slideActive':'slide'}>
//             <div key={item.id}  className='slider__cart'>
//               <div>{item.stage}</div>
//             <div className='slider__cart-inner'> <img src={item.img}  alt={item.alt} /></div> 

//             </div>
//             </div>
//           ))}
//         </div>
//         </div>


//   )
// }

// export default Slider






import React, { useState } from "react";

import Slider from "react-slick";
import { SECTION2 } from "../Section/data";
import arrow from '../../../../assets/images/yellow-arrow.png'
import './Slider.scss'

const CenterMode = () => {

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 6.34,
    speed: 500
  };

  const [toggle, setToggle] = useState();
  const [visible, setVisible] = useState(true);
 
  return (
    <>
   
      <div className="container">
      <div className="slide-arrow" ><img src={arrow} alt=""  /></div>
      <div className="slide-arrowRight" ><img src={arrow} alt="" /></div>
      
       
        <style>{cssstyle}</style>

        <Slider {...settings}>
          {/* <div >
       
          <div><p  style={{textAlign:'center',fontSize: '18px',color:' #2d2d2d'}} >stage 1</p></div>
          <h3 > 
             <img src="https://staging.postlater.io/assets/landing/img/color-stage-1.png" alt="" />
             <div ><p  style={{textAlign:'center',color:' #2d2d2d'}}>Publish</p></div>
             </h3>
          </div>

          <div >
          <div className="slide-inner"><p style={{textAlign:'center',fontSize: '18px',color:' #2d2d2d'}}>stage 2</p></div>
         <h3 className="slide-item1"> 
        
            <img src="https://staging.postlater.io/assets/landing/img/color-stage-2.png" alt="" />
            <div><p  style={{textAlign:'center',color:' #2d2d2d'}}>Engage</p></div>
            </h3>
          </div>

          <div>
          <div><p style={{textAlign:'center',fontSize: '18px',color:' #2d2d2d'}}>stage 3</p></div>
    
         <h3 className="slide-item2">
         
             <img src="https://staging.postlater.io/assets/landing/img/color-stage-3.png" alt="" />
             <div><p  style={{textAlign:'center',color:' #2d2d2d'}}>Monitor</p></div>
             </h3>
          </div>

          <div>
          <div><p style={{textAlign:'center',fontSize: '18px',color:' #2d2d2d'}}>stage 4</p></div>
         <h3 className="slide-item3" >
      
            <img src="https://staging.postlater.io/assets/landing/img/color-stage-4.png" alt="" />
            <div><p  style={{textAlign:'center',color:' #2d2d2d'}}> Analyze</p></div>
            </h3> 
          </div>

          <div>
          <div><p style={{textAlign:'center',color:' #2d2d2d'}}>stage 5</p></div>
          
         <h3 className="slide-item3">
         
             <img src="https://staging.postlater.io/assets/landing/img/color-stage-5.png" alt="" />
             <div><p  style={{textAlign:'center',color:' #2d2d2d'}}>Autorespond</p></div>
             </h3>
          </div>

          <div>
          <div><p style={{textAlign:'center',fontSize: '18px',color:' #2d2d2d'}}>stage 6</p></div>
        <h3 className="slide-item2"> 
        
            <img src="https://staging.postlater.io/assets/landing/img/color-stage-6.png" alt="" />
            <div><p  style={{textAlign:'center',color:' #2d2d2d'}}>Competitive</p></div>
            </h3> 
          </div>

          <div>
          <div><p style={{textAlign:'center',fontSize: '18px',color:' #2d2d2d'}}>stage 7</p></div>
         <h3 className="slide-item1"> 
            <img src="https://staging.postlater.io/assets/landing/img/color-stage-7.png" alt="" />
            <div><p  style={{textAlign:'center',color:' #2d2d2d'}}>Team </p></div>
            </h3>
          </div>
           */}
          {SECTION2.map((item, index, key,id) =>
       
            <div  key={index}  >
              <div style={{
              height:item.height-20,
            }} >
                
                <div><p style={{ textAlign: 'center', fontSize: '18px', color: ' #2d2d2d' }}>{item.stage}{++index}</p></div>

               <h3  className="slide-item1"  >
                  <img src={item.img } alt=""  />
                  <div><p style={{ textAlign: 'center', fontSize: '8px', color: ' #2d2d2d',fontWeight:'bold' }}>{item.title}</p></div>
                </h3>
               
              </div>
          
             </div>
          
          
            
          )}
           
          
        </Slider>
      </div>
    </>
  );

}

const cssstyle = `
.container {
  margin: 0 auto;
  padding: 0px 40px 0px 40px;
  width: 100%;
}
.slick-slide{
    width:100px
    background-color:red;
}
h3 {
  
    // width:200px
    font-size: 56px;
    // line-height: 100px;
    // margin: 88px;
    // margin-left: 62px;
    //  padding: 40px 40px;
    position: relative;
    text-align: center;
    margin-left:50px

   
  
    
}



.slick-next:before, .slick-prev:before {
    // color: white;
    border: 0;
    cursor: pointer;
    font-size: 30px;
    height: 100px;
    // margin: 0 35px;
    // padding: 0 12px;
    text-transform: capitalize;
    width: 120px;
    content: '';


   
}
.center .slick-center h3 {
    color: #e67e22;
    opacity: 1;
    // font-size:10px;
    -ms-transform: scale(3);
    transform: scale(3);
    margin-top:40px 
    
   
  
}
.center h3 {
    transition: all .10s ease;
    // height:20px
   
   
}

// .container div div h3  :nth-child( 1){
//   // background-color: #7c12e7;
//   -ms-transform: scale(2);
//   transform: scale(2);
  

// }
.slick-prev  {
    font-size: 0;
    line-height: 0;
    top: 50%;
    width: 20px;
    height: 20px;
    -webkit-transform: translate(0,-50%);
    -ms-transform: translate(0,-50%);
    transform: translate(0,-50%);
    cursor: pointer;
    color: transparent;
    border: none;
    outline: 0;
    background: 0 0;
}

  .slick-prev {
    position: absolute;
    // display: block;
    display:flex;
    align-items:center;
    padding: 0;
    top:200px;
    left:38%;
    z-index:666
 
}
 .slick-next {
    position: absolute;
    // display: block;
    padding: 0;
    top:200px;
    right:38%
    
    
 
}
// .slick-arrow.slick-prev{
//     background:yellow;
    
//     color:red;
// }

`;
export default CenterMode
// import React, { useState } from "react";
// import Item from "./Item";

// import ReactCSSTransitionGroup from 'react-transition-group';
// import {
//   CSSTransition,
//   TransitionGroup,
// } from 'react-transition-group';
// // class Carousel extends React.Component {
//   const Carousel = (props) =>{
//     // var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;
// const [items,setItems] = useState(props.items);
// const [active,setActive] = useState(props.active);
// const [direction,setDirection]= useState("")

// const generateItems = () =>{
//   let items = [];
//   let level;
//   console.log(active)
//   for(let i = active-2;i<active+3;i++){
//     let index = i;
//     if(i<0){
//       index = items?.length+i;
//     }else if (i >= items.length) {
//       index = i % items.length
//   }
//   level = active - i
//       items.push(<Item key={index} id={items[index]} level={level} />)
//   }
//   return items;
// }

// const moveLeft = ()=> {
//   let newActive = active
//   newActive--
//   setActive(newActive < 0 ? items.length - 1 : newActive)
//   setDirection("left")
// }

// const moveRight =()=> {
//   let newActive = active
//   setActive((newActive + 1) % items.length)
//   setDirection("right")
// }

// return(
//   <div id="carousel" className="noselect">
//       <TransitionGroup
//        transitionname={direction}>
          
      
//       <div className="arrow arrow-left" onClick={moveLeft}><i className="fi-arrow-left"></i></div>
    
//       {generateItems()}
  
         
       

      
  
//       <div className="arrow arrow-right" onClick={moveRight}><i className="fi-arrow-right"></i></div>
//       </TransitionGroup>
//   </div>
// )



//   }
//   export default Carousel;
    
  