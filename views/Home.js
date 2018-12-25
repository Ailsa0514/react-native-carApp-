import React,{Component} from "react";
import { View,WebView,Text} from "react-native"



export default class Home extends Component {
    render() {
      return (
        <View style={{ flex: 1 }}>
            <Text>这是我的项目首页</Text>
        </View>
      );
    
    }
    _onLoading () {
      console.log("43432432432")
   }
  }