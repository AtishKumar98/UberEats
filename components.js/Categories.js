import { View, Text , Image, ScrollView } from 'react-native'
import React from 'react'
const items=[
    {
        image:require("../assets/images/shopping-bag.png"),
        text:'Pick-up',
    },
    {
        image:require("../assets/images/soft-drink.png"),
        text:'Soft Drink',
    },
    {
        image:require("../assets/images/bread.png"),
        text:'Bakery Items',
    },
    {
        image:require("../assets/images/coffee.png"),
        text:'Beverage Items',
    },
    {
        image:require("../assets/images/deals.png"),
        text:'Meal Items',
    },
    {
        image:require("../assets/images/desserts.png"),
        text:'Desserts',
    },
    {
        image:require("../assets/images/fast-food.png"),
        text:'Fast Foods',
    }
]
export default function Categories() {
   
  return (
    <View style={{
        marginTop:5,
        backgroundColor:"#fff",
        paddingVertical:10,
        paddingLeft:20,
    }}>

    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {items.map((item,index)=>(
    <View key={index} style={{ alignItems:'center', margin:10}}>
        <Image source ={item.image} style={{ width:50,height:40, resizeMode:'contain'}}/>
      <Text style={{fontSize:13, fontWeight:'900'}}>{item.text}
      </Text>
    </View>
    ))}
    </ScrollView>
    
    </View>
  )
}