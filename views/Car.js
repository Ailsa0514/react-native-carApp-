import React, {Component} from 'react';
import {StyleSheet, 
        Text, 
        Image,
        FlatList,
        TextInput,
        TouchableOpacity,
        View} from 'react-native';

        
const localIcon = require('../images/loac.png');
const classIcon = require('../images/classify.png')


const data  =  [
    {
       id:"575655gfgfhg544jggdgd",
       image:require("../images/09.jpg"),
    },
    {
        id:"432rerewre5454545rwe",
        image:require("../images/75.jpg"),
     },
     {
        id:"dsdr34r545454334534",
        image:require("../images/88.jpg"),
     },
     {
        id:"575655gfgfhgjgg54dgd",
        image:require("../images/90.jpg"),
     },
     {
         id:"432rerewr655444342erwe",
         image:require("../images/5457898.jpg"),
      },
      {
         id:"dsdr34r3344223675sdfsd534",
         image:require("../images/d.jpeg"),
      },
      {
        id:"575655gfgfhgjgwrewrgdgd",
        image:require("../images/d.jpeg"),
     },
     {
         id:"432rerewr6kjhgkgerwe",
         image:require("../images/d.jpeg"),
      },
      {
         id:"dsdr34r3bcbjty44353434534",
         image:require("../images/d.jpeg"),
      },
];
class FlatViews extends Component { 
    constructor(props) {
        super(props);
    }
    render () {
        return (
            <FlatList 
            style={styles.content}
            data={data}
            renderItem={this._renderItem} 
            keyExtractor={ (item) => item.id} />
        )
    }
    _renderItem = ({item}) => (
        <TflatItem url={item.image} id={item.id}  navigation = {this.props.navigation}></TflatItem>
    )
}
class TflatItem extends Component{ 
    constructor(props) {
        super(props);
        this._toDetails = this._toDetails.bind(this);
    }
    render() {
        const url =  this.props.url;
        const id = this.props.id
        return (
         <TouchableOpacity style={styles.imgContainer} onPress={this._toDetails}>
             <Image source={url} style={styles.imgBox}></Image>
             <View style={styles.imgText}>
                <Text numberOfLines={2} style={styles.title}>这是我的标题1这是我的标题1这是我的标题1这是我的标题1这是我的标题1这是我的标题1</Text>
                <Text style={styles.FontText}>2016年/1.8万公里</Text>
                <Text style={styles.price}><Text style={styles.textMark}>10</Text>万新车价</Text>
             </View>  
         </TouchableOpacity>
        );
      }
    _toDetails () {    
        this.props.navigation.navigation.navigate('Details',{itemId:this.props.id});
    }  
}

export default class Car extends Component{ 
    constructor(props) {
        super(props);
        this.state = { text: 'Useless Placeholder' };
    }
    render() {
        return (
         <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity style={styles.headerItem} onPress={this._addCar.bind(this)}>
                    <View style={styles.local}>
                        <Image style={styles.imageIcon} source={localIcon}></Image>
                        <Text>北京</Text>
                    </View>
                </TouchableOpacity>
                <View  style={styles.searchItem}>
                  <TextInput  
                   style={styles.textInputStyle} 
                   onChangeText={(text) => this.setState({text})}
                   value={this.state.test}
                   placeholder="请输入搜索内容"
                   placeholderTextColor="#aaa"
                  />
                </View>
                <View  style={[styles.headerItem,styles.classItem]}>
                    <Image style={styles.imageIcon} source={classIcon}></Image>
                </View>
            </View>
            <FlatViews navigation = {this.props}/>   
         </View>
        );
      }
      _addCar () {
         this.props.navigation.navigate('Add')
      }
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    header:{
        height:50,
        flexDirection: 'row',
        justifyContent:'space-between',

    },
    headerItem:{
        justifyContent:"center",
        alignItems: 'flex-start',
    },
    classItem:{
        alignItems: 'flex-end',
        marginRight: 10,
        marginLeft: 10,
    },
    searchItem:{
        flex:2,
        justifyContent:'center',
        alignItems:'center',
    },
    local:{
        flexDirection:'row',
        marginLeft: 10,
        marginRight: 10,
        alignItems:'center'
    },
    imageIcon:{
        width:26,
        height:26
    },
    textInputStyle:{
        height: 30,
        borderColor: '#eee', 
        borderWidth: 1,
        width:"100%",
         backgroundColor:"#fff",
         borderRadius: 5,
    },
    // 列表
    content:{
        paddingLeft:10,
        paddingRight: 10,
        backgroundColor:"#eee",
    },
    imgContainer:{ 
        flexDirection: 'row',
        backgroundColor: '#fff',
        marginTop:10,
        borderBottomWidth: 1 ,
        borderBottomColor: "#ddd"
    },
    imgBox:{
        width: 128, 
        height: 128,
        alignItems: 'center',
        margin:10
    },
    imgText:{
        flex:1, 
        marginTop:5,
        marginRight:10
    },
    textMark:{
        color:"#b1b122",
        fontSize:40
    },  
    title:{
        fontSize:18,
    },
    price:{
        fontSize:22
    },
    FontText:{
        fontSize:12,
        fontWeight: 'normal',
    }
});
