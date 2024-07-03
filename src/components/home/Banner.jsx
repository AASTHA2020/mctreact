// import React, { useState } from 'react';
// import Slider from "react-slick";
// import {
//     bannerImgOne,
//     bannerImgTwo,
//     bannerImgThree,
//     bannerImgFour,
//     bannerImgFive,
// } from "../../assets/index";

// const Banner = () => {
//     const [dotActive, setDotActive] = useState(0);

//     const settings = {
//         dots: true,
//         infinite: true,
//         autoplay: true,
//         autoplaySpeed: 3000, // Change slide every 3 seconds
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         arrows: false,
//         beforeChange: (prev, next) => {
//             setDotActive(next);
//         },
//         appendDots: dots => (
//             <div
//                 style={{
//                     position: "absolute",
//                     top: "70%",
//                     left: "45%",
//                     transform: "translate(-50%,-50%)",
//                     width: "210px"
//                 }}
//             >
//                 <ul style={{
//                     width: "100%",
//                     display: "flex",
//                     alignItems: "center",
//                     justifyContent: "space-between",
//                 }}> {dots} </ul>
//             </div>
//         ),
//         customPaging: i => (
//             <div
//                 style={{
//                     width: dotActive === i ? "30px" : "20px",
//                     height: dotActive === i ? "30px" : "20px",
//                     borderRadius: "50%",
//                     display: "flex",
//                     alignItems: "center",
//                     justifyContent: "center",
//                     color: dotActive === i ? "white" : "black",
//                     background: dotActive === i ? "#131921" : "#f3f3f3",
//                     padding: "8px 0",
//                     cursor: "pointer",
//                     border: dotActive === i ? "1px solid #f3a847" : "1px solid transparent",
//                     transition: "all 0.3s ease"
//                 }}
//             >
//                 {i + 1}
//             </div>
//         ),
//         responsive: [
//             {
//                 breakpoint: 1024,
//                 settings: {
//                     slidesToShow: 3,
//                     slidesToScroll: 3,
//                     infinite: true,
//                     dots: true
//                 }
//             },
//             {
//                 breakpoint: 600,
//                 settings: {
//                     slidesToShow: 2,
//                     slidesToScroll: 2,
//                     initialSlide: 2
//                 }
//             },
//             {
//                 breakpoint: 480,
//                 settings: {
//                     slidesToShow: 1,
//                     slidesToScroll: 1
//                 }
//             }
//         ]
//     };

//     return (
//         <div className='w-full'>
//             <div className='w-full h-full relative'>
//                 <Slider {...settings}>
//                     <div>
//                         <img src={bannerImgOne} alt="Banner 1" />
//                     </div>
//                     <div>
//                         <img src={bannerImgTwo} alt="Banner 2" />
//                     </div>
//                     <div>
//                         <img src={bannerImgThree} alt="Banner 3" />
//                     </div>
//                     <div>
//                         <img src={bannerImgFour} alt="Banner 4" />
//                     </div>
//                     <div>
//                         <img src={bannerImgFive} alt="Banner 5" />
//                     </div>
//                 </Slider>
//             </div>
//         </div>
//     );
// }

// export default Banner;


import React, { useState } from "react";
import Slider from "react-slick";
import {
  bannerImgOne,
  bannerImgTwo,
  bannerImgThree,
  bannerImgFour,
  bannerImgFive,
} from "../../assets/index";

const Banner = () => {
  const [dotActive, setDocActive] = useState(0);
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    beforeChange: (prev, next) => {
      setDocActive(next);
    },
    appendDots: (dots) => (
      <div
        style={{
          position: "absolute",
          top: "70%",
          left: "50%",
          transform: "translate(-50%, 0)",
          width: "210px",
        }}
      >
        <ul
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {dots}
        </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={
          i === dotActive
            ? {
                width: "30px",
                height: "30px",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                background: "#131921",
                padding: "8px 0",
                cursor: "pointer",
                border: "1px solid #f3a847",
              }
            : {
                width: "30px",
                height: "30px",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "#232F3E",
                color: "white",
                padding: "8px 0",
                cursor: "pointer",
                border: "1px solid white",
              }
        }
      >
        {i + 1}
      </div>
    ),
    responsive: [
      {
        breakpoint: 500,
        settings: {
          dots: true,
          appendDots: (dots) => (
            <div
              style={{
                position: "absolute",
                top: "60%",
                left: "50%",
                transform: "translate(-50%, 0)",
                width: "150px",
              }}
            >
              <ul
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  fontSize: "12px",
                }}
              >
                {" "}
                {dots}{" "}
              </ul>
            </div>
          ),
          customPaging: (i) => (
            <div
              style={
                i === dotActive
                  ? {
                      width: "25px",
                      height: "25px",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "white",
                      background: "#131921",
                      padding: "8px 0",
                      cursor: "pointer",
                      border: "1px solid #f3a847",
                    }
                  : {
                      width: "25px",
                      height: "25px",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background: "#232F3E",
                      color: "white",
                      padding: "8px 0",
                      cursor: "pointer",
                      border: "1px solid white",
                    }
              }
            >
              0{i + 1}
            </div>
          ),
        },
      },
    ],
  };
  return (
    <div className="w-full">
      <div className="w-full h-full relative">
        <Slider {...settings}>
          <div>
            <img src={bannerImgOne} alt="bannerImgOne" />
          </div>
          <div>
            <img src={bannerImgTwo} alt="bannerImgTwo" />
          </div>
          <div>
            <img src={bannerImgThree} alt="bannerImgThree" />
          </div>
          <div>
            <img src={bannerImgFour} alt="bannerImgFour" />
          </div>
          <div>
            <img src={bannerImgFive} alt="bannerImgFive" />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Banner;