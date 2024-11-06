import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function MovieCard({ title, image, cinema, startTime }) {
    return (
        <View style={styles.card}>
            <Image source={{ uri: image }} style={styles.image} />
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.cinema}>Em cartaz no: {cinema}</Text>
            <Text style={styles.startTime}>Início: {startTime}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        width: '100%',
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 15,
        shadowColor: 'black',
        shadowOpacity: 0.1,
        shadowRadius: 5,
        shadowOffset: { width: 0, height: 2 },
        marginBottom: 20,
    },
    image: {
        width: '100%',
        height: 200,
        borderRadius: 10,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 10,
    },
    cinema: {
        fontSize: 16,
        color: '#555',
        marginTop: 5,
    },
    startTime: {
        fontSize: 14,
        color: '#777',
        marginTop: 5,
    },
});
