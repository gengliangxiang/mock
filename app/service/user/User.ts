import { Service } from 'egg';
import * as Mock  from 'mockjs';

const data = Mock.mock({
	"list|1-10": [
		{
			'id|+1': 1,
			'email': '@email',
			'contactPerson': '@cname',
			'cstNm': '@cname',
			'phone': /^[1][3,4,5,6,7,8][0-9]{9}$/,
			'cstTpCd|1-10': 0,
			'intSt|1-3': 0,
		}
	]
});

export default class User extends Service {

  public async sayHi() {
    this.ctx.body = {
        status: 200,
        data: {
            grid: {
                list: data.list,
                total: 233,
                pageNum: 1,
            }
        }
    }
  }
}
