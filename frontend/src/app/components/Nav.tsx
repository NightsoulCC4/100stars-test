import React from 'react';
import { Layout } from 'antd';
import Title from 'antd/es/typography/Title';

const { Header } = Layout;

const Nav: React.FC = () => {

  return (
    <>
      <Header style={{ display: 'flex', alignItems: 'center' }}>
        <Title level={2} style={{ color: 'white' }}>CRUD Employee</Title>
      </Header>
    </>
  );
};

export default Nav;