import { StyleSheet, Text, View, Image, Button } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from './Action';

const Product = (props) => {
    const item = props.item;
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.reducer);
    const [isAdded, setIsAdded] = useState(false);

    const handleAddToCart = (item) => {
        dispatch(addToCart(item));
    };

    const handleRemoveFromCart = (item) => {
        dispatch(removeFromCart(item.name));  // Ensure reducer uses item.name
    };

    useEffect(() => {
        let result = cartItems.filter((element) => {
            return element.name === item.name;
        });
        setIsAdded(result.length > 0);
    }, [cartItems]);

    return (
        <View style={styles.container}>
            <Image source={{ uri: item.Image }} style={styles.image} />
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.text}>Color: {item.color}</Text>
            <Text style={styles.text}>Price: ₹{item.price}</Text>
            <View style={styles.buttonWrapper}>
                {
                    isAdded ?
                        <Button title='Remove From Cart' color="red" onPress={() => handleRemoveFromCart(item)} />
                        :
                        <Button title='Add To Cart' onPress={() => handleAddToCart(item)} />
                }
            </View>
        </View>
    );
};

export default Product;

const styles = StyleSheet.create({
    container: {
        marginBottom: 16,
        alignItems: 'center',
        borderBottomColor: "orange",
        borderBottomWidth: 2,
        padding: 10
    },
    image: {
        width: 100,
        height: 100,
        marginBottom: 12
    },
    name: {
        fontSize: 24,
        marginTop: 5
    },
    text: {
        fontSize: 20,
        marginTop: 5,
        marginBottom: 5
    },
    buttonWrapper: {
        marginTop: 10,
        marginBottom: 10,
        width: '60%'
    }
});
