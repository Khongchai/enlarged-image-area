import { Box, Image } from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";

const EnlargedImages: React.FC<{
  dependencyData: any | null;
}> = ({ dependencyData }) => {
  const [imageLink, setImageLink] = useState<string | null>(null);
  const enlargedImage = useRef(null);
  useEffect(() => {
    let images = document.getElementsByClassName(
      "enlargeable"
    ) as unknown as HTMLImageElement[];
    if (images?.length > 0) {
      for (let i = 0; i < images.length; i++) {
        images[i].style.cursor = "zoom-in";
        images[i].addEventListener("click", (e) => {
          setImageLink(images[i].src);
        });
      }
    }
  }, [dependencyData]);

  useEffect(() => {
    if (enlargedImage.current) {
      const img = enlargedImage.current as unknown as HTMLImageElement;
      if (!imageLink) {
        img.style.opacity = "0";
        img.style.pointerEvents = "none";
      } else {
        img.style.opacity = "1";
        img.style.pointerEvents = "unset";
      }
    }
  }, [imageLink]);

  return (
    <>
      <Box
        onClick={() => {
          setImageLink(null);
        }}
        position="fixed"
        top="0"
        pointerEvents="none"
        enlargedImage
        opacity="0"
        left="0"
        width="100vw"
        height="100vh"
        zIndex="200"
        display="grid"
        placeItems="center"
        transition=".3s"
        background="rgba(0,0,0,0.9)"
        _hover={{ cursor: "zoom-out" }}
        ref={enlargedImage}
      >
        {imageLink ? (
          <Image
            //If image link is null, take the new data
            //if iamgelik is not null, check first if new data is null,
            //if new data is null, component will fade out, don't pull out image
            //only pull out image when new data is different and not null
            src={imageLink}
            transition=".3s"
            alt="enlargedImage"
            maxWidth="80%"
            maxHeight="100vh"
          />
        ) : null}
      </Box>
    </>
  );
};

export default EnlargedImages;
