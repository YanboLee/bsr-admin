export const baseInfo = [{
  label: '真实姓名',
  id: 'real_name'
}, {
  label: '性别',
  id: 'gender'
}, {
  label: '户籍',
  id: 'region'
}, {
  label: '民族',
  id: 'nation'
}, {
  label: '身高',
  id: 'height'
}, {
  label: '体重',
  id: 'weight'
}, {
  label: '血型',
  id: 'blood_type'
}, {
  label: '政治面貌',
  id: 'politic'
}, {
  label: '出生地',
  id: 'birth_place'
}, {
  label: '身份证号',
  id: 'idcard_no'
}, {
  label: '保险情况',
  id: 'insurance_status'
}, {
  label: '护照号',
  id: 'passport_no'
}, {
  label: '重大疾病史',
  id: 'major_diseases'
}, {
  label: 'qq',
  id: 'qq'
}, {
  label: '药物过敏史',
  id: 'drug_allergy'
}, {
  label: '志愿北京编号',
  id: 'zybj_id'
}, {
  label: '蓝天uid',
  id: 'bsr_id'
}, {
  label: '现住址',
  id: 'current_place'
}, {
  label: '邮编',
  id: 'zipcode'
}, {
  label: '紧急联系人1',
  id: 'emergency1_name'
}, {
  label: '紧急联系人1关系',
  id: 'emergency1_relation'
}, {
  label: '紧急联系人1联系方式',
  id: 'emergency1_mobile'
}, {
  label: '紧急联系人2',
  id: 'emergency2_name'
}, {
  label: '紧急联系人2关系',
  id: 'emergency2_relation'
}, {
  label: '紧急联系人2联系方式',
  id: 'emergency2_mobile'
}, {
  label: '照片地址',
  id: 'head_pic'
}];

export const sillInfo = [{
  label: '医疗技能',
  id: 'medical_skill'
}, {
  label: '野外技能',
  id: 'wild_skill'
}, {
  label: 'gps技能',
  id: 'gps_skill'
}, {
  label: '无线电技能',
  id: 'radio_skill'
}, {
  label: '身体技能',
  id: 'body_skill'
}, {
  label: '其他技能',
  id: 'other_skill'
}, {
  label: '救援经历',
  id: 'rescue_history'
}, {
  label: '其他经历',
  id: 'orther_history'
}];

export const otherInfo = [{
  label: '最高教育',
  id: 'edu_type'
}, {
  label: '教育时间',
  id: 'edu_date'
}, {
  label: '教育学校',
  id: 'edu_place'
}, {
  label: '教育专业',
  id: 'edu_major'
}, {
  label: '职业时间',
  id: 'job_date'
}, {
  label: '职业部门',
  id: 'job_department'
}, {
  label: '职业公司',
  id: 'job_company'
}, {
  label: '职业地址',
  id: 'job_place'
}, {
  label: '个人简述',
  id: 'personal_brief'
}];

export default [
  {
    type: 'title',
    label: '基础信息'
  },
  ...baseInfo,
  {
    type: 'title',
    label: '技能信息'
  },
  ...sillInfo,
  {
    type: 'title',
    label: '其他信息'
  },
  ...otherInfo
];
