import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, View, FlatList, Text, ScrollView } from 'react-native';
import Header from './components/Header';
import AddTodo from './components/AddTodo';
import TodoItem from './components/TodoItem';

export default function App() {
  const [name, setname] = useState([]);

  const addTodo = (title, taskno) => {

    if(title.length > 2){
      setname(
        (curentItem)=>{
        return [
          ...curentItem,
          {title: title, taskno: taskno, id: Math.random().toString()}
          
        ]
      })
    }

    else{
      Alert.alert('Right button pressed')
    }

 }

      const removeItem = (id) =>{
        setname(
          (pervTodo) => {
            return pervTodo.filter(todo => todo.id != id)
          }
        )
      }


  return (
    <View style={styles.container}>
      
      <View>
        <Header/>
      </View>
      
      <View>
       
        { name.length > 0 ?
          <FlatList
          data={name}
          renderItem={({item})=>(
            <TodoItem task={item} removeItem={removeItem} />
          )}
          keyExtractor={item => item.id}
          /> : <Text style={styles.noTask}>No Books in Your List</Text>}
          
      </View>
      
      <View>
        <AddTodo addTodo={addTodo}/>
      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  noTask:{
    marginHorizontal: 20,
    fontStyle:"italic",
    textAlign: "center",
    marginTop: 20,
    color: "red"
  }
});
