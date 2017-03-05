/**
 * Created by Administrator on 2017-03-05.
 */
import Students from './Students'

export default class MingStudent extends Students {
    constructor() {
        super('小明', '男', 18);
    }

    getDescription() {
        return 'XXX' + super.getDescription();
    }
}
