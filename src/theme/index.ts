import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  styles: {
    global: {
      'html, body': {
        fontFamily: 'Noto Sans SC, sans-serif', // 设置全局字体
      },
    },
  },
});

export default theme;
