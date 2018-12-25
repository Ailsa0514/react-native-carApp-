import React from "react";
import { View, Text, Button, TouchableOpacity,StyleSheet,Image} from "react-native";

import Utils from './utiles'
export default class DetailsScreen extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        imgData : ""
      }
      this.itemId = this.props.navigation.getParam('itemId', 'NO-ID');
      this.otherParam = this.props.navigation.getParam('otherParam', 'some default value');
    }
    componentDidMount () {
        this.apiFetch();
    }
    // http://192.168.2.131:3000/car  这里的地址不能使用localhost和127.0.0.1 只能使用ip地址才可以链接成功
    apiFetch(){
    fetch('http://192.168.2.131:3000/car/'+ this.itemId ,{
        method:"GET"
    })//请求地址 
    .then((response) => response.json())//取数据
    .then((responseText) => {
        //通过setState()方法重新渲染界面
        this.setState({
            imgData:responseText.data
        })
    })
    .catch((error) => {
        console.warn(error);
    }).done();
    }
    render() {
      const {image,make,mode,year} = this.state.imgData;
      return (
        <View style={styles.container}>
        {/*source={{uri: "http://192.168.2.131:3000" + image}}* */}
          <Image source={{uri : 'http://192.168.2.131:3000'+ image}} style={{width:Utils.size.width,height:Utils.size.width}}></Image>
          <Text>This is :{make}</Text>
          <Text>This is :{mode}</Text>
          <Text>This is :{year}</Text>
        </View>
      );
    }
  }


const styles = StyleSheet.create({
  container : {
    flex: 1, 
    alignItems: "center", 
  }
})