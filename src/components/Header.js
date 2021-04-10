import React from 'react';
import {View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';

import NavigationService from '../navigation/NavigationService';

import {BW} from '../consts';

const Header = ({title, backButton}) => {
  return (
    <View style={styles.container}>
      {backButton ? (
        <TouchableOpacity onPress={() => NavigationService.goBack()}>
          <Image
            source={require('../assets/back.png')}
            style={{
              width: 15 * BW,
              height: 15 * BW,
              tintColor: '#fff',
            }}
            resizeMode="contain"
          />
        </TouchableOpacity>
      ) : (
        <View
          style={{
            width: 15 * BW,
            height: 15 * BW,
          }}
        />
      )}

      <Text style={styles.title}>{title}</Text>
      <View
        style={{
          width: 15 * BW,
          height: 15 * BW,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 40 * BW,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: '#222831',
    paddingHorizontal: 10 * BW,
  },
  title: {
    fontSize: 14 * BW,
    textAlign: 'center',
    color: '#fff',
  },
});

export default Header;
