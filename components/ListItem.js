
import React, {memo} from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

import PropTypes from 'prop-types';
import Avatar from './Avatar';

const getAvatarInitials = textString => {
  if (!textString) return '';
  const text = textString.trim();
  const textSplit = text.split(' ');
  if (textSplit.length <= 1) return text.charAt(0);
  const initials =
    textSplit[0].charAt(0) + textSplit[textSplit.length - 1].charAt(0);
  return initials;
};

const ListItem = props => {
  shouldComponentUpdate = ()=> {
    return false;
  }
  const { item, onPress,onLongPress } = props;
  return (
    <View>
      <TouchableOpacity onPress={() => onPress(item)}
                        onLongPress={()=>onLongPress(item)}
      >
        <View style={styles.itemContainer}>
          <View style={styles.leftElementContainer}>
            <Avatar
              img={item.hasThumbnail ? { uri: item.thumbnailPath } : undefined}
              placeholder={getAvatarInitials(
                `${item.givenName} ${item.familyName}`
              )}
              width={70}
              height={70}
            />
          </View>
          <View style={styles.rightSectionContainer}>
            <View style={styles.mainTitleContainer}>
              <Text style={styles.titleStyle}>{`${item.givenName} ${
                item.familyName
              }`}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    minHeight: 44,
    height: 75,
  },
  leftElementContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 2,
    paddingLeft: 13,
  },
  rightSectionContainer: {
    marginLeft: 28,
    flexDirection: 'row',
    flex: 10,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: '#515151',
  },
  mainTitleContainer: {
    justifyContent: 'center',
    flexDirection: 'column',
    flex: 1,
  },
  titleStyle: {
    fontSize: 25,
  },
});

export default memo(ListItem);

ListItem.propTypes = {
  item: PropTypes.object,
  onPress: PropTypes.func,
};