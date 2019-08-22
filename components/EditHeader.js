//EditHeader.js

import React from 'react';
import {View,TouchableOpacity,StyleSheet} from 'react-native'
// witthNavigation: header에서도 navigation을 조작할 수 있는 navigation props를 받아올 수 있게 해줍니다.
import {withNavigation} from 'react-navigation'
import { Ionicons } from '@expo/vector-icons';

//EditHeader 컴포넌트를 생성합니다.
const EditHeader = ({navigation,addPost}) => {
    return (
        <View style={styles.container}>
            {/* 눌렀을 때 반짝이는 버튼 컴포넌트
                -- 반짝이는 정도를 0.8로 줍니다
                -- 눌렸을 때, navigation을 이전 페이지(Tab)로 돌아가게 합니다. 
                -- 터치되는 면적을 넓혀줍니다.*/}
            <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => {navigation.goBack()}}
                hitSlop={{top:32, bottom:32, left:32, right: 32}}
                onPress={() => {
                    addPost();
                    navigation.navigate('ListScreen');
                }}>
                <Ionicons name="ios-arrow-back" size={25} color={'#7a7171'}></Ionicons>
            </TouchableOpacity>

            <View style={styles.iconContainer}>
            <TouchableOpacity
	                activeOpacity={0.8}
	                 hitSlop={{top:2, bottom:2, left:2, right: 2}}
	                onPress={selectPicture}>
	                <Ionicons name="ios-image" size={25} color={'#7a7171'}></Ionicons>
	            </TouchableOpacity>
                <TouchableOpacity
                    activeOpacity={0.8}
                    hitSlop={{top:2, bottom:2, left:2, right: 2}}>
                    <Ionicons name="ios-save" size={25} color={'#7a7171'}></Ionicons>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    iconContainer: {
        flexDirection: 'row',
        width: 60,
        justifyContent: 'space-between'
    }
})

// EditScreen의 자식 컴포넌트인 EditHeader에게는 navigation이라는 props가 자동으로 전달되지 않습니다.
// navigation이라는 props를 받아와 사용하기 위해 withNavigation을 사용합니다.
export default withNavigation(EditHeader);