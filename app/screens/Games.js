import * as React from "react";
import { Text, StyleSheet, View, Image } from "react-native";
export default class Games extends React.Component {


  render() {
      var number=this.props.number;
    return (
      <View style={styles.mainCardView}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View style={styles.subCardView}>
            <Image
              source={
                number == 1
                  ? require("../assets/forza.jpg")
                  : number == 2
                  ? require("../assets/wwe.jpg")
                  : require("../assets/gta.png")
              }
              resizeMode="contain"
              style={{
                borderRadius: 25,
                height: 50,
                width: 50,
              }}
            />
          </View>
          <View style={{ marginLeft: 12 }}>
            <Text
              style={{
                fontSize: 14,
                color: "black",
                fontWeight: "bold",
              }}
            >
              {this.props.name}
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
                  color: "gray",
                  fontSize: 12,
                }}
              >
                {this.props.desc} hours played
              </Text>
            </View>
          </View>
          {/* <ProgressBar progress={0.5} color={Colors.red800} /> */}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainCardView: {
    height: 70,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    borderRadius: 15,
    shadowColor: "grey",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 16,
    paddingRight: 14,
    marginLeft: 16,
    marginRight: 16,
  },
});
