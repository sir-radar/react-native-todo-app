import React, {useState} from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';

export default function AddTodo({submitHandler}){

  const [todo, setTodo] = useState('');

  return(
    <View>
      <TextInput
        style={styles.input}
        placeholder='new todo...'
        onChangeText={(val) => setTodo(val)}
      />
      <Button onPress={()=> submitHandler(todo)} title='add todo' color='coral'/>
    </View>
  )
}


const styles = StyleSheet.create({
  input:{
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd'
  }
})
