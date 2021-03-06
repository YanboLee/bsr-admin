// This file is created by egg-ts-helper@1.25.7
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportHome from '../../../app/controller/home';
import ExportLogin from '../../../app/controller/login';
import ExportMember from '../../../app/controller/member';
import ExportUsers from '../../../app/controller/users';
import ExportVerify from '../../../app/controller/verify';

declare module 'egg' {
  interface IController {
    home: ExportHome;
    login: ExportLogin;
    member: ExportMember;
    users: ExportUsers;
    verify: ExportVerify;
  }
}
