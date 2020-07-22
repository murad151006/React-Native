import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function Header() {
    return (
        <View style={styles.header}>
            <Text style={styles.headerText}>Books to read</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header : { 
        paddingTop: 40,
        marginBottom: 10

    },
    headerText: {
        backgroundColor: "tomato",
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
        padding: 20
    }
})
