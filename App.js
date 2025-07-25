import { StyleSheet, Text, View, Image, Button, ScrollView } from 'react-native'
import React from 'react'
import Header from './Components/redux/Header'
import Product from './Components/redux/Product'
// import { ScrollView } from 'react-native/types_generated/index'
// import { Button } from 'react-native/types_generated/index'

const App = () => {

  const productList = [
    {
      name: 'Samsung Galaxy S23',
      color: 'black',
      price: 199999,
      Image: 'https://cdn-icons-png.flaticon.com/512/15/15874.png',
    },
    {
      name: 'Apple iPhone 14',
      color: 'white',
      price: 200000,
      Image: 'https://cdn-icons-png.flaticon.com/512/15/15874.png',
    },
    {
      name: 'Vivo V25 Pro',
      color: 'pink',
      price: 19000,
      Image: 'https://cdn-icons-png.flaticon.com/512/15/15874.png',
    }
  ]

  return (
    <ScrollView style={styles.container}>
      {/* <Text style={{fontSize: 28, fontWeight: 'bold'}}>App</Text> */}
      <Header />
      {
       productList.map((item, index) => <Product key={index} item={item} />)
       
      }
    </ScrollView>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
})
