import React, {Component} from 'react';
import {StyleSheet, 
        Text, 
        Image,
        View} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';


// import pages
import Car from "./Car"
import Home from "./Home"
import Mine from "./Mine"

const carImg = {
    carImg_off: require('../images/car.png'),
    carImg_on : require('../images/car_on.png')
}
const chatImg = {
    chatImg_off: require('../images/chat.png'),
    chatImg_on : require('../images/chat_on.png')
}
const userImg = {
    userImg_off : require('../images/me.png'),
    userImg_on :  require('../images/me_on.png')
}


export default class TabNav extends Component{ 
    constructor(props){
        super(props);
        this.state={
          selectedTab:'car'
        }
      }
    
    render() {
        return (
            <TabNavigator >
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'car'}
                    title="Car"
                    renderIcon={() => <Image style={styles.iconImg} source={carImg.carImg_off} />}
                    renderSelectedIcon={() => <Image style={styles.iconActive} source={carImg.carImg_on} />}
                    onPress={() => this.setState({ selectedTab: 'car' })}>
                      <View style={styles.pageView}>
                        <Car navigation = {this.props.navigation}></Car>
                      
                      </View>
                </TabNavigator.Item>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'home'}
                    title="Home"
                    renderIcon={() => <Image style={styles.iconImg} source={chatImg.chatImg_off} />}
                    renderSelectedIcon={() => <Image style={styles.iconActive} source={chatImg.chatImg_on} />}
                    onPress={() => this.setState({ selectedTab: 'home' })}>
                      <View style={styles.pageView}>
                         <Home></Home>
                     </View>
                </TabNavigator.Item>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'mine'}
                    title="Mine"
                    renderIcon={() => <Image style={styles.iconImg} source={userImg.userImg_off} />}
                    renderSelectedIcon={() => <Image style={styles.iconActive} source={userImg.userImg_on} />}
                    onPress={() => this.setState({ selectedTab: 'mine' })}>
                     <View style={styles.pageView}>
                         <Mine></Mine>
                     </View>
                </TabNavigator.Item>
            </TabNavigator>
        )
      }

}

//主色调的值    #1296db
const styles = StyleSheet.create({
    iconImg:{
        width:25,
        height:25
    },
    iconActive:{
        width:25,
        height:25
    },
    pageView:{
        flex:1,
     },
});
