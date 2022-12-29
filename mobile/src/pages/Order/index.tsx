import React from "react";
import { View, Text, StyleSheet } from 'react-native';

import { useRoute, RouteProp } from '@react-navigation/native';

type RouterDetailParams = {
    Order: {
        number: string | number;
        order_id: string;
    }
}

type OrderRouteProps = RouteProp<RouterDetailParams, 'Order'>;

export default function Order() {
    const route = useRoute<OrderRouteProps>();

    return (
        <View>
            <Text>Tela Order</Text>
            <Text>
                { route.params.order_id }
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        
    }
})