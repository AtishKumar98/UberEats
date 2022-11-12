import { View, Text ,SafeAreaView, ScrollView} from 'react-native'
import React, { useEffect, useState } from 'react'
import HeaderTabs from '../components.js/HeaderTabs'
import Searchbar from '../components.js/Searchbar'
import Categories from '../components.js/Categories'
import Restaurant, { localRestaurants } from '../components.js/Restaurant'

// const YELP_API_KEY =
//   "bdRJutLhFAQJ36t7b89CWjHFBU4OKzjt9wvZzcY-nkgmvTqlNMjZWV1eG7iBQ9R74SyfxRg9LWnBAkZY06BtAZAe4d2dfX-2vuX8a1l5V7foctHfX9UKEyoM5ts3YXYx";
//   const getRestaurantsFromYelp = () => {
//     const yelpUrl = "https://api.yelp.com/v3/businesses/search?term=restaurants&location=SanDiego";

//     const apiOptions = {
//       headers: {
//         Authorization: `Bearer ${YELP_API_KEY}`,
//       },
//     };

//     return fetch(yelpUrl, apiOptions)
//       .then((res) => res.json())
//       .then((json)=>setRestaurantData(json.businesses));
//     //   .then((json) =>
//     //     setRestaurantData(
//     //       json.businesses.filter((business) =>
//     //         business.transactions.includes(activeTab.toLowerCase())
//     //       )
//     //     )
//     //   );
//   };

//   useEffect(() => {
//     getRestaurantsFromYelp();
//   }, []);

export default function Home() {
    const [restaurantData, setRestaurantData] = useState(localRestaurants)
   
  return (
    <SafeAreaView style={{backgroundColor:"#eee", flex:1}}>
        <View style={{backgroundColor:'white',padding:15}}>
             <HeaderTabs/>
             <Searchbar/>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
             <Categories/>
             

             <Restaurant restaurantData={restaurantData}/>
             
        </ScrollView>
    </SafeAreaView>
   
  )
}