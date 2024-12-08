import 'antd/dist/antd.css' // Import Ant Design styles
import { ConfigProvider } from 'antd'

function MyApp({ Component, pageProps }) {
  return (
    <ConfigProvider>
      <Component {...pageProps} />
    </ConfigProvider>
  )
}

export default MyApp
