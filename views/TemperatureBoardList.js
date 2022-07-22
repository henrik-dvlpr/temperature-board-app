import React, { useEffect, useState } from 'react';
import { SafeAreaView, FlatList, StyleSheet, StatusBar } from 'react-native';
import CapitalCityTemperature from '../components/CapitalCityTemperature';

const TemperatureBoardList = () => {
    const renderItem = ({ item }) => new CapitalCityTemperature(item);

    const [data, setData] = useState([]);
    useEffect(() => fetch('http://localhost:8080/api')
        .then(response => response.json())
        .then(json => {
            if (data.length == 0) {
                console.log('Fetching data...')
                setData(json);
            }
        })
        .catch((error) => console.error(error)));

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={item => item.countryNameEnglish}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
});

export default TemperatureBoardList;
