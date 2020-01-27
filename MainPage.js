
import React from 'react';
import {
  Alert,
  Component,
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
  Image,
  Button,
} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

/*const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View
          contentInsetAdjustmentBehavior="automatic"
          style={styles.mainView}>
            <Text style={styles.header}> Where Am I? </Text>
            <View style={styles.imageView}><Image source={require('./src/images/globe2.png')} style={styles.greetingImage} /></View>
            <View style={styles.startButtonView}>
              <Button
                title="START"
                onPress={() => Alert.alert('Simple Button pressed')}
                style={styles.startButton}
              />
            </View>
            <View style={styles.endSpaceView}></View>
        </View>
      </SafeAreaView>
    </>
  );
};
*/

class MainPage extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View
          contentInsetAdjustmentBehavior="automatic"
          style={styles.mainView}>
            <Text style={styles.header}> Where Am I? </Text>
            <View style={styles.imageView}><Image source={require('./src/images/globe2.png')} style={styles.greetingImage} /></View>
            <View style={styles.startButtonView}>
              <Button
                title="START"
                //onPress={() => Alert.alert('Simple Button pressed')}
                onPress={() => navigate('Profile', {name: 'Jane'})}
                style={styles.startButton}
              />
            </View>
            <View style={styles.endSpaceView}></View>
        </View>
      </SafeAreaView>
    </>
    );
  }
};

const styles = StyleSheet.create({
  mainView: {
    backgroundColor: Colors.dark,
    height: '100%',
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'stretch',
  },
  header: {
    flex: 3,
    fontSize: 64,
    fontFamily: 'Smallville',
    color: Colors.white,
    textAlign: 'center',
    paddingTop: 40,
  },
  greetingImage: {
    alignSelf: 'center',
    backgroundColor: 'transparent',
    alignContent: 'center',
    width: '76%',
    height: '75%',
  },
  imageView: {
    flex: 9,
    alignContent: 'center',
  },
  startButtonView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingBottom: 20,
    color: Colors.black,
  },
  startButton: {
    color: Colors.black,
  },
  endSpaceView: {
    flex: 1,
  },
});
