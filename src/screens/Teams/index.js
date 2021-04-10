import React, {useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  FlatList,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import Header from '../../components/Header';

import actions from '../../redux/actions';
const {getTeams, getTeamById} = actions;

import {BW, colors} from '../../consts';
import styles from './styles';

export default function Teams() {
  const dispatch = useDispatch();
  const {data, isLoading} = useSelector(state => state.teams);

  const _getTeams = () => dispatch(getTeams());
  const _getTeamById = id => dispatch(getTeamById({id}));

  useEffect(() => {
    _getTeams();
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
      <TouchableOpacity
        onPress={() => _getTeamById(item.id)}
        style={styles.itemContainer}>
        <View>
          <Text style={styles.fullName}>{item.full_name}</Text>
          <Text style={styles.name}>{item.name}</Text>
        </View>
        <View style={{width: 45 * BW}}>
          <Text style={styles.text}>{item.city}</Text>
          <Text style={styles.text}>{item.division}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Header title={'Teams'} />
      <FlatList
        data={data}
        keyExtractor={(_, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        renderItem={renderItem}
      />
    </View>
  );
}
