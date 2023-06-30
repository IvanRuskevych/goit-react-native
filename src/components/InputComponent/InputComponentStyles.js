import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  textInput: {
    width: '100%',

    padding: 16,
    height: 50,
    /* Gray/01 */
    backgroundColor: '#F6F6F6',
    /* Gray/02 */
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#E8E8E8',

    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 16,
    lineHeight: 19,
    // /* identical to box height */
    // /* Gray/03 */
    color: '#212121',
    textDecorationLine: 'none',
  },

  focusedTextInput: {
    borderColor: '#FF6C00',
  },
});
