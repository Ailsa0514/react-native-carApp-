import React, {Component} from 'react';
import {StyleSheet, 
        Dimensions,
        View} from 'react-native';

module.exports =  {
    // 宽度高度
    size : {
        width : Dimensions.get('window').width,
        height : Dimensions.get('window').height,
    },
    // pixel : 1 / devicePixelRatio.get(),

    // fetch <=> ajax

    get : function (url,successCallback,failCallback) {
        fetch(url)
        .then((response) => response.json())
        .then((responseJson) => {
            successCallback(responseJson)
         })
        .catch((error) => {
            failCallback(error)
        });
    }
}