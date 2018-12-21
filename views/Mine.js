import React, {Component} from 'react';
import {StyleSheet, 
        Text, 
        Image,
        FlatList,
        TextInput,
        View} from 'react-native';

import Util from "./utiles"

export default class Mine extends Component {


    render() {
        return(
            <View style={styles.container}>
                <View style={styles.top}>  
                        <Image source={require('../images/d.jpeg')} style={styles.img}></Image>
                    <Text style={styles.name}>蜡笔小新</Text>
                </View>
                <View style={styles.content}>
                    <View style={styles.contentItem}>
                        <Image source={require('../images/chat_on.png')}  style={styles.contentItemImg}></Image>
                        <Text>修改资料</Text>
                    </View>
                    <View style={styles.contentItem}>
                        <Image source={require('../images/chat_on.png')}  style={styles.contentItemImg}></Image>
                        <Text>发布</Text>
                    </View>
                    <View style={styles.contentItem}>
                        <Image source={require('../images/chat_on.png')}  style={styles.contentItemImg}></Image>
                        <Text>已发布</Text>
                    </View>
                    <View style={styles.contentItem}>
                        <Image source={require('../images/chat_on.png')}  style={styles.contentItemImg}></Image>
                        <Text>注销</Text>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container : { 
        flex:1,
    },
    top:{
        height:200,
        backgroundColor:'#1296db',
        alignItems:"center",
        justifyContent:'center'
    },
    img:{
        width:100,
        height:100,
        borderRadius:50
    },
    name:{
        color:"#fff",
        fontSize: 20,
        marginTop:10
    },
    content:{
        width:Util.size.width,
        flexDirection:'row',
        justifyContent:'center',
        marginTop:10,
    },
    contentItem:{
        flex:1,
        marginLeft:10,
        marginRight:10,

        alignItems:'center'
    },
    contentItemImg:{
        width:50,
        height:50,
        borderRadius:50
    }
})