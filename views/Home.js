import React,{Component} from "react";
import { View,WebView} from "react-native"



export default class Home extends Component {
    render() {
      return (
        <View style={{ flex: 1 }}>
          <WebView
          source={{uri: 'http://192.168.2.131:3000/'}}
          style={{width:'100%',height:'100%'}}
          onLoad={this._onLoading.bind(this)}
        />
        </View>
      );
    
    }
    _onLoading () {
      console.log("43432432432")
   }
  }