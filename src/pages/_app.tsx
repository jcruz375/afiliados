import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { ConfigProvider } from 'antd';
import theme from '../theme/themeConfig';
import LayoutMain from '../components/layout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ConfigProvider theme={theme}>
      <LayoutMain>
        <Component {...pageProps} />
      </LayoutMain>
    </ConfigProvider>
  )
}

export default MyApp
