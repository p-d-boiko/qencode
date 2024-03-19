import type { FC } from 'react'
import { Global } from '@emotion/react'

const Fonts: FC = () => (
  <Global
    styles={`
      @font-face {
        font-family: 'BasisGrotesqueArabicPro';
        src: url('fonts/BasisGrotesqueArabicPro-Blank.ttf') format('truetype');
        font-weight: 900;
        font-style: normal;
      }

      @font-face {
        font-family: 'BasisGrotesqueArabicPro';
        src: url('fonts/BasisGrotesqueArabicPro-Bold.ttf') format('truetype');
        font-weight: 700;
        font-style: normal;
      }

      @font-face {
        font-family: 'BasisGrotesqueArabicPro';
        src: url('fonts/BasisGrotesqueArabicPro-Light.ttf') format('truetype');
        font-weight: 300;
        font-style: normal;
      }

      @font-face {
        font-family: 'BasisGrotesqueArabicPro';
        src: url('fonts/BasisGrotesqueArabicPro-Medium.ttf') format('truetype');
        font-weight: 500;
        font-style: normal;
      }

      @font-face {
        font-family: 'BasisGrotesqueArabicPro';
        src: url('fonts/BasisGrotesqueArabicPro-Regular.ttf') format('truetype');
        font-weight: 400;
        font-style: normal;
      }
    `}
  />
)

export { Fonts }
