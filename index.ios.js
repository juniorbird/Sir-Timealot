/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
 'use strict';

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';



class SirTimealot extends Component {

  constructor(props) {
    super(props);
    this.state = {
      timeLeft: 9,
    };
    this.decreaseTime = this.decreaseTime.bind(this);
  }

  decreaseTime() {
    this.setState({ timeLeft: --this.state.timeLeft });
  }

  componentDidMount() {
    setInterval(this.decreaseTime, 1000, this.state.timeLeft);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to Sir Timealot!
        </Text>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(text) => this.setState({ timeLeft: text })}
          value={this.state.timeLeft.toString()}
        />
        <Text style={styles.instructions}>
          Time Left:
        </Text>
        <Text style={styles.instructions}>
          {this.state.timeLeft} seconds
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('SirTimealot', () => SirTimealot);
