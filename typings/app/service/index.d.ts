// This file is created by egg-ts-helper@1.25.6
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportTest from '../../../app/service/Test';
import ExportUserUser from '../../../app/service/user/User';

declare module 'egg' {
  interface IService {
    test: ExportTest;
    user: {
      user: ExportUserUser;
    }
  }
}
