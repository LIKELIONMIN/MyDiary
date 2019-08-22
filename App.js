//App.js

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Navigation from './Navigator'
import uuid from 'uuid/v4';
import { Platform } from 'react-native';
import * as ImagePicker from 'expo-image-picker'
import * as Permissions from 'expo-permissions'



export default class App extends React.Component {

  state = {
    inputTitle : '',
    inputContent: '',
    selectedDate:'',
    imageUrl:'',
    Posts : [{
      id : 'abcd-efg1',
      title :'8월 1일에 쓴 글',
      content :'입니다',
      date :'20190801',
      image: '',
    },{
      id :'abcd-efg2',
      title :'8월 2일에 쓴 글',
      content :'입니다',
      date :'20190802',
      image: '',
    }]
  }

  // 제목을 입력하는 TextInput의 내용이 변경될 때 실행될 함수
  _changeTitle = (value) => {
    this.setState({
      inputTitle: value
    });
  }

  _changeContent = (value) => {
    this.setState({
      inputContent: value
    });
  }

  _changeDate = (value) => {
    console.log(value);
    let year = value._i.year.toString();
    let month = (value._i.month+1).toString();
    let day = value._i.day.toString();

    if(month.length == 1) month = "0"+month;
    if(day.length == 1) day = "0"+day;

    this.setState({
      selectedDate: year+month+day
    });
  }

  _getToday = () => {
    let date = new Date();
    let year = date.getFullYear().toString();
    let month = (date.getMonth()+1).toString();
    let day = date.getDate().toString();

    if(month.length == 1) month = "0"+month;
    if(day.length == 1) day = "0"+day;

    return year+month+day;
  }
  

  _addPost = () => {
    let id = uuid();
    const today = this._getToday();
    const prevPosts = [...this.state.Posts];
    const newPost = {
      id:id
      ,title:this.state.inputTitle
      ,content:this.state.inputContent
      ,date: today
      ,image: this.state.imageUrl
    }
    
    this.setState({
      inputTitle: '',
      inputContent: '',
      selectedDate: today,
      imageUrl: '',
      Posts: prevPosts.concat(newPost)
    });
  }

  _selectPicture = async () =>{
    if(Platform.OS =='ios'){
      const {status} = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if(status !=='granted'){
        alert('설정>expo>사진 읽기 및 쓰기 허용을 설정해주세요');
      }
    }
    const result = await ImagePicker.launchImageLibraryAsync({allowEditing:true});
    this.setState({
      imageUrl: result.uri
    });
  }

  render() {
    return (
        <Navigation
          screenProps={{
            inputTitle : '',
            inputContent: '',
            Posts: this.state.Posts,
            selectedDate: this.state.selectedDate,
            changeDate: this._changeDate,
            changeTitle: this._changeTitle,
            changeContent: this._changeContent,
            addPost:this._addPost,
            imageUrl: this.state.imageUrl,
            selectPicture: this._selectPicture,
          }}/>
    );
  }
}