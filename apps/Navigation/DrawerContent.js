import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer'
import React, { useContext } from 'react'
import { StyleSheet, View } from 'react-native'
import { Avatar, Caption, Drawer, Title } from 'react-native-paper'
import { colors, spacing } from '../../theme'
import { AuthContext } from './AuthProvider'

const DrawerContent = (props) => {
   const { logOut } = useContext(AuthContext)
   return (
      <View style={styles.container}>
         <DrawerContentScrollView {...props}>
            <View style={styles.userInfo}>
               <Avatar.Image
                  size={80}
                  source={{
                     uri: 'https://lh3.googleusercontent.com/a-/AOh14Gh43XYHFKYCd1FBggTc5c5c_zthVm2Z1x2XJKGJTw=s96-c',
                  }}
               />
               <Title style={{ color: colors.white, fontFamily: 'bold' }}>
                  Rupom Raz
               </Title>
               <Caption style={{ color: colors.grayFont }}>
                  Sylhet,Bangladesh
               </Caption>
            </View>

            <Drawer.Section style={styles.drawerSection}>
               <DrawerItem
                  icon={() => (
                     <MaterialCommunityIcons
                        name="wallet"
                        color={colors.grayFont}
                        size={25}
                     />
                  )}
                  label="Wallet"
                  activeTintColor={colors.green}
                  inactiveTintColor={colors.grayFont}
                  onPress={() => {
                     props.navigation.navigate()
                  }}
               />
               <DrawerItem
                  icon={() => (
                     <MaterialCommunityIcons
                        name="send"
                        color={colors.grayFont}
                        size={25}
                     />
                  )}
                  label="Feedback"
                  activeTintColor={colors.green}
                  inactiveTintColor={colors.grayFont}
                  onPress={() => {
                     props.navigation.navigate()
                  }}
               />
               <DrawerItem
                  icon={() => (
                     <MaterialIcons
                        name="star-rate"
                        color={colors.grayFont}
                        size={25}
                     />
                  )}
                  label="Rate our app"
                  activeTintColor={colors.green}
                  inactiveTintColor={colors.grayFont}
                  onPress={() => {
                     props.navigation.navigate()
                  }}
               />
               <DrawerItem
                  icon={() => (
                     <MaterialCommunityIcons
                        name="help-box"
                        color={colors.grayFont}
                        size={25}
                     />
                  )}
                  label="View support"
                  activeTintColor={colors.green}
                  inactiveTintColor={colors.grayFont}
                  onPress={() => {
                     props.navigation.navigate()
                  }}
               />
               <DrawerItem
                  icon={() => (
                     <MaterialIcons
                        name="notifications-active"
                        color={colors.grayFont}
                        size={25}
                     />
                  )}
                  label="Notification"
                  activeTintColor={colors.green}
                  inactiveTintColor={colors.grayFont}
                  onPress={() => {
                     props.navigation.navigate()
                  }}
               />
               <DrawerItem
                  style={{ marginTop: 65 }}
                  icon={() => (
                     <MaterialCommunityIcons
                        name="exit-to-app"
                        color={colors.grayFont}
                        size={25}
                     />
                  )}
                  label="Signout"
                  activeTintColor={colors.green}
                  inactiveTintColor={colors.grayFont}
                  onPress={() => logOut()}
               />
            </Drawer.Section>
         </DrawerContentScrollView>
      </View>
   )
}
const styles = StyleSheet.create({
   container: {
      flex: 1,
      flexDirection: 'column',
      paddingTop: spacing.large,
      paddingHorizontal: spacing.body,
   },
   userInfo: {
      alignItems: 'center',
   },
   drawerSection: {
      marginTop: 15,
   },
})

export default DrawerContent
