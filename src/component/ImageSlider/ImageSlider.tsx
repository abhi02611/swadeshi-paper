import { Box } from "@chakra-ui/react";
import SimpleImageSlider from "react-simple-image-slider";
import image from '../../assets/images/Frame.jpg';

const images = [
    { url: image },
    { url: image },
    { url: image },
];

export default function () {
  return (
      <Box>
          <SimpleImageSlider
              width={'100%'}
              height={'700px'}
              images={images}
              showBullets={true}
              showNavs={true}
          />
      </Box>
  )
}

