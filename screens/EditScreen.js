import React from 'react';
import {TextInput
        ,View
        ,StyleSheet
        ,Dimensions
        ,Image } from 'react-native';
import {SafeAreaView} from 'react-navigation';
import EditHeader from '../components/EditHeader'

const {width,height} = Dimensions.get('window');

export default EditScreen = () => {

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.contentContainer}>
                <View style={styles.emptyBox}/>
                <EditHeader/>
                <View style={styles.emptyBox}/>
                <TextInput
                    placeholder="제목을 입력하세요 :)"
                    style={styles.title}
                    returnKeyType="done"/>
                <View style={styles.emptyBox}/>
                <TextInput
                    placeholder="본문!"
                    multiline={true}
                    style={styles.content}
                    returnKeyType="done"/>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    contentContainer: {
        width: width-50,
    },
    title: {
        fontSize: 40,
        paddingBottom: 12,
        borderBottomWidth:2,
        borderBottomStartRadius: 1.5,
        borderBottomLeftRadius: 1.5,
        borderBottomRightRadius: 1.5,
        borderBottomEndRadius: 1.5,
        borderBottomColor: '#7a7171'
        
    },
    content: {
        fontSize: 20,
    },
    emptyBox: {
        height: 20,
    },
})