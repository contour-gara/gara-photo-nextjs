"use client";

import { PhotoSelectdButton } from "@/shared/ui";
import { PhotoUploadButton } from "@/shared/ui";
import { useRef, useState } from "react";

export const ImageUploadForm = () => {
  const fileInputRef = useRef(null);
  const [photo, setPhoto] = useState<File>();

  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange: React.ChangeEventHandler<HTMLInputElement> = async (
    event
  ) => {
    if (event.target.files === null || event.target.files.length === 0) {
      return;
    }

    const file = event.target.files[0];
    console.log("Selected file:", file.name);
    setPhoto(file);
    console.log(photo);
  };

  return (
    <div className="flex flex-col">
      <div>
        <form id="postYesterday" className="text-[#E7E9EA]">
          <p>画像を選択してください</p>
          <input
            hidden
            type="file"
            multiple
            ref={fileInputRef}
            onChange={handleFileChange}
          />
        </form>
      </div>
      <div>
        <PhotoSelectdButton onClick={handleButtonClick} />
        <PhotoUploadButton isActive={photo != null} />
      </div>
    </div>
  );
};
