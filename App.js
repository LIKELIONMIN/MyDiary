//App.js

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Navigation from './Navigator'



export default class App extends React.Component {

  state = {
    selectedDate:'',
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

  render() {
    return (
        <Navigation
          screenProps={{
            Posts: this.state.Posts,
            selectedDate: this.state.selectedDate,
            changeDate: this._changeDate,
          }}/>
    );
  }
}