import request from '@/utils/request'
import { IMemberData } from './types'

export const defaultMemberData: IMemberData = {
  mobile: 0,
  real_name: '',
  gender: '',
  region: '',
  nation: '',
  height: '',
  weight: '',
  blood_type: '',
  politic: '',
  birth_place: '',
  idcard_no: '',
  insurance_status: '',
  passport_no: '',
  major_diseases: '',
  qq: '',
  drug_allergy: '',
  zybj_id: '',
  bsr_id: '',
  current_place: '',
  zipcode: '',
  emergency1_name: '',
  emergency1_relation: '',
  emergency1_mobile: '',
  emergency2_name: '',
  emergency2_relation: '',
  emergency2_mobile: '',
  medical_skill: '',
  wild_skill: '',
  gps_skill: '',
  radio_skill: '',
  body_skill: '',
  other_skill: '',
  rescue_history: '',
  orther_history: '',
  edu_type: '',
  edu_date: '',
  edu_place: '',
  edu_major: '',
  job_date: '',
  job_department: '',
  job_company: '',
  job_place: '',
  personal_brief: '',
  serve_time: '',
  team_duty: '',
  work_no: '',
  head_pic: '',

  status: '',
  create_time: '',
  update_time: '',
}


export const getMembers = (params: any) =>
  request({
    url: '/members',
    method: 'get',
    params
  })
