import { inputAnatomy } from '@chakra-ui/anatomy'
import { extendTheme, defineStyleConfig, withDefaultProps, createMultiStyleConfigHelpers } from '@chakra-ui/react'

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(inputAnatomy.keys)

const theme = extendTheme(
  {
    fonts: {
      heading: 'BasisGrotesqueArabicPro, sans-serif',
      body: 'BasisGrotesqueArabicPro, sans-serif',
    },
    colors: {
      brand: {
        300: '#316FEACC',
        500: '#316FEA',
      },
      gray: {
        250: '#D3D8DC',
        350: '#BEC5CC',
        450: '#A1ABB5',
      },
    },
    fontSizes: {
      lg: '16px',
    },
    components: {
      Button: defineStyleConfig({
        baseStyle: {
          fontWeight: 500,
        },
        variants: {
          solid: {
            backgroundColor: 'brand.500',
            color: 'white',
            borderRadius: 10,
            _hover: {
              backgroundColor: 'brand.300',
            },
          },
          outline: {
            border: '1.2px solid',
            borderColor: 'gray.250',
          },
        },
      }),
      Input: defineMultiStyleConfig({
        variants: {
          outline: definePartsStyle({
            field: {
              paddingInline: 3,
              border: '1.2px solid',
              borderColor: 'gray.250',
              _placeholder: {
                color: 'gray.450',
                opacity: 1,
              },
            },
          }),
        },
      }),
    },
  },
  withDefaultProps({
    defaultProps: {
      size: 'lg',
    },
    components: ['Button', 'Input'],
  }),
)

export default theme
