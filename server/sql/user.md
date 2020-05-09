## 用户表

CREATE TABLE t_user(
  key_id VARCHAR(255) NOT NULL PRIMARY KEY,  -- id 统一命名为key_id
  mobile VARCHAR(255) NOT NULL ,   -- 手机号码 作为登录用户名
  password VARCHAR(255) NOT NULL ,  -- 密码
  email VARCHAR(255) NOT NULL ,     -- 电子邮箱
  nick_name VARCHAR(255) NOT NULL , -- 昵称（id）
  status INT NOT NULL DEFAULT 0,  -- 逻辑删除标志默认值
  role VARCHAR(255) NOT NULL ,     -- 角色
  create_time   timestamp NULL default CURRENT_TIMESTAMP, -- 创建时间默认值
  update_time   timestamp NULL default CURRENT_TIMESTAMP -- 修改时间默认值
)


## 队员表

CREATE TABLE t_member(
  mobile VARCHAR(255) NOT NULL PRIMARY KEY ,   -- 手机号码 作为唯一主键
  real_name VARCHAR(255) NOT NULL ,  -- 真实姓名
  gender VARCHAR(255) NOT NULL ,  -- 性别
  region VARCHAR(255) NOT NULL ,  -- 户籍
  nation VARCHAR(255) NOT NULL ,  -- 民族
  height VARCHAR(255) NOT NULL ,  -- 身高
  weight VARCHAR(255) NOT NULL ,  -- 体重
  blood_type VARCHAR(255) NOT NULL ,  -- 血型
  politic VARCHAR(255) NOT NULL ,  -- 政治面貌
  birth_place VARCHAR(255) NOT NULL ,  -- 出生地
  idcard_no VARCHAR(255) NOT NULL ,  -- 身份证号
  insurance_status VARCHAR(255) NOT NULL ,  -- 保险情况
  passport_no VARCHAR(255) NOT NULL ,  -- 护照号
  major_diseases VARCHAR(255) NOT NULL ,  -- 重大疾病史
  qq VARCHAR(255) NOT NULL ,  -- qq
  drug_allergy VARCHAR(255) NOT NULL ,  -- 药物过敏史
  zybj_id VARCHAR(255) NOT NULL ,  -- 志愿北京编号
  bsr_id VARCHAR(255) NOT NULL ,  -- 蓝天uid
  current_place VARCHAR(255) NOT NULL ,  -- 现住址
  zipcode VARCHAR(255) NOT NULL ,  -- 邮编
  emergency1_name VARCHAR(255) NOT NULL ,  -- 紧急联系人1
  emergency1_relation VARCHAR(255) NOT NULL ,  -- 紧急联系人1关系
  emergency1_mobile VARCHAR(255) NOT NULL ,  -- 紧急联系人1联系方式
  emergency2_name VARCHAR(255) NOT NULL ,  -- 紧急联系人2
  emergency2_relation VARCHAR(255) NOT NULL ,  -- 紧急联系人2关系
  emergency2_mobile VARCHAR(255) NOT NULL ,  -- 紧急联系人2联系方式
  medical_skill VARCHAR(255) NOT NULL ,  -- 医疗技能
  wild_skill  VARCHAR(255) NOT NULL ,  -- 野外技能
  gps_skill  VARCHAR(255) NOT NULL ,  -- gps技能
  radio_skill  VARCHAR(255) NOT NULL ,  -- 无线电技能
  body_skill  VARCHAR(255) NOT NULL ,  -- 身体技能
  other_skill VARCHAR(255) NOT NULL ,  -- 其他技能
  rescue_history VARCHAR(255) NOT NULL ,  -- 救援经历
  orther_history VARCHAR(255) NOT NULL ,  -- 其他经历
  edu_type VARCHAR(255) NOT NULL ,  -- 最高教育
  edu_date VARCHAR(255) NOT NULL ,  -- 教育时间
  edu_place VARCHAR(255) NOT NULL ,  -- 教育学校
  edu_major VARCHAR(255) NOT NULL ,  -- 教育专业
  job_date VARCHAR(255) NOT NULL ,  -- 职业时间
  job_department VARCHAR(255) NOT NULL ,  -- 职业部门
  job_company VARCHAR(255) NOT NULL ,  -- 职业公司
  job_place VARCHAR(255) NOT NULL ,  -- 职业地址
  personal_brief VARCHAR(255) NOT NULL ,  -- 个人简述
  serve_time VARCHAR(255) NOT NULL ,  -- 活动时长
  team_duty VARCHAR(255) NOT NULL ,  -- 职务
  work_no VARCHAR(255) NOT NULL ,  -- 队务编号
  head_pic VARCHAR(255) NOT NULL ,  -- 照片地址

  status INT NOT NULL DEFAULT 0,  -- 逻辑删除标志默认值
  create_time   timestamp NULL default CURRENT_TIMESTAMP, -- 创建时间默认值
  update_time   timestamp NULL default CURRENT_TIMESTAMP -- 修改时间默认值
)

## 审核列表
CREATE TABLE t_verify(
  id VARCHAR(255) NOT NULL PRIMARY KEY,  -- id 消息id
  message VARCHAR(255) NOT NULL ,   -- 消息内容
  type VARCHAR(255) NOT NULL ,  -- 类型
  postId VARCHAR(255) NOT NULL ,     -- 发起人
  recieveId VARCHAR(255) NOT NULL ,     -- 处理人
  state INT NOT NULL DEFAULT 0,  -- 消息状态
  create_time   timestamp NULL default CURRENT_TIMESTAMP, -- 创建时间默认值
  update_time   timestamp NULL default CURRENT_TIMESTAMP -- 修改时间默认值
)

## 日志表

CREATE TABLE t_log(
  id VARCHAR(255) NOT NULL PRIMARY KEY,  -- id 消息id
  message VARCHAR(255) NOT NULL ,   -- 消息内容
  type VARCHAR(255) NOT NULL ,  -- 类型
  create_time   timestamp NULL default CURRENT_TIMESTAMP  -- 创建时间默认值
)