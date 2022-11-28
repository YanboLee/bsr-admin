// This file is created by egg-ts-helper@1.25.7
// Do not modify this file!!!!!!!!!

import 'egg';
type AnyClass = new (...args: any[]) => any;
type AnyFunc<T = any> = (...args: any[]) => T;
type CanExportFunc = AnyFunc<Promise<any>> | AnyFunc<IterableIterator<any>>;
type AutoInstanceType<T, U = T extends CanExportFunc ? T : T extends AnyFunc ? ReturnType<T> : T> = U extends AnyClass ? InstanceType<U> : U;
import ExportLogin from '../../../app/service/Login';
import ExportMember from '../../../app/service/Member';
import ExportTest from '../../../app/service/Test';
import ExportUsers from '../../../app/service/Users';
import ExportVerify from '../../../app/service/Verify';
import ExportActivity from '../../../app/service/activity';

declare module 'egg' {
  interface IService {
    login: AutoInstanceType<typeof ExportLogin>;
    member: AutoInstanceType<typeof ExportMember>;
    test: AutoInstanceType<typeof ExportTest>;
    users: AutoInstanceType<typeof ExportUsers>;
    verify: AutoInstanceType<typeof ExportVerify>;
    activity: AutoInstanceType<typeof ExportActivity>;
  }
}
