
import React, { useContext, useState} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ImageBackground, TouchableWithoutFeedback} from 'react-native';
import { Colors } from '../../theme/colorsTheme';
import { FontTheme } from '../../theme/fontTheme';
import { Spaces } from '../../theme/spacing';
import Icon from 'react-native-vector-icons/Ionicons';
import { SettingModal } from './SettingModal';
import { useSelector } from 'react-redux';
import { selectAuthUser, selectUserInfo } from '../../redux/reducers/authSlice';

export function ProfileHeader() {
  const [ modalVisible, setModalVisible ] = useState(false);

  const userInfo = useSelector(selectUserInfo);

  return ( 
    <View style={styles.headerView}>
      <Image 
        style={styles.userImg}
        source={require('../../assets/Images/user.png')}
        resizeMode="cover"
      />
      <Text style={styles.heading2}>{userInfo?.email}</Text>
      <Text style={styles.status}>After rainny days, it will be shine</Text>
      <View style={styles.settingView}>
        <TouchableOpacity 
          onPress={() => setModalVisible(!modalVisible)} 
        >
          <Icon name="ellipsis-vertical" style={styles.settingBtn}/>
        </TouchableOpacity>
       
        <SettingModal 
          modalVisible={modalVisible}
          onClosePress={() => setModalVisible(false)}
          handleBackdropClose={() => setModalVisible(false)}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  headerView: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: Spaces.m4,
  },
  userImg: {
    backgroundColor: Colors.light,
    borderRadius: 50,
    width: 100, 
    height: 100,
    marginBottom: Spaces.m1
  },
  heading2: {
    fontSize: FontTheme.heading2,
    color: Colors.info,
    fontWeight: 'bold',
    textTransform: 'capitalize'
  },
  status: {
    fontSize: FontTheme.heading5,
    color: Colors.info,
    fontStyle: 'italic'
  },
  settingView: {
    position: 'absolute',
    right: Spaces.p1,
    top: -30,
  },
  settingBtn: {
    color: Colors.info,
    fontSize: FontTheme.heading2,
    fontWeight: 'bold'
  }
})


