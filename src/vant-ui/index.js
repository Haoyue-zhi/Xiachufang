import { Button, Form, Tabbar, TabbarItem, Icon } from 'vant';
// vant按需引入组件
const options = [
    Button,
    Form,
    Tabbar,
    TabbarItem,
    Icon
]

export function vant(app){
    options.forEach((component)=>{
        app.use(component)
    })
}
