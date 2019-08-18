//ViewScreen.js

import React from 'react';
import { Text,View,StyleSheet,Dimensions } from 'react-native'
import {SafeAreaView} from 'react-navigation';
// 만들었던 ViewHeader 컴포넌트를 가져옵니다.
import ViewHeader from '../components/ViewHeader'

const {width,height} = Dimensions.get('window');

export default ViewScreen = (props) => {
		
		// ListScreen에서 넘겨줬던 post 파라미터를 받아옵니다.
    const post = props.navigation.getParam('post');

    return (
        <SafeAreaView>
            <View style={styles.contentContainer}>
								// 가져온 ViewHeader을 붙여주세요.
                <ViewHeader 
                    style={styles.viewHeader}/>
								//삼항 연산자를 사용해서 post가 null이 아니라면 post의 데이터들을 출력해줍니다.
                {post?
                    <View>
                    <View style={styles.emptyBox}/>
                    <Text style={styles.title}>{post.title}</Text>
                    <View style={styles.emptyBox}/>
                    <Text style={styles.content}>{post.content}</Text>
                    </View>
                :null}
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    contentContainer: {      
        width: width-50,                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
        marginTop: 20,
        marginLeft: 20,
    },
    title:{
        fontSize: 40,
        color: "#3b3b3b",
        fontWeight: "600",
    },
    content:{
        fontSize: 15,
        color: "#3b3b3b"
    },
    emptyBox: {
        height: 20,
    },
})