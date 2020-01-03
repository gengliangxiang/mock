// This file is created by egg-ts-helper@1.25.6
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportHome from '../../../app/controller/home';
import ExportUserUser from '../../../app/controller/user/user';

declare module 'egg' {
  interface IController {
    home: ExportHome;
    user: {
      user: ExportUserUser;
    }
  }
}
