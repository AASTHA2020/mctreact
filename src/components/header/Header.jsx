// import React, { useEffect, useRef, useState } from 'react';
// import { Link } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { logo } from '../../assets/index';
// import LocationOnIcon from '@mui/icons-material/LocationOn';
// import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
// import SearchIcon from '@mui/icons-material/Search';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// import { allItems } from '../../constants';
// import HeaderBottom from './HeaderBottom';
// import LogoutIcon from '@mui/icons-material/Logout';
// import { getAuth, signOut } from "firebase/auth";
// import { userSignOut } from '../../redux/amazonSlice';
// import { setSearchQuery, setSelectedCategory } from '../../redux/amazonSlice';

// const Header = () => {
//   const auth = getAuth();
//   const dispatch = useDispatch();
//   const [showAll, setShowAll] = useState(false);
//   const searchQuery = useSelector((state) => state.amazon.searchQuery);
//   const selectedCategory = useSelector((state) => state.amazon.selectedCategory);
//   const products = useSelector((state) => state.amazon.products);
//   const userInfo = useSelector((state) => state.amazon.userInfo);
//   const ref = useRef();

//   useEffect(() => {
//     document.body.addEventListener("click", (e) => {
//       if (e.target.contains(ref.current)) {
//         showAll && setShowAll(false);
//       }
//     })
//   }, [ref, showAll]);

//   const handleLogout = () => {
//     signOut(auth)
//       .then(() => {
//         console.log("Sign out successfully");
//         dispatch(userSignOut());
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }

//   const handleSearch = (e) => {
//     dispatch(setSearchQuery(e.target.value));
//   };

//   const handleCategorySelect = (category) => {
//     dispatch(setSelectedCategory(category));
//     setShowAll(false);
//   };
  

//   return (
//     <div className='w-full sticky top-0 z-50'>
//       <div className='w-full bg-amazon_blue text-white mx-auto px-4 py-2 flex items-center gap-4'>
//         <Link to="/">
//           <div className='headerHover'>
//             <img className='w-24 mt-2' src={logo} alt="" />
//           </div>
//         </Link>
//         <div className='headerHover hidden mdl:inline-flex'>
//           <LocationOnIcon />
//           <p className='text-sm text-lightText font-light flex flex-col'>
//             Deliver to
//             <span className='text-sm font-semibold text-whiteText'>Gwalior</span>
//           </p>
//         </div>
//         <div className='h-10 rounded-md hidden lgl:flex flex-grow relative'>
//           <span onClick={() => setShowAll(!showAll)} className='w-14 h-full bg-gray-200 hover:bg-gray-300 border-2 cursor-pointer duration-300 text-sm text-amazon_blue font-titlefont flex items-center justify-center rounded-tl-md rounded-bl-md'>
//             All <ArrowDropDownOutlinedIcon />
//           </span>
//           {showAll && (
//             <div>
//               <ul className='absolute w-56 h-50 top-10 left-0 overflow-y-scroll overflow-x-hidden bg-white border-[1px] border-amazon_blue text-black p-2 flex-col gap-1 z-50'>
//                 {allItems.map((item) => (
//                   <li key={item._id} className='text-sm tracking-wide font-titlefont border-b-[1px] border-b-transparent hover:border-b-amazon_blue cursor-pointer duration-200' onClick={() => handleCategorySelect(item.title)}>
//                     {item.title}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           )}
//           <input
//             className='h-full text-base text-amazon_blue flex-grow outline-none border-none px-2'
//             type="text"
//             value={searchQuery}
//             onChange={handleSearch}
//             placeholder={selectedCategory || 'Search'}
//           />
//           <span className='w-12 h-full flex items-center justify-center bg-amazon_yellow hover:bg-[#f3a847] duration-300 text-amazon_blue cursor-pointer rounded-tr-md rounded-br-md'>
//             <SearchIcon />
//           </span>
//         </div>
//         <Link to="/signin">
//           <div className='flex flex-col items-start justify-center headerHover'>
//             {userInfo ? (
//               <p className='text-sm mdl:text-xs text-gray-100 mdl:text-lightText font-medium'>Hello, {userInfo.userName}</p>
//             ) : (
//               <p className='text-sm mdl:text-xs text-white mdl:text-lightText font-light'>Hello, sign in</p>
//             )}
//             <p className='text-sm font-semibold -mt-1 text-whiteText hidden mdl:inline-flex'>
//               Account & Lists <ArrowDropDownOutlinedIcon />
//             </p>
//           </div>
//         </Link>
//         <div className='hidden lgl:flex flex-col items-start justify-center headerHover'>
//           <p className='text-xs text-lightText font-light'>Returns</p>
//           <p className='text-sm font-semibold -mt-1 text-whiteText'>& Orders</p>
//         </div>
//         <Link to="/cart">
//           <div className='relative flex flex-col items-start justify-center headerHover'>
//             <ShoppingCartIcon />
//             <p className='text-xs font-semibold mt-1 text-whiteText'>
//               Cart
//               <span className='absolute text-xs top-0 left-6 font font-semibold p-1 h-4 bg-[#f3a847] text-amazon_blue rounded-full flex justify-center items-center'>
//                 {products.length > 0 ? products.length : 0}
//               </span>
//             </p>
//           </div>
//         </Link>
//         {userInfo && (
//           <div onClick={handleLogout} className='flex flex-col justify-center items-center headerHover relative'>
//             <LogoutIcon />
//             <p className='hidden mdl:inline-flex text-xs font-semibold text-whiteText'>
//               Logout
//             </p>
//           </div>
//         )}
//       </div>
//       <HeaderBottom />
//     </div>
//   );
// };

// export default Header;


import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logo } from '../../assets/index';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { allItems } from '../../constants';
import HeaderBottom from './HeaderBottom';
import LogoutIcon from '@mui/icons-material/Logout';
import { getAuth, signOut } from "firebase/auth";
import { userSignOut } from '../../redux/amazonSlice';
import { setSearchQuery, setSelectedCategory } from '../../redux/amazonSlice';

const Header = () => {
  const auth = getAuth();
  const dispatch = useDispatch();
  const [showAll, setShowAll] = useState(false);
  const searchQuery = useSelector((state) => state.amazon.searchQuery);
  const selectedCategory = useSelector((state) => state.amazon.selectedCategory);
  const products = useSelector((state) => state.amazon.products);
  const userInfo = useSelector((state) => state.amazon.userInfo);
  const ref = useRef();

  useEffect(() => {
    document.body.addEventListener("click", (e) => {
      if (e.target.contains(ref.current)) {
        showAll && setShowAll(false);
      }
    })
  }, [ref, showAll]);

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        console.log("Sign out successfully");
        dispatch(userSignOut());
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const handleSearch = (e) => {
    dispatch(setSearchQuery(e.target.value));
  };

  const handleCategorySelect = (category) => {
    dispatch(setSelectedCategory(category));
    setShowAll(false);
  };
  

  return (
    <div className='w-full sticky top-0 z-50'>
      <div className='w-full bg-amazon_blue text-white mx-auto px-4 py-2 flex items-center gap-4'>
        <Link to="/">
          <div className='headerHover'>
            <img className='w-24 mt-2' src={logo} alt="" />
          </div>
        </Link>
        <div className='headerHover hidden mdl:inline-flex'>
          <LocationOnIcon />
          <p className='text-sm text-lightText font-light flex flex-col'>
            Deliver to
            <span className='text-sm font-semibold text-whiteText'>Gwalior</span>
          </p>
        </div>
        <div className='h-10 rounded-md hidden lgl:flex flex-grow relative'>
          <span onClick={() => setShowAll(!showAll)} className='w-14 h-full bg-gray-200 hover:bg-gray-300 border-2 cursor-pointer duration-300 text-sm text-amazon_blue font-titlefont flex items-center justify-center rounded-tl-md rounded-bl-md'>
            All <ArrowDropDownOutlinedIcon />
          </span>
          {showAll && (
            <div>
              <ul className='absolute w-56 h-50 top-10 left-0 overflow-y-scroll overflow-x-hidden bg-white border-[1px] border-amazon_blue text-black p-2 flex-col gap-1 z-50'>
                {allItems.map((item) => (
                  <li key={item._id} className='text-sm tracking-wide font-titlefont border-b-[1px] border-b-transparent hover:border-b-amazon_blue cursor-pointer duration-200' onClick={() => handleCategorySelect(item.title)}>
                    {item.title}
                  </li>
                ))}
              </ul>
            </div>
          )}
          <input
            className='h-full text-base text-amazon_blue flex-grow outline-none border-none px-2'
            type="text"
            value={searchQuery}
            onChange={handleSearch}
            placeholder={selectedCategory || 'Search'}
          />
          <span className='w-12 h-full flex items-center justify-center bg-amazon_yellow hover:bg-[#f3a847] duration-300 text-amazon_blue cursor-pointer rounded-tr-md rounded-br-md'>
            <SearchIcon />
          </span>
        </div>
        <Link to="/signin">
          <div className='flex flex-col items-start justify-center headerHover'>
            {userInfo ? (
              <p className='text-sm mdl:text-xs text-gray-100 mdl:text-lightText font-medium'>Hello, {userInfo.userName}</p>
            ) : (
              <p className='text-sm mdl:text-xs text-white mdl:text-lightText font-light'>Hello, sign in</p>
            )}
            <p className='text-sm font-semibold -mt-1 text-whiteText hidden mdl:inline-flex'>
              Account & Lists <ArrowDropDownOutlinedIcon />
            </p>
          </div>
        </Link>
        <Link to="/orders">
          <div className='hidden lgl:flex flex-col items-start justify-center headerHover'>
            <p className='text-xs text-lightText font-light'>Returns</p>
            <p className='text-sm font-semibold -mt-1 text-whiteText'>& Orders</p>
          </div>
        </Link>
        <Link to="/cart">
          <div className='relative flex flex-col items-start justify-center headerHover'>
            <ShoppingCartIcon />
            <p className='text-xs font-semibold mt-1 text-whiteText'>
              Cart
              <span className='absolute text-xs top-0 left-6 font font-semibold p-1 h-4 bg-[#f3a847] text-amazon_blue rounded-full flex justify-center items-center'>
                {products.length > 0 ? products.length : 0}
              </span>
            </p>
          </div>
        </Link>
        {userInfo && (
          <div onClick={handleLogout} className='flex flex-col justify-center items-center headerHover relative'>
            <LogoutIcon />
            <p className='hidden mdl:inline-flex text-xs font-semibold text-whiteText'>
              Logout
            </p>
          </div>
        )}
      </div>
      <HeaderBottom />
    </div>
  );
};

export default Header;

