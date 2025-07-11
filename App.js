import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity, TextInput, FlatList } from 'react-native';
import UserCard from './src/components/UserCard';

export default function App() {
  const[users, setUsers] = useState([])
  const[name, setName] = useState('')
  const[role, setRole] = useState('')
  const [error, setError] = useState('')
  
  const validateInput = (input) => {
    if (input == "") {
        return "Строка не повинна бути пустою";
    }
    return '';
  }

  const handleSubmit = () => {
      const errorName = validateInput(name);
      const errorRole = validateInput(role)
      if (errorName || errorRole){
           setError(errorName || errorRole);
       }else{
          const user = {
            name, 
            role, 
            photoUri:"https://img.freepik.com/premium-vector/user-profile-icon-flat-style-member-avatar-vector-illustration-isolated-background-human-permission-sign-business-concept_157943-15752.jpg"
          }
          setUsers(prev => [...prev, user])
          setError('')
          setName('')
          setRole('')
      }
  }
  
  const renderCard = ({item}) => (
    <UserCard user={item}/>
  )

  return (
    <View style={styles.container}>
      <View>
        <TextInput
          placeholder={"Name"}
          style={styles.input}
          value={name}
          onChangeText={setName}
        />
        <TextInput
          placeholder={"Role"}
          style={styles.input}
          value={role}
          onChangeText={setRole}
        />
        {error && <Text style={styles.error}>{error}</Text>}
        <Button title="Надіслати" onPress={handleSubmit}/>
      </View>
      <FlatList
        data={users}
        renderItem={renderCard}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 30,
    alignItems: 'center'
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    borderRadius: 4,
    marginBottom: 8,
    width: 300
    },
  error: {
    color: 'red',
    marginBottom: 8,
  }
});
