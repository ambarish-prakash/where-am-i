import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import React from 'react';
import GEarthPage from './GEarthPage';
import {
  Alert,
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
  Image,
  Button,
} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

class App extends React.Component {
  startGame = () => {
    console.log('Pressed it');
    this.props.navigation.navigate('GamePage')
  }

  static headerMode = 'none';
  static navigationOptions = {
    headershown: false,
  };

  render() {
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
                onPress={this.startGame}
                style={styles.startButton}
              />
            </View>
            <View style={styles.endSpaceView}></View>
        </View>
      </SafeAreaView>
    </>
    )
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

// Create Stack Navigator gets two props createStackNavigator(routes, config)
const AppNavigator = createStackNavigator({
  Home: {screen: App, navigationOptions: {header: null}},
  GamePage: { screen: GEarthPage },
});

// Container of the app
const AppContainer = createAppContainer(AppNavigator);
export default AppContainer;