// import { RemoveFormattingIcon } from "lucide-react";
// import React, { useState } from "react";
// const Product = () => {
//   const [file, setFile] = useState([]);

//   const handleFile = (event) => {
//     setFile(URL.createObjectURL(event.target.files[0]));
//     onchange(URL.createObjectURL(event.target.files[0]));
//   };
//   const onClick=()=>{
//     setFile([]);
//   }
//   return (
//     <>
//     <div className="relative">

//       <img src={file}/>
//     <div className="absolute top-10 right-3 cursor-pointer" onClick={onClick}>
//      <RemoveFormattingIcon/>
//     </div>
//     </div>
//       <input hidden type="file" onChange={handleFile}></input>
//     </>
//   );
// };

// export default Product;