export interface IArticleData {
  id: number
  status: string
  title: string
  abstractContent: string
  fullContent: string
  sourceURL: string
  imageURL: string
  timestamp: string | number
  platforms: string[]
  disableComment: boolean
  importance: number
  author: string
  reviewer: string
  type: string
  pageviews: number
}

export interface IRoleData {
  key: string
  name: string
  description: string
  routes: any
}

export interface ITransactionData {
  orderId: string
  timestamp: string | number
  username: string
  price: number
  status: string
}

export interface IUserData {
  id: number
  username: string
  password: string
  name: string
  email: string
  phone: string
  avatar: string
  introduction: string
  roles: string[]
}

export interface IMemberData {
  // 队员模型
  mobile: number
  real_name: string
  gender: string
  region: string
  nation: string
  height: string
  weight: string
  blood_type: string
  politic: string
  birth_place: string
  idcard_no: string
  insurance_status: string
  passport_no: string
  major_diseases: string
  qq: string
  drug_allergy: string
  zybj_id: string
  bsr_id: string
  current_place: string
  zipcode: string
  emergency1_name: string
  emergency1_relation: string
  emergency1_mobile: string
  emergency2_name: string
  emergency2_relation: string
  emergency2_mobile: string
  medical_skill: string
  wild_skill: string
  gps_skill: string
  radio_skill: string
  body_skill: string
  other_skill: string
  rescue_history: string
  orther_history: string
  edu_type: string
  edu_date: string
  edu_place: string
  edu_major: string
  job_date: string
  job_department: string
  job_company: string
  job_place: string
  personal_brief: string
  serve_time: string
  team_duty: string
  work_no: string
  head_pic: string

  status: string
  create_time: string
  update_time: string
}
