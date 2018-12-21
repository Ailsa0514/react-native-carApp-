import React,{Component} from "react";
import {StyleSheet, 
        Text, 
        Image,
        Button,
        TextInput,
        View} from 'react-native';


import Util from "./utiles"

class AddTitle extends Component {
    render() {
        return (
          <View style={styles.addTitle}>
              <Text style={styles.addTitleText}>这个页面是要添加的</Text>
             
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
        this.state = { text: 'Useless Placeholder' };
      }
    
    _submit () {
        console.log("dsadadas")
    }
    render() {
      return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                onChangeText={(text) => this.setState({text})}
                value={this.state.text}
            />
            <Button
            style = {styles.btn}
            onPress = {this._submit.bind(this)}
            title="提交"
            color="#1296db"
          />
        </View>
      );
    }
}

  
//主色调的值    #1296db
const styles = StyleSheet.create({
   container : {
       flex:1,
    
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
   btn : {
    flex: 1 ,
    alignItems:'center',
    justifyContent : 'center',
    margin : 10 
   },
   input : {
      height: 40,
      borderColor: 'gray', 
      borderWidth: 1,
      margin : 10 ,
      borderWidth :1
   }
});
