import React from 'react';
import {View} from 'react-native';
import FontAwesome, {SolidIcons} from 'react-native-fontawesome';

const HamburgerMenu = () => {
  return (
    <View style={{}}>
      <FontAwesome
        icon={SolidIcons.bars}
        size={20}
        color="black"
        style={{marginRight: 10}}
      />
    </View>
  );
};

export default HamburgerMenu;
