import { Controller } from "egg";
import { Get, Message, Prefix } from "egg-shell-decorators";

@Prefix("/user")
export default class HomeController extends Controller {
	@Get("/list")
	@Message("success")
	public async get() {
		const params = this.ctx.query;
		console.log(params);
		return await this.service.user.getList();
	}
}
