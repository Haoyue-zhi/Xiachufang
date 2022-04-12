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
    DatetimePicker,
    Lazyload,
    Toast,
    Overlay,
    Swipe,
    SwipeItem,
    Dialog
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
    DatetimePicker,
    Lazyload,
    Toast,
    Overlay,
    Swipe,
    SwipeItem,
    Dialog
]

export function vant(app) {
    options.forEach((component) => {
        app.use(component)
    })
}