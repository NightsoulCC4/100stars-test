import React from 'react';
import { Layout, theme } from 'antd';

const { Footer } = Layout;

const Footers: React.FC = () => {

  return (
    <>
      <Footer style={{ textAlign: 'center' }}>
        Ant Design ©{new Date().getFullYear()} Created by Ant UED
      </Footer>
    </>
  );
};

export default Footers;