import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native"
import { useState } from "react"

const UserCard = ({user}) => {
    const[IsActive, setIsActive] = useState(false)
    return(
        <View style={styles.card}>
            <View style={styles.row}>
                <Image
                    style={styles.image}
                    source={{uri: user.photoUri}}
                    resizeMode='cover'
                />
            <View style={styles.textBlock}>
                <Text>{user.name}</Text>
                <Text>{user.role}</Text>
            </View>

        </View>
        <View>
          <TouchableOpacity style={[styles.btn, IsActive ? styles.active : styles.notActive]} onPress={() => setIsActive((prev) => !prev)}>
            <Text style={styles.btnText}>{IsActive ? "Unsubscribe" : "Subscribe"}</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    borderColor: "black",
    borderWidth: 1,
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10
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

export default UserCard