import {StyleSheet} from 'react-native';
import {BW, colors} from '../../consts';

const styles = StyleSheet.create({
  loader: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  itemContainer: {
    marginHorizontal: 10 * BW,
    marginVertical: 5 * BW,
    borderWidth: 1,
    borderRadius: 10 * BW,
    padding: 10 * BW,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderColor: colors.secondaryColor,
  },
  name: {fontSize: 14, fontWeight: 'bold', color: colors.textColor},
  team: {fontSize: 12, color: colors.textColor, textAlign: 'left'},
  position: {fontSize: 14, color: colors.textColor},
  container: {flex: 1, backgroundColor: colors.backgroundColor},
});

export default styles;
