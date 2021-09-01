import React from 'react'
import { StyleSheet, TextInput } from 'react-native'
import { colors, spacing } from '../theme'

const AppTextInput = ({
   placeholder,
   secureTextEntry,
   onChangeText,
   value,
   ...otherProps
}) => {
   return (
      <TextInput
         value={value}
         onChangeText={onChangeText}
         blurOnSubmit
         secureTextEntry={secureTextEntry}
         style={styles.inputBox}
         placeholder={placeholder}
         {...otherProps}
      />
   )
}
const styles = StyleSheet.create({
   inputBox: {
      marginBottom: spacing.large,
      width: spacing.width - 20,
      backgroundColor: colors.white,
      height: 48,
      borderRadius: 15,
      color: colors.dark,
   },
})

export default AppTextInput
