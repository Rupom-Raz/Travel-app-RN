import { MaterialCommunityIcons } from '@expo/vector-icons'
import React from 'react'
import {
   FlatList,
   ScrollView,
   StyleSheet,
   TouchableOpacity,
   View,
} from 'react-native'
import * as Animatable from 'react-native-animatable'
import Badge from '../../components/Badge'
import DestinationCard from '../../components/DestinationCard'
import HeroCarousel from '../../components/HeroCarousel'
import HotelCard from '../../components/HotelCard'
import TodoCard from '../../components/TodoCard'
import VectorComponent from '../../components/VectorComponent'
import { colors, spacing } from '../../theme'
import { DestinationData, HotelData, TodoData } from '../Data/Data'

const HomeScreen = ({ navigation }) => {
   return (
      <ScrollView
         showsVerticalScrollIndicator={false}
         style={{ backgroundColor: colors.dark }}
      >
         <View style={styles.container}>
            <View style={styles.topContainer}>
               <HeroCarousel />
               <View style={styles.topBar}>
                  <TouchableOpacity
                     activeOpacity={0.8}
                     onPress={() => {
                        navigation.toggleDrawer()
                     }}
                  >
                     <MaterialCommunityIcons
                        name="menu"
                        color={colors.white}
                        size={spacing.large}
                     />
                  </TouchableOpacity>
                  <TouchableOpacity activeOpacity={0.8}>
                     <MaterialCommunityIcons
                        name="search-web"
                        color={colors.white}
                        size={spacing.large}
                     />
                  </TouchableOpacity>
               </View>
            </View>

            <Animatable.View
               animation="fadeInRightBig"
               style={styles.iconContainer}
            >
               <VectorComponent
                  text="Hotels"
                  image={require('../../assets/images/vector1.png')}
               />
               <VectorComponent
                  text="Flights"
                  image={require('../../assets/images/vector2.png')}
               />
               <VectorComponent
                  text="To Do"
                  image={require('../../assets/images/vector3.png')}
               />
               <VectorComponent
                  text="Adventures"
                  image={require('../../assets/images/vector4.png')}
               />
            </Animatable.View>

            <View style={styles.placeContainer}>
               <Badge text="Popular destination" />
               <View style={styles.destination}>
                  <FlatList
                     decelerationRate={'fast'}
                     horizontal
                     showsHorizontalScrollIndicator={false}
                     data={DestinationData}
                     keyExtractor={(item) => item.id.toString()}
                     renderItem={({ item }) => (
                        <DestinationCard text={item.text} image={item.image} />
                     )}
                  />
               </View>
            </View>
            <View style={styles.todoContainer}>
               <Badge text="Top Todo" />
               <MaterialCommunityIcons
                  name="chevron-right"
                  size={30}
                  color={colors.white}
               />
            </View>
            <View style={styles.todoCarousel}>
               <FlatList
                  horizontal
                  decelerationRate={'fast'}
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  data={TodoData}
                  keyExtractor={(item) => item.id.toString()}
                  renderItem={({ item }) => (
                     <TodoCard
                        image={item.image}
                        title={item.title}
                        place={item.place}
                     />
                  )}
               />
            </View>

            <View style={styles.hotelBadge}>
               <Badge text="Hotel best deals" />
               <MaterialCommunityIcons
                  name="chevron-right"
                  size={30}
                  color={colors.white}
               />
            </View>

            <View style={styles.hotelCard}>
               {HotelData.map((item) => {
                  return (
                     <HotelCard
                        key={item.id}
                        name={item.name}
                        image={item.image}
                        price={item.price}
                     />
                  )
               })}
            </View>
         </View>
      </ScrollView>
   )
}
const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: colors.dark,
   },
   topContainer: {
      flexDirection: 'column',
   },
   todoCarousel: {
      paddingLeft: spacing.body,
   },
   topBar: {
      position: 'relative',
      flexDirection: 'row',
      justifyContent: 'space-between',
      bottom: spacing.height < 650 ? 340 : 400,
      paddingTop: spacing.large + 10,
      paddingHorizontal: spacing.small,
   },
   iconContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      borderBottomWidth: 1,
      borderBottomColor: colors.grayFont,
      marginTop: -40,
   },

   todoContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
   },
   hotelBadge: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
   },
})

export default HomeScreen
