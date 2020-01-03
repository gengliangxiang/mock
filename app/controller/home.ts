import { Controller } from 'egg';

export default class HomeController extends Controller {
  public async index() {
    const { ctx } = this;
	// ctx.body = await ctx.service.test.sayHi('egg');
	console.log(122)
    ctx.body = await ctx.service.test.sayHi('egg');
  }
}
