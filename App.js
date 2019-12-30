import React, {useState} from 'react';
import { StyleSheet, View, FlatList, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';

//components
import Header from './components/header';
import TodoItem from './components/todoItem';
import AddTodo from './components/addTodo';

export default function App() {
  const [todos, setTodos] = useState([
    {text: 'Buy coffee', key: '1'},
    {text: 'Create an app', key: '2'},
    {text: 'Play on the switch', key: '3'},
  ]);

  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.key != key)
    })
  }

  const submitHandler = (val) => {
    if(val.length > 3){
      setTodos((prevTodos) => {
        return [{text:val, key: Math.random().toString()},...prevTodos]
      })
    }else{
      Alert.alert('OOPS!', 'Todos must be over 3 characters long', [
        {text: 'Understood'}
      ])
    }
    
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss() }>
      <View style={styles.container}>
        <Header/>
        <View style={styles.content}>
          <AddTodo submitHandler={submitHandler}/>
          <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem={({item}) => (
              <TodoItem item={item} pressHandler={pressHandler}/>
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content:{
    padding: 40,
    flex: 1
  },
  list:{
    marginTop: 20,
    flex: 1
  }
});
