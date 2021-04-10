import {StyleSheet} from 'react-native';
import {BW, colors} from '../../consts';

const styles = StyleSheet.create({
  loader: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  container: {
    marginHorizontal: 10 * BW,
    marginVertical: 5 * BW,
    borderBottomWidth: 1,
    padding: 5 * BW,
    paddingBottom: 10 * BW,
    borderColor: colors.secondaryColor,
  },
  date: {
    textAlign: 'center',
    color: '#ff9933',
    marginBottom: 10 * BW,
  },
  name: {
    fontSize: 14,
    fontWeight: 'bold',
    color: colors.textColor,
  },
  division: {
    fontSize: 12,
    color: colors.textColor,
    textAlign: 'left',
  },
  fullName: {
    fontSize: 14,
    fontWeight: 'bold',
    color: colors.textColor,
  },
});

export default styles;
