import { RemoveFormattingIcon } from "lucide-react";
import React, { useState } from "react";
const UploadImage = () => {
  const [file, setFile] = useState([]);

  return (
    <>
      <div className="relative">
        <div className="absolute top-10 right-3 cursor-pointer">
          <RemoveFormattingIcon />
        </div>
      </div>
      <input hidden type="file"></input>
    </>
  );
};

export default UploadImage;
