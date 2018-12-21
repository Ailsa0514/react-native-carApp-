import React from 'react';

import { createStackNavigator, createAppContainer } from 'react-navigation'; // 1.0.0-beta.27


// 1 导入组件
import TabScreen from './views/TabBar'
import DetailsScreen from './views/Details';
import AddScreen from './views/Add'
// 2 首先你要定义的跳转createStackNavigator
const RootStack = createStackNavigator({
  Tab : {
    screen : TabScreen,
    navigationOptions : {
      header : null
    }
  },
  Details : {
    screen : DetailsScreen,
  },
  Add : {
    screen : AddScreen,
  },
}
   /** 
    * 
    * this.props.navigation：navigation prop  传递给每个在 stack navigator 中定义的（ **屏幕组件</ strong>）
    * navigate（'Details'）：我们使用用户将要跳转的路由的名称来调用navigate方法。
    * 
    * 
   */
);

// 3  App 容器负责管理应用的 state
const AppContainer = createAppContainer(RootStack);

// 4 并将顶层的 navigator 链接到整个应用环境
export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}