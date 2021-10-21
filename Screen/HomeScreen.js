import React from 'react';
import { Button, View } from 'react-native';

const HomeScreen = () => {
  return (
    <>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        onPress={() => navigation.navigate('list')}
        title="Go to list"
      />
    </View>
    </>
  );
}

export default HomeScreen;
