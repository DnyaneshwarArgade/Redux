import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

const Header = () => {

  const cartData = useSelector((state) => state.reducer)
  const [cardItems, setCardItems] = useState(0);
  useEffect(() => {
    setCardItems(cartData.length)
  }, [cartData])

  return (
    <View>
      <Text style={{ fontSize: 24, textAlign: "right", borderBottomWidth: 2, }}>{cardItems}</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({

})