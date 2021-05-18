import React, { useState } from 'react';
import { View, FlatList, Text, Button, TextInput, TouchableOpacity } from 'react-native';

const List = [
  { id: '1', name: 'Anurag' },
  { id: '2', name: 'Mayank' },
  { id: '3', name: 'Godrej' },
  { id: '4', name: 'Fire' },
  { id: '5', name: 'React' },
  { id: '6', name: 'Laptop' },
  { id: '7', name: 'Computer' },
  { id: '8', name: 'Remote' },
]

const App = () => {

  //--------------- once click the flatlist's item and it will change into title----------------
  const [title, settitle] = useState(title);

  // ------------A to Z orderd in FlatList---------------------------  
  const [num, setnum] = useState(List);
  const ascedning = () => {
    var number = List.sort((a, b) => a.name.localeCompare(b.name))
    setnum(number);
  }

  // -------------Z to A Order in FlatList--------------------
  const descending = () => {
    var number = List.sort((a, b) => b.name.localeCompare(a.name))
    setnum(number);
  }

  //-------------- we can search item by name in searchbar-----------------
  const handleSearch = (text) => {
    const formattedQuery = text.toLowerCase()
    var bedrooms = List.filter(user => user.name.includes(formattedQuery))
    setnum(bedrooms)
  }

  // -------------------change backgroundColor randomly-----------------
  const [color, setcolor] = useState('dodgerblue')
  const randomColor = () => {
    const random = "#" + Math.floor(Math.random() * 16777215).toString(16);
    setcolor(random)
  }
  return (
    <View style={{ flex: 1, backgroundColor: color }}>
      <TextInput placeholder="Type name ..."
        style={{ borderWidth: 1, margin: 10, borderRadius: 20, textAlign: 'center' }}
        onChangeText={handleSearch}
      />
      <Text style={{ margin: 10, textAlign: 'center', fontSize: 40, fontStyle: 'italic' }}>{title}</Text>
      <FlatList
        keyExtractor={(item, index) => `${item.name}`}
        data={List}
        renderItem={({ item }) => (
          <Text style={{ backgroundColor: 'pink', margin: 10, textAlign: 'center', fontSize: 20 }}
            onPress={() => settitle(item.name)}>{item.name}</Text>
        )}
      />
      <Button title="Ascending Order" color="orange" onPress={() => ascedning()} />
      <Button title="Descending Order" color="pink" onPress={() => descending()} />
      <Button title="randomcolor" color="indigo" onPress={() => randomColor()} />
    </View>
  )
}
export default App;