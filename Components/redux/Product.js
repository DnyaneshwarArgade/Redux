import { StyleSheet, Text, View, Image, Button } from 'react-native'
import React, { use } from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from './Action'

const Product = (props) => {
    const item = props.item;
    const dispatch = useDispatch();

    const handleaddToCart = (item) => {
        // console.log("Add to cart clicked...!!!", item);
        dispatch(addToCart(item))
    }


    return (
        <View style={{ marginBottom: 16, alignItems: 'center', borderBottomColor: "orange", borderBottomWidth: 2, padding: 10 }}>
            <Image source={{ uri: item.Image }} style={{ width: 100, height: 100, marginBottom: 12 }} />
            <Text style={{ fontSize: 24, marginTop: 5, }}>{item.name}</Text>
            <Text style={{ fontSize: 20, marginTop: 5, }}>Color: {item.color}</Text>
            <Text style={{ fontSize: 20, marginTop: 5, marginBottom: 5 }}>Price: ₹{item.price}</Text>
            <Button style={{ marginBottom: 23, }} title='Add TO Cart' onPress={() => handleaddToCart(item)} />
        </View>
    )
}

export default Product

const styles = StyleSheet.create({})