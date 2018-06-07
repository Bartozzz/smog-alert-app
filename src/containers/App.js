import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-navigation';

export default class AddScreen extends React.Component {
  render() {
    const { children } = this.props;

    return <View style={styles.container}>{children}</View>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
