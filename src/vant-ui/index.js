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
    CellGroup,
    Popup,
    NavBar,
    PullRefresh,
    Grid,
    GridItem,
    Divider,
    Tab,
    Tabs
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
    CellGroup,
    Popup,
    NavBar,
    PullRefresh,
    Grid,
    GridItem,
    Divider,
    Tab,
    Tabs
]

export function vant(app) {
    options.forEach((component) => {
        app.use(component)
    })
}
