import React, {useState} from 'react'
import { StyleSheet, View, Text, TextInput, Button } from 'react-native'

export default function AddTodo({addTodo}) {
    const [title, settitle] = useState("")
    const [taskno, settaskno] = useState("")

    const titleChnager = val =>{
        settitle(val)
    }

    const tnChange = n =>{
        settaskno(n)
    }

    return (
        <View style={styles.addView}>
            <Text style={styles.text}>Book Name: </Text>
            <TextInput onChangeText={(n)=>tnChange(n)} style={styles.input}/>
            <Text style={styles.text}>Author Name: </Text>
            <TextInput onChangeText={(val)=>titleChnager(val)} style={styles.input}/>
            <Button title="Add Todo" color="tomato" onPress={() => addTodo(title, taskno )} />
        </View>
    )
}


const styles = StyleSheet.create({
    addView:{
        marginHorizontal: 20,
        marginVertical: 10,
    },
    input : {
        height: 40, 
        borderColor: 'tomato', 
        borderWidth: 2,
        // marginHorizontal: 20,
        
        marginBottom: 5,
        borderRadius:5,
        padding: 10
    },
    text:{
        marginTop: 15,
        marginBottom: 5,
        color: "tomato",
        fontWeight: "bold"
    }
 
})