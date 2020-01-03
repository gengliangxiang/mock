import { Controller } from "egg";
import { Get, Post, Message, Prefix } from "egg-shell-decorators";
import * as Mock from "mockjs";

const data = Mock.mock({
	"list|1-10": [
		{
			"id|+1": 1,
			email: "@email",
			contactPerson: "@cname",
			cstNm: "@cname",
			phone: /^[1][3,4,5,6,7,8][0-9]{9}$/,
			"cstTpCd|1-10": 0,
			"intSt|1-3": 0
		}
	]
});
@Prefix("/")
export default class HomeController extends Controller {
	@Get("/")
	@Message("success")
	public async get() {
		const params = this.ctx.query;
		console.log(params);
		this.ctx.body = {
			status: 200,
			data: {
				list: data.list,
				total: data.list.length,
				pageNum: 1
			}
		};
	}
	@Get("/getList")
	@Message("success")
	public async getList() {
		const params = this.ctx.query;
		console.log(params);
		this.ctx.body = {
			status: 200,
			data: {
				list: data.list,
				total: data.list.length,
				pageNum: 1
			}
		};
	}
	@Post("/")
	@Message("success")
	public async post() {
		const params = this.ctx.request.body;
		// 获取参数
		console.log(params);
		this.ctx.body = {
			status: 200,
			data: {
				list: data.list,
				total: data.list.length,
				pageNum: 1
			}
		};
	}
}
