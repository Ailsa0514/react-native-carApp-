import React,{Component} from "react";
import {StyleSheet, 
        Text, 
        Image,
        Button,
        TextInput,
        TouchableOpacity,
        View} from 'react-native';


import Util from "./utiles"

class AddTitle extends Component {
    render() {
        return (
          <View style={styles.addTitle}>
              <Text style={styles.addTitleText}>添加内容</Text>
          </View>
        );
    }
 } 
export default class Home extends Component {
    static navigationOptions = {
        headerTitle: <AddTitle />,
    };

    constructor(props) {
        super(props);
        this.state = { text: '' };
      }
    _changeMake(text) {
        console.log("text",text)
    }
    _changeMode(text) {
        console.log("text",text)
    }
    _changeYear(text) {
        console.log("text",text)
    }
    
    _submit () {
        console.log("data ")
    }
    _imageUpload(){
        console.log("dsadsadas")
    }
    render() {
      return (
        <View style={styles.container}>
            <View style={styles.makeInput}>
                <Text>MAKE</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={this._changeMake.bind(this)}
                    placeholder="In what year was it made"
                />
                
            </View>
            <View style={styles.makeInput}>
                <Text>MODE</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={this._changeMode.bind(this)}
                    placeholder="Your mode"
                />
                
            </View>
            <View style={styles.makeInput}>
                <Text>YEAR</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={this._changeYear.bind(this)}
                    placeholder="Year of production"
                />
                
            </View>
            <Text>IMAGE UPLOAD</Text>
            <TouchableOpacity  onPress = {this._imageUpload.bind(this)} >
                <Image style={styles.imgUpload} source={require('../images/09.jpg')}></Image>   
            </TouchableOpacity>
            
            <TouchableOpacity  onPress = {this._submit.bind(this)}  style={styles.submitBtn}>
                <View  style={styles.submitBtnView} style={{opacity:0}}>
                     <Text style={{color:"#fff"}}>提交</Text>
                </View>    
                <View  style={styles.submitBtnView}>
                   <Text style={{color:"#fff"}}>提交</Text>
                </View>
            </TouchableOpacity>
          
            
        </View>
      );
    }
}

  
//主色调的值    #1296db
const styles = StyleSheet.create({
   container : {
       flex:1,
       margin:10

   },
   addTitle : {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 0
   },
   addTitleText : {
    fontSize :20 ,
   },
   submitBtn:{
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
   },
   submitBtnView :{
     width:100,
     margin:10,
     height:40,
     alignItems:"center",
     justifyContent:"center",
     backgroundColor:"#1296db",
   },
   imgUpload : {
      width:100,
      height:100
   },
   input : {
      flex:1,
      height: 40,
      borderColor: 'gray', 
      borderWidth: 1,
      margin : 10 ,
      borderWidth :1
   },
   makeInput:{
      flexDirection:"row" ,
      alignItems:"center",
   },

});
