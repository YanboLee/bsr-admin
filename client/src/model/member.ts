import { baseInfo, sillInfo, otherInfo } from '@/page/member/createFormConfig';

export interface IMemberData {
  [index: string]: any;
}

const getDefaultData = () => {
  const defaultData: any = {};
  baseInfo.forEach((item) => {
    defaultData[item.id] = '';
  });
  sillInfo.forEach((item) => {
    defaultData[item.id] = '';
  });
  otherInfo.forEach((item) => {
    defaultData[item.id] = '';
  });
  return defaultData;
};

export const defaultMemberData: IMemberData = getDefaultData();
