import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity } from 'react-native';

export default function App() {
  const[IsActive, setIsActive] = useState(true)
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.row}>
          <Image
            style={styles.image}
            source={{uri: 'https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg'}}
            resizeMode='cover'//cover stretch repeat contain
          />
          <View style={styles.textBlock}>
            <Text>Text 1</Text>
            <Text>Text 2</Text>
          </View>

        </View>
        <View>
          <TouchableOpacity style={[styles.btn, IsActive ? styles.active : styles.notActive]} onPress={() => setIsActive((prev) => !prev)}>
            <Text style={styles.btnText}>{IsActive ? "Unsubscribe" : "Subscribe"}</Text>
          </TouchableOpacity>
        </View>
      </View>
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
  card: {
    borderRadius: 15,
    borderColor: "black",
    borderWidth: 1,
    width: "90%",
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 30,
  },
  row: {
     flexDirection: 'row',
  },
  textBlock: {
    marginLeft: 10,
    padding: 5,
    flexDirection: 'column',
  },
  btn: {
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 30,
    alignItems: 'center',
    width: 130,
  },
  active: {
    backgroundColor: '#d11111',
  },
  notActive: {
    backgroundColor: '#458af7',
  },
  btnText: {
    color: 'white',
    fontSize: 12
  }
});
