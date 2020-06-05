import React, { FC, useState } from 'react';
import PageLayout from '@/page/layout/index';

import { Button } from 'antd';
import { Line } from '@ant-design/charts';
// import { getChartTest } from '@/lib/apis';

interface pageState {
  list: any
}

const Page: FC = () => {
  const defaultData: pageState = {
    list: [
      { year: '1991', value: 0 },
      { year: '1992', value: 0 },
      { year: '1993', value: 0 },
      { year: '1994', value: 0 },
      { year: '1995', value: 0 },
      { year: '1996', value: 0 },
      { year: '1997', value: 0 },
      { year: '1998', value: 0 },
      { year: '1999', value: 0 },
    ],
  };
  const [data] = useState(defaultData);
  const getTest = async () => {
    // try {
    //   const res = await getChartTest();
    //   setData({
    //     list: res.data.data
    //   });
    // } catch (error) {
    //   console.log(error);
    // }
  };
  const config = {
    data: data.list,
    title: {
      visible: true,
      text: 'chart demo',
    },
    xField: 'year',
    yField: 'value',
  };
  return (
    <PageLayout>
      <div>
        <Button type="primary" onClick={getTest}>Button</Button>
        <Line {...config} />
      </div>
    </PageLayout>
  );
};
export default Page;
