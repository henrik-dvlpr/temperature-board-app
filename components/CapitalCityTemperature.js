import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CapitalCityTemperature = (item) => {
    return (
        <View style={styles.item}>
            <div>
                <Text style={styles.title}>{item.nameEnglish}</Text>
                <Text style={styles.subTitle}>{item.countryNameEnglish}</Text>
            </div>
            <div>
                <Text>{item.temperature.value} {item.temperature.unit}</Text>
            </div>
        </View >
    );
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
    },
    subTitle: {
        fontSize: 20,
    },
});

export default CapitalCityTemperature;
