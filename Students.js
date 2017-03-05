/**
 * Created by Administrator on 2017-03-05.
 */
export default class Students {
    constructor(name, sex, age) {
        this.name = name;
        this.sex = sex;
        this.age = age;
    }

    getDescription() {
        return '姓名:' + this.name + '性别：' + this.sex + '年龄：' + this.age;
    }


}