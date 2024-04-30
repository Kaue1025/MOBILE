import React, { useState } from 'react';
import { View, Switch, Image, StyleSheet } from 'react-native';

const CustomSwitch = () => {
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => {
    setIsEnabled(previousState => !previousState);
  };

  return (
    <View style={styles.container}>
      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
        style={styles.switch}
      />
      <Image
        source={isEnabled ? require('./assets/src/certo.png') : require('./assets/src/errado.jpg')}
        style={styles.switchImage}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  switch: {
    transform: [{ scaleX: 0.5 }, { scaleY: 0.5 }], // Redimensiona o switch para coincidir com o tamanho da imagem
    marginHorizontal: 10,
  },
  switchImage: {
    width: 50,
    height: 50,
  },
});

export default CustomSwitch;
