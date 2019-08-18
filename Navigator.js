// Navigator.js

import React from 'react';
import {createAppContainer,
        createBottomTabNavigator,
        createStackNavigator } from "react-navigation"
import ListScreen from './screens/ListScreen'
import EditScreen from './screens/EditScreen'
import PrivateScreen from './screens/PrivateScreen'
import {Ionicons} from '@expo/vector-icons'
import ViewScreen from './screens/ViewScreen';

//BottomTabNavigator을 생성합니다.
const TabNavigator = createBottomTabNavigator({
    ListScreen: {
        screen: ListScreen,
        //해당 탭의 옵션 중
        navigationOptions: {
            // '아이콘 설정'을 합니다.
        tabBarIcon: ({tintColor}) => {
                //tabBarOptions에서 color을 받아와 아이콘에 적용해서 리턴합니다.
            return <Ionicons name='ios-apps' size={25} color={tintColor}/>
            }
        }
    },
    EditScreen: {
        // 글쓰기 탭을 눌렀을 때 카드를 바꿔주고, 탭 화면을 교체할 필요는 없으니 null로 줍니다.
        screen: () => null,
        navigationOptions: {
            tabBarIcon: ({tintColor}) => {
                return <Ionicons name='ios-create' size={25} color={tintColor}/>
            },
        // 탭이 눌리면 'Edit'화면을 맨 위에 올려둡니다.
            tabBarOnPress: ({navigation}) => {
                navigation.navigate('Edit');
            }
        }
    },
    PrivateScreen: {
        screen: PrivateScreen,
        navigationOptions: {
            tabBarIcon: ({tintColor}) => {
                return <Ionicons name='ios-person' size={25} color={tintColor}/>
            }
        }
    }
},{
    //하단 탭을 커스텀 할 수 있는 옵션 중
    tabBarOptions: {
        //탭이 선택되었을 때 하단 탭의 색깔을 설정합니다.
        activeTintColor: '#000',
        //탭이 선택되지 않았을 때 하단 탭의 색깔을 설정합니다.
        inactiveTintColor: "#bdbdbd",
        //탭의 제목을 표시하지 않습니다. default는 true입니다.
        showLabel: false
    }
}//end of tabBarOptions
);//end of createBottomTabNavigator

// StackNavigator을 생성합니다.
const AppNavigator = createStackNavigator (
	// 사용할 카드(화면)를 등록합니다.
	{
        Edit: EditScreen,
        View: ViewScreen,
	    Tab: TabNavigator,
	},
	// navigationOptions
	{
			// 가장 처음에 기본으로 보여줄 카드(화면)
	    initialRouteName: 'Tab',
			// 화면 전환 효과 : 아래에서 위로 올라오게 (IOS만 가능)
	    mode : 'modal',
			// 화면에 헤더를 나타나게 할건지 유무
	    headerMode: 'none'
	}
);


// App.js에서 Navigation을 사용하려면 최상위 Navigation을 createAppContainer로 감싸줘야 합니다.
export default createAppContainer(AppNavigator);