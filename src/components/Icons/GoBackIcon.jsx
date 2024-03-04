import React from 'react';
import {View} from 'react-native';
import FontAwesome, {SolidIcons} from 'react-native-fontawesome';

const GoBackIcon = () => {
  return (
    <View style={{}}>
      <FontAwesome
        icon={SolidIcons.arrowLeft}
        size={20}
        color="black"
        style={{marginLeft: 10}}
      />
    </View>
  );
};

export default GoBackIcon;
