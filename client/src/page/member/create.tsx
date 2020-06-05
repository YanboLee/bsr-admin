import React, { FC, useState } from 'react';
import {
  Input, Button
} from 'antd';
import '@/style/member.scss';
import formConfig from './createFormConfig';

interface IMemberData {
  [index: string]: any;
}

const defaultMemberData: IMemberData = {
  real_name: '',
  gender: '',
  region: '',
  nation: '',
  height: '',
  weight: '',
  blood_type: '',
  politic: '',

};


const App: FC = () => {
  const [data, setData] = useState(defaultMemberData);
  const handleDataChange = (e: React.ChangeEvent<HTMLInputElement>, name: string) => {
    setData({
      ...data,
      [name]: e.target.value
    });
  };
  return (
    <div className="member-create-panel">
      {
        formConfig.map((item: any) => {
          let ele;
          if (item.type === 'title') {
            ele = <div className="title">{item.label}</div>;
          } else {
            ele = (
              <div className="input-filed">
                <span>{item.label}</span>
                <Input
                  value={data[item.id]}
                  onChange={(e) => handleDataChange(e, item.id)}
                />
              </div>
            );
          }
          return ele;
        })
      }
      <Button>submit</Button>
    </div>
  );
};

export default App;
