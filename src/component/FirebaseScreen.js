import React, { useEffect, useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';
import firestore from '@react-native-firebase/firestore';



export function FirebaseScreen() {
  const [ todo, setTodo ] = useState(' ');
  const [ loading, setLoading ] = useState(true);
  const [ todos, setTodos ] = useState([]);

  const todosCollectionRef = firestore().collection('Todos');

  useEffect(() => {
    return todosCollectionRef
    .orderBy('title', 'desc')
    .onSnapshot(querySnapshot => {
      const list = [];
    
      querySnapshot.forEach(doc => {
        
        list.push({
          id: doc.id,
          ...doc.data()
          
        });
      });

      setTodos(list);
      
      setLoading(false)
      
    });
  }, [])

  async function addTodo() {
    await todosCollectionRef.add({
      title: todo,
      desscription: "this is a description"
    });
    setTodo('')
  }
  
  if (loading) {
    return <Text>loading...</Text>
  }
  return (
    <View style={styles.container}>
      <Text>Hello firebase</Text>
      <Text>List of Todos</Text>
      {todos.map(item => (
        <View style={styles.container} key={item.id}>
          <Text>{item.title}</Text>
        </View>
        
      ))}
      <TextInput 
        style={styles.input}
        value={todo}
        placeholder="add you todo"
        onChangeText={(text) => setTodo(text)}
      />
      <Button title="Add" onPress={addTodo}/>
    
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    borderWidth: 1,
    borderColor: 'black'
  }
})