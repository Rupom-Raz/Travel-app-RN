import React from 'react'
import {
   Image,
   KeyboardAvoidingView,
   ScrollView,
   StyleSheet,
   View,
} from 'react-native'
import { Caption, Headline, Paragraph } from 'react-native-paper'
import AppButton from '../../components/AppButton'
import ConfirmationField from '../../components/ConfirmationField'
import { colors, spacing } from '../../theme'

const VerifyPass = ({ navigation }) => {
   return (
      <KeyboardAvoidingView style={{ flex: 1 }} behavior="height">
         <ScrollView>
            <View style={styles.container}>
               <Headline style={styles.heading}>Verification</Headline>
               <View style={styles.avatar}>
                  <Image
                     style={styles.image}
                     source={require('../../assets/images/happy.jpg')}
                  />
               </View>
               <View style={styles.text}>
                  <Paragraph style={styles.firstText}>
                     Enter the verfication code we {'\n'} just send you on your
                     email
                  </Paragraph>
                  <ConfirmationField />
                  <Caption style={styles.resend}>Resend code</Caption>
                  <AppButton
                     text="Verify"
                     onPress={() => navigation.navigate('Login')}
                  />
               </View>
            </View>
         </ScrollView>
      </KeyboardAvoidingView>
   )
}

export default VerifyPass

const styles = StyleSheet.create({
   container: {
      justifyContent: 'center',
      height: spacing.height,
      flex: 1,
      backgroundColor: colors.dark,
   },
   heading: {
      fontFamily: 'bold',
      textAlign: 'center',
      alignItems: 'center',
      fontSize: spacing.large,
      color: colors.white,
      justifyContent: 'center',
      marginVertical: spacing.large,
   },
   avatar: {
      alignItems: 'center',
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
   resend: {
      color: colors.light,
      fontSize: spacing.body,
      marginLeft: spacing.width / 1.7,
      paddingVertical: spacing.medium,
   },
})
