import { Button, Form, Tabbar, TabbarItem } from 'vant';
// vant按需引入组件
const options = [
    Button,
    Form,
    Tabbar,
    TabbarItem
]

export function vant(app){
    options.forEach((component)=>{
        app.use(component)
    })
}
