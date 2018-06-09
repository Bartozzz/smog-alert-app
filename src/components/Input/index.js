import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Text, Item, Input, Label } from 'native-base';

class InputComponent extends React.Component {
  render() {
    const { input, meta, label, ...inputProps } = this.props;

    return (
      <React.Fragment>
        <Item stackedLabel error={!meta.valid}>
          <Label>{label}</Label>

          <Input
            {...inputProps}
            onChangeText={input.onChange}
            onBlur={input.onBlur}
            onFocus={input.onFocus}
            value={input.value}
          />
        </Item>

        {meta.error && <Text style={styles.error}>{meta.error}</Text>}
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  error: {
    color: '#f15555',
    fontSize: 12,
    textAlign: 'right',
  },
});

export default InputComponent;
