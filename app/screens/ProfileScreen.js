import React, { Component } from "react";
import { Text, Image, StyleSheet, View } from "react-native";
import { Icon } from "react-native-elements";
import Games from "./Games";

export default class ProfileScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          source={require("../assets/stadia.png")}
          style={{
            position: "absolute",
            opacity: 0.4,
            resizeMode: "contain",
            height: 270,
            width: 270,
            left: 200,
            top: 10,
          }}
        ></Image>
        <View style={styles.iconContainer}>
          <Icon name="md-menu" type="ionicon" size={30} color="grey" />
          <Icon name="search" size={30} color="grey" />
        </View>
        <View style={styles.nameContainer}>
          <Image
            source={require("../assets/man.jpg")}
            style={styles.profilePic}
          ></Image>
          <View style={{ paddingLeft: 1, width: 100 }}>
            <Text style={styles.name}>Hello,</Text>
            <Text style={styles.name}>Night King</Text>
          </View>
        </View>
        <View style={styles.hoursPlayed}>
          <View style={styles.mainCardView} elevation={200}>
            <View
              style={{ flexDirection: "row", alignItems: "center" }}
              elevation={200}
            >
              {/* <View style={styles.subCardView}>
                <Image
                  source={require("../assets/man.jpg")}
                  resizeMode="contain"
                  style={{
                    borderRadius: 25,
                    height: 50,
                    width: 50,
                  }}
                />
              </View> */}
              <View style={{ marginLeft: 12 }}>
                <Text style={{ fontSize: 12, fontWeight: "bold" }}>
                  HOURS PLAYED
                </Text>
                <View
                  style={{
                    marginTop: 4,
                    borderWidth: 0,
                    // width: "85%",
                  }}
                >
                  <Text
                    style={{
                      fontSize: 20,
                      color: "#f57c36",
                      fontWeight: "bold",
                      textTransform: "uppercase",
                    }}
                  >
                    297 Hours
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <Text
          style={{
            marginLeft: 10,
            marginBottom: 10,
            fontWeight: "bold",
            fontSize: 18,
          }}
        >
          Last Played Games
        </Text>

        <Games name="Forza Horizon 4" number="1" desc="10" />
        <Games name="WWE 2k19" number="2" desc="50" />
        <Games name="GTA V" number="3" desc="90" />
        <Text
          style={{
            marginLeft: 10,
            marginBottom: 10,
            fontWeight: "bold",
            fontSize: 18,
          }}
        >
          Friends
        </Text>
        <View style={styles.friendsList}>
          {/* <FriendPic name="Harry" img="../assets/1.jpg"></FriendPic> */}
          <View style={{ flexDirection: "column", alignItems: "center" }}>
            <Image
              source={require("../assets/1.jpg")}
              style={styles.friendPic}
            ></Image>

            <Text>{"Potter"}</Text>
          </View>
          <View style={{ flexDirection: "column", alignItems: "center" }}>
            <Image
              source={require("../assets/4.jpg")}
              style={styles.friendPic}
            ></Image>

            <Text>{"Granger"}</Text>
          </View>
          <View style={{ flexDirection: "column", alignItems: "center" }}>
            <Image
              source={require("../assets/2.jpg")}
              style={styles.friendPic}
            ></Image>

            <Text>{"Grint"}</Text>
          </View>
          <View style={{ flexDirection: "column", alignItems: "center" }}>
            <Image
              source={require("../assets/3.jpeg")}
              style={styles.friendPic}
            ></Image>

            <Text>{"Malfoy"}</Text>
          </View>
          {/* <FriendPic name="Felton" img="../assets/2.jpg"></FriendPic>
          <FriendPic name="Grint" img="../assets/3.jpg"></FriendPic>
          <FriendPic name="Watson" img="../assets/4.jpg"></FriendPic> */}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  friendPic: { width: 70, height: 70, borderRadius: 400 / 2, left: 5 },

  container: {
    flex: 1,
    backgroundColor: "#fffafa",
    flexDirection: "column",
    justifyContent: "space-evenly",
  },
  iconContainer: {
    height: 60,
    paddingHorizontal: 10,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  nameContainer: {
    height: 120,
    // backgroundColor: "green",
    flexDirection: "row",
    alignItems: "center",
  },
  profilePic: { width: 90, height: 90, borderRadius: 400 / 2, left: 5 },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 20,
    width: 100,
    color: "#616161",
  },
  hoursPlayed: {
    height: 100,
    // backgroundColor: "blue",
  },
  games: {
    height: 330,
    // backgroundColor: "pink",
  },
  friendsList: {
    height: 100,
    height: 120,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  mainCardView: {
    height: 90,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    borderRadius: 15,
    shadowColor: "grey",
    // shadowOffset: { width: 0
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 16,
    paddingRight: 14,
    // marginTop: 6,
    // marginBottom: 6,
    marginLeft: 16,
    marginRight: 16,
  },
});
