import React from 'react';
import { AntdRegistry } from '@ant-design/nextjs-registry';
// import { NextUIProvider } from '@nextui-org/react';

const RootLayout = ({ children }) => (
  <html lang="en">
    <body>
      <AntdRegistry>
        {/* <NextUIProvider> */}
          {children}
        {/* </NextUIProvider> */}
      </AntdRegistry>
    </body>
  </html>
);

export default RootLayout;