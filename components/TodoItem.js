import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

export default function TodoItem({task, removeItem}) {
    return (
        <View style={styles.todo}>
            
            <Text style={styles.todoText}>Book: {task.taskno}</Text>
            <Text style={styles.todoText}>Author: {task.title}</Text>
            <Button title="Completed" color="red" onPress={()=>removeItem(task.id)}/>
           
            
        </View>
    )
}

const styles = StyleSheet.create({
    todo:{
       borderRadius: 5,
       borderColor: "tomato",
       borderWidth: 1,
    //    flexDirection: "row",
    //    justifyContent: "space-around",
       backgroundColor: "white",
       padding: 5,
       marginVertical: 5,
       marginHorizontal: 20,
    },
    todoText:{
       margin:2,
       textAlign: "left",
       fontSize: 15,
       
    }
})
