import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';

function LoginScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <View style={styles.mapcontainer}>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          initialRegion={{
            latitude: 36.752887,
            longitude: 3.042048,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}
          showUserLocation={true} >
            <Marker coordinate={{
              latitude: 37.78825,
              longitude: -122.4324,
            }} />
        </MapView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mapcontainer: {
        height: '100%',
        width: '100%',
        justifyContent: 'flex-end',
        alignItems: 'center',
  },
  map: {
        ...StyleSheet.absoluteFillObject,
  },
})

export default LoginScreen;