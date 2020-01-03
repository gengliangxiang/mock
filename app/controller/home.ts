import { Controller } from 'egg';

export default class HomeController extends Controller {
  public async index() {
	const { ctx } = this;
	const e = 'erondcds';
	console.log(e);
	ctx.body = await ctx.service.test.sayHi('egg');
	console.log(2342)
  }
}
