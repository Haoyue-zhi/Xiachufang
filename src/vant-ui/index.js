import { Button,Form } from 'vant';
// vant按需引入组件
const options = [
    Button,
    Form
]

export function vant(app){
    options.forEach((component)=>{
        app.use(component)
    })
}
