import * as firebase from 'firebase'
import React, { useState } from 'react'
import { Image, ScrollView, StyleSheet, View } from 'react-native'
import { Caption, Headline, Paragraph } from 'react-native-paper'
import AppButton from '../../components/AppButton'
import AppTextInput from '../../components/AppTextInput'
import KeyBoardAvoidComp from '../../components/KeyBoardAvoidComp'
import { colors, spacing } from '../../theme'

const ForgotPass = () => {
   const [email, setEmail] = useState('')
   return (
      <KeyBoardAvoidComp>
         <ScrollView>
            <View style={styles.container}>
               <Headline style={styles.heading}>Forgot Password?</Headline>
               <View style={styles.avatar}>
                  <Image
                     style={styles.image}
                     source={require('../../assets/images/sad.jpg')}
                  />
               </View>
               <View style={styles.text}>
                  <Paragraph style={styles.firstText}>
                     Enter the email address {'\n'} associate with your account
                  </Paragraph>
                  <Caption style={styles.secondText}>
                     We will email you a link to reset {'\n'} your password
                  </Caption>
                  <AppTextInput
                     placeholder="Enter email address"
                     onChangeText={() => setEmail(email)}
                  />
                  <AppButton
                     text="Send"
                     onPress={() => {
                        try {
                           firebase.default
                              .auth()
                              .sendPasswordResetEmail(email)
                              .then(() => alert('check your email'))
                              .catch((err) =>
                                 console.log('error occoured', err),
                              )
                        } catch (error) {
                           console.log(error)
                        }
                     }}
                  />
               </View>
            </View>
         </ScrollView>
      </KeyBoardAvoidComp>
   )
}

export default ForgotPass

const styles = StyleSheet.create({
   container: {
      height: spacing.height,
      flex: 1,
      backgroundColor: colors.dark,
      justifyContent: 'center',
   },
   heading: {
      fontFamily: 'bold',
      textAlign: 'center',
      alignItems: 'center',
      fontSize: spacing.large,
      color: colors.white,
      justifyContent: 'center',
      marginTop: spacing.large,
   },
   avatar: {
      alignItems: 'center',
      paddingTop: spacing.body,
   },
   image: {
      resizeMode: 'cover',
      borderRadius: 100,
      width: 200,
      height: 200,
   },
   text: {
      marginVertical: spacing.medium,
      alignItems: 'center',
   },
   firstText: {
      textAlign: 'center',
      color: colors.white,
      fontSize: spacing.large,
      marginTop: 20,
      lineHeight: 30,
   },
   secondText: {
      marginBottom: spacing.heading,
      color: colors.grayFont,
      fontSize: spacing.body + 3,
      textAlign: 'center',
      lineHeight: 25,
   },
})
