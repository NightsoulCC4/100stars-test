import { theme, Layout, Button } from 'antd'
import React, { useEffect, useState } from 'react'
import Tables from './Tables';
import { AxiosResponse } from 'axios';
import { getEmployee } from '../service/employee';

const { Content } = Layout;

const Contents = () => {

  const [data, setData] = useState<AxiosResponse | undefined>();
  const [CreateModal, setCreateModal] = useState<boolean>(false);

  useEffect(() => {
    const getData = async () => {
      const res: AxiosResponse | undefined = await getEmployee();

      if (res != null) setData(res);
    };

    if (data == null) getData();
  });

const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Content className="px-12 py-5">
      <Button
        type="primary"
        className="absolute float-right"
        onClick={() => setCreateModal(!CreateModal)}
            >
              Create
            </Button>
        <div
          style={{
            background: colorBgContainer,
        }}
        className="max-h-screen p-6 rounded-lg my-12"
      >
        <Tables data={data?.data } />
        </div>
      </Content>
  )
}

export default Contents