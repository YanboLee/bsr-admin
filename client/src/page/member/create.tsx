import React, { FC, useState } from 'react';
import { connect } from 'react-redux';
import { ILoginUser } from '@/model/loginUser';
import { StoreState } from '@/store/types';
import { useHistory } from 'react-router-dom';
import {
  Input, Button, message
} from 'antd';
import '@/style/member.scss';
import { defaultMemberData } from '@/model/member';
import { memberCreate } from '@/lib/apis';
import formConfig from './createFormConfig';

export interface ILoginProps {
  loginUser: ILoginUser,
}

const App: FC<ILoginProps> = () => {
  // const { loginUser } = props;
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
      const res = await memberCreate(data);
      if (res.data.result === 1) {
        message.info(res.data.message);
        history.push('/member');
      }
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

const mapStateToProps = (state: StoreState): { loginUser: ILoginUser } => ({
  loginUser: state.loginUser
});

export default connect(mapStateToProps)(App);
