import React, {useEffect} from 'react';
import {View, Text, ActivityIndicator, FlatList} from 'react-native';
import moment from 'moment/min/moment-with-locales';
import {useDispatch, useSelector} from 'react-redux';

import Header from '../../components/Header';

import actions from '../../redux/actions';
const {getGames} = actions;

import {colors} from '../../consts';
import styles from './styles';

export default function Games() {
  const dispatch = useDispatch();
  const {data, isLoading} = useSelector(state => state.games);

  const _getGames = () => dispatch(getGames());

  useEffect(() => {
    _getGames();
  }, []);

  if (isLoading) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator color={colors.secondaryColor} />
      </View>
    );
  }

  const renderItem = ({item}) => {
    return (
      <View style={styles.container}>
        <Text style={styles.date}>{moment(item.date).format('ll')}</Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
          }}>
          <View style={{width: 100}}>
            <Text style={styles.name}>{item.home_team.full_name}</Text>
            <Text style={styles.division}>{item.home_team.division}</Text>
          </View>
          <View style={{alignItems: 'center'}}>
            <Text style={{color: '#ff9933'}}> VS</Text>
          </View>
          <View style={{width: 100}}>
            <Text style={styles.fullName}>{item.visitor_team.full_name}</Text>
            <Text style={styles.division}>{item.visitor_team.division}</Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={{flex: 1, backgroundColor: colors.backgroundColor}}>
      <Header title={'Games'} />
      <FlatList
        data={data}
        keyExtractor={(_, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        renderItem={renderItem}
      />
    </View>
  );
}
