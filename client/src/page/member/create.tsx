import React, { FC, useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
  Input, Button, message
} from 'antd';
import '@/style/member.scss';
import { defaultMemberData } from '@/model/member';
import { memberCreate } from '@/lib/apis';
import formConfig from './createFormConfig';

const App: FC = () => {
  const history = useHistory();
  const [data, setData] = useState(defaultMemberData);
  const handleDataChange = (e: React.ChangeEvent<HTMLInputElement>, name: string) => {
    setData({
      ...data,
      [name]: e.target.value
    });
  };
  const submitData = async () => {
    try {
      const param = Object.assign(data, { mobile: '3' });
      const res = await memberCreate(param);
      if (res.data.result === 1) {
        message.info(res.data.message);
        history.push('/member');
      }
      console.log(res);
    } catch (error) {
      message.error(error.message);
    }
  };
  return (
    <div className="member-create-panel">
      {
        formConfig.map((item: any) => {
          let ele;
          if (item.type === 'title') {
            ele = <div key={item.label} className="title">{item.label}</div>;
          } else {
            ele = (
              <div className="input-filed" key={item.label}>
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
      <Button onClick={submitData}>submit</Button>
    </div>
  );
};

export default App;
