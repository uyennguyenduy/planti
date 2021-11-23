import React, { useContext } from 'react';
import { View, Modal, Text, Pressable, TouchableHighlight, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { Colors } from '../../theme/colorsTheme';
import { Spaces } from '../../theme/spacing';
import { AuthContext } from '../../../App';
import { FontTheme } from '../../theme/fontTheme';


export function SettingModal({modalVisible, onClosePress}) {

  const { signOut } = useContext(AuthContext).authContext;
  return (
    
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
      > 
      <TouchableWithoutFeedback
        onPress={onClosePress}
      >
       
        <View style={{flex: 1}}>
          <View style={styles.modalView}>
            <View style={styles.modalLayout}>
              <TouchableHighlight
                onPress={() => signOut()}
              >
                <Text style={styles.modalBtn}>Log out</Text>
              </TouchableHighlight>
            </View>
          </View>
        </View>
       
      </TouchableWithoutFeedback>
      </Modal>
    
  )
}

const styles = StyleSheet.create({
  modalView: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 100
  },
  modalLayout: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: Colors.light,
    padding: Spaces.p2,
    borderRadius: 10,
  },
  modalBtn: {
    color: Colors.primary,
    textAlign: 'center',
    fontSize: FontTheme.heading5,
    fontWeight: 'bold',
    borderBottomWidth: 1,
    borderColor: Colors.primary,
    paddingBottom: Spaces.p1
  }
})