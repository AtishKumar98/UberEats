import { View, Text,Image, TouchableOpacity } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { ScrollView } from 'react-native-web';



export const localRestaurants = [
    {
      name: "Beachside Bar",
      image_url:
        "https://images.pexels.com/photos/5490999/pexels-photo-5490999.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      categories: ["Cafe", "Bar"],
      price: "$$",
      reviews: 1244,
      rating: 4.5,
    },
    {
      name: "Benihana",
      image_url:
        "https://images.pexels.com/photos/1653877/pexels-photo-1653877.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      categories: ["Cafe", "Bar"],
      price: "$$",
      reviews: 1244,
      rating: 3.7,
    },
    {
      name: "India's Grill",
      image_url:
      "https://images.pexels.com/photos/1239347/pexels-photo-1239347.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      categories: ["Indian", "Bar"],
      price: "$$",
      reviews: 700,
      rating: 4.9,
    },
    {
      name: "Jimis Burger",
      image_url:
      "https://images.pexels.com/photos/2282530/pexels-photo-2282530.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      categories: ["Indian", "Bar"],
      price: "$$",
      reviews: 700,
      rating: 4.9,
    },
    {
      name: "Burger factory",
      image_url:
      "https://images.pexels.com/photos/3023479/pexels-photo-3023479.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      categories: ["Indian", "Bar"],
      price: "$$",
      reviews: 700,
      rating: 4.9,
    },
  ];


export default function Restaurant(props) {
  return (
    <TouchableOpacity activeOpacity={1} style={{marginBottom:30}}>
        {props.restaurantData.map((restaturant,index)=>(
      
    <View key={index} style={{marginTop:4,padding:15,backgroundColor:'white'}}>

     <RestaurantImage image={restaturant.image_url}/>
     <RestaurantInfo name={restaturant.name} rating={restaturant.rating}/>
    </View>
      
))}
    </TouchableOpacity>
  )
}

const RestaurantImage = (props)=>(
    <>
    <Image source ={{uri: props.image}}
    style={{width:"100%",height:180,}}/>
    <TouchableOpacity style={{position:'absolute',right:20,top:20,}}>
        <MaterialCommunityIcons name='heart-outline' size={25} color='#fff'/>
    </TouchableOpacity>
    </>
)

const RestaurantInfo = (props) =>(
    <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center', margin:10}}>
        <View>
            <Text style={{fontSize:15,fontWeight:'bold'}}>{props.name}</Text>
            <Text style={{fontSize:12,fontWeight:'bold', color:'grey'}}>50-60 · min</Text>
        </View>
        <View style={{
            backgroundColor:'#eee',
            height:30,
            width:30,
            alignItems:'center',
            justifyContent:'center',
            borderRadius:15,
    }}>

        <Text>{props.rating}</Text>
        </View>
    </View>
)