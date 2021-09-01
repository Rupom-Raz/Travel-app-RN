import React from 'react'
import { StyleSheet, TextInput, View } from 'react-native'
import { colors, spacing } from '../theme'

const ConfirmationField = () => {
   return (
      <View style={styles.container}>
         <TextInput keyboardType="number-pad" style={styles.inputBox} />
         <TextInput keyboardType="number-pad" style={styles.inputBox} />
         <TextInput keyboardType="number-pad" style={styles.inputBox} />
         <TextInput keyboardType="number-pad" style={styles.inputBox} />
         <TextInput keyboardType="number-pad" style={styles.inputBox} />
         <TextInput keyboardType="number-pad" style={styles.inputBox} />
      </View>
   )
}

export default ConfirmationField

const styles = StyleSheet.create({
   container: {
      flexDirection: 'row',
      marginTop: spacing.heading,
   },
   inputBox: {
      borderColor: colors.light,
      borderWidth: 2,
      height: 40,
      width: 40,
      marginHorizontal: spacing.tiny,
      textAlign: 'center',
      color: colors.white,
   },
})
