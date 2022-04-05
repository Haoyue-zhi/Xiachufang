import {
    Button,
    Form,
    Tabbar,
    TabbarItem,
    Icon,
    Search,
    Checkbox,
    CheckboxGroup,
    Cascader,
    Field,
    Cell,
    CellGroup,
    Popup,
    NavBar,
    PullRefresh,
    Grid,
    GridItem,
    Divider,
    Tab,
    Tabs,
    Picker,
    Uploader,
    DatetimePicker
} from 'vant';
// vant按需引入组件
const options = [
    Button,
    Form,
    Tabbar,
    TabbarItem,
    Icon,
    Search,
    Checkbox,
    CheckboxGroup,
    Cascader,
    Field,
    Cell,
    CellGroup,
    Popup,
    NavBar,
    PullRefresh,
    Grid,
    GridItem,
    Divider,
    Tab,
    Tabs,
    Picker,
    Uploader,
    DatetimePicker
]

export function vant(app) {
    options.forEach((component) => {
        app.use(component)
    })
}
