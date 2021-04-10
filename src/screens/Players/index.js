import React, {useEffect} from 'react';
import {View, Text, ActivityIndicator, FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import Header from '../../components/Header';

import actions from '../../redux/actions';
const {getPlayers} = actions;

import {colors} from '../../consts';
import styles from './styles';

export default function Players() {
  const dispatch = useDispatch();
  const {data, isLoading} = useSelector(state => state.players);

  const _getPlayers = () => dispatch(getPlayers());

  useEffect(() => {
    _getPlayers();
  }, []);

  if (isLoading) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator color={colors.secondaryColor} />
      </View>
    );
  }

  const renderItem = ({item, index}) => {
    return (
      <View style={styles.itemContainer}>
        <View>
          <Text style={styles.name}>
            {item.first_name} {item.last_name}
          </Text>
          <Text style={styles.team}>Team: {item.team.full_name}</Text>
          <Text style={styles.position}>Position: {item.position}</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Header title={'Players'} />
      <FlatList
        data={data}
        keyExtractor={(_, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        renderItem={renderItem}
      />
    </View>
  );
}
