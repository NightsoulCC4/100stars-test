import { theme, Layout } from 'antd'
import React, { useEffect, useState } from 'react'
import Tables from './Tables';
import { AxiosResponse } from 'axios';
import { getCustomer } from '../service/customer';

const { Content } = Layout;

const Contents = () => {

    const [data, setData] = useState<AxiosResponse | undefined>();

  useEffect(() => {
    const getData = async () => {
      const res: AxiosResponse | undefined = await getCustomer();

      if (res != null) setData(res);
    };

    if (data == null) getData();
  });

const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Content style={{ padding: '20px 48px' }}>
        <div
          style={{
            background: colorBgContainer,
            maxHeight: '100vh',
            padding: 24,
            borderRadius: borderRadiusLG,
        }}
      >
        <Tables data={data?.data } />
        </div>
      </Content>
  )
}

export default Contents