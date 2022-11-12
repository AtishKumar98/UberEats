import { View, Text, SafeAreaView, Touchable, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

export default function HeaderTabs() {
    const [activeTab,setActiveTab] =useState("Delivery")
  return (
    <SafeAreaView style={{flexDirection:"row",alignItems:"center",justifyContent:"center",marginTop:40 }}>
      <HeaderButton 
      text="Delivery" 
      btncolor="black" 
      textcolor="white" 
      activeTab={activeTab} 
      setActiveTab={setActiveTab}/>
      <HeaderButton 
      text="Pickup" 
      btncolor="white" 
      textcolor="black"
      activeTab={activeTab} 
      setActiveTab={setActiveTab}
      />
    </SafeAreaView>
    
  )
}


const HeaderButton= (props) =>(
    
    <View>
        <TouchableOpacity 
        style={{
        backgroundColor:props.activeTab===props.text?"black":"white",
        paddingVertical:6,
        paddingHorizontal:16,
        borderRadius:30,
        }}
        onPress={()=>props.setActiveTab(props.text)} >
        <Text style={{color:props.activeTab===props.text?"white":"black",
        fontSize:15,
        fontWeight:'900'}}>
           {props.text}
        </Text>
        </TouchableOpacity>
    </View>
);