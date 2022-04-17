import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
  TextInput,
  KeyboardAvoidingView,
  Alert,
  TouchableOpacity
} from "react-native";
import { FontAwesome, AntDesign } from "@expo/vector-icons";
import { useState, useRef, useEffect } from "react";
import { ref, push, onValue, set } from "firebase/database";
import db from "./FireBase.js";

export default function MainPage({ navigation }) {
  //Background Message
  const [messageBg, setmessageBg] = useState(null);

  const messageBgDark = (key) => {
    setmessageBg(key);
  };

  const [focused, setFocused] = useState(false);

  const toggleFocus = () => {
    setFocused(!focused);
    ScrollViewRef.current.scrollToEnd({ animated: false });
  };
  const ScrollViewRef = useRef();

  //Mesaj
  const [messages, setmessages] = useState([]);

  //Inputtan veri alma
  const [newMsg, setnewMsg] = useState("");

  //Send Message
  const sentMessage = () => {
    let currentDate = new Date().getHours() + ":" + new Date().getMinutes();
    //Database e gönder
    let data = {
      msgHour: currentDate,
      msg: newMsg,
      from: "opponent",
    };
    push(ref(db, "messages"), data);
    setnewMsg("");
  };

  //renderlama
  useEffect(() => {
    onValue(ref(db, "messages"), (snapshot) => {
      let messageFromDatabase = [];
      Object.entries(snapshot.val()).forEach((message) => {
        messageFromDatabase.push({ ...message[1], key: message[0] });
      });
      if (messages.length !== messageFromDatabase.length) {
        setmessages(messageFromDatabase);
      }
    });
  });

  const deleteMsg = (key) => {
    Alert.alert("Message deleted.");
    set(ref(db, "messages/" + key), null);
  };

  const isDelete = (key) => {
    Alert.alert("Warning", "Are you sure you want to delete this message?", [
      {
        text: "Cancel",
        style: "cancel",
      },
      {
        text: "Yes.",
        onPress: () => deleteMsg(key),
      },
    ]);
  };
  return (
    <View style={{ flex: 1 }}>
      <SafeAreaView style={{ position: "relative", backgroundColor: "#fff" }}>
        <View
          style={{
            ...styles.header,
            ...styles.container,
            paddingBottom: 0,
            borderBottomColor: "#DDDDDD",
            borderBottomWidth: 1,
          }}
        >
          <View
            style={{
              ...styles.headerTop,
              marginTop: 10,
              paddingBottom: 8,
              alignItems: "center",
            }}
          >
            <TouchableWithoutFeedback onPress={navigation.goBack}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <FontAwesome
                  name="angle-left"
                  size={35}
                  color="#1C74D0"
                  style={{ marginTop: -2 }}
                />
                <Text style={{ color: "#1C74D0", fontSize: 17, marginLeft: 8 }}>
                  14
                </Text>
              </View>
            </TouchableWithoutFeedback>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                flex: 1,
                marginLeft: 15,
              }}
            >
              <Image
                style={{
                  ...styles.profileImg,
                  width: 38,
                  height: 38,
                  borderRadius: 999,
                  marginBottom: -8,
                }}
                source={require("./assets/profile-photo.jpg")}
              ></Image>
              <View style={{ marginLeft: 8, alignItems: "flex-start" }}>
                <Text style={{ fontWeight: "600", fontSize: 16 }}>
                  Batın Muştu
                </Text>
                <Text style={{ marginTop: 0, color: "#9b9ba3", fontSize: 13 }}>
                  Online
                </Text>
              </View>
            </View>
            <View style={{ flexDirection: "row" }}>
              <FontAwesome
                name="video-camera"
                size={26}
                color="#1C74D0"
                style={{ marginRight: 15 }}
              />
              <FontAwesome name="phone" size={26} color="#1C74D0" />
            </View>
          </View>
        </View>
        <View
          style={{
            backgroundColor: "#0A141A",
            width: "100%",
            position: "relative",
          }}
        >
          <Image
            style={{
              marginBottom: -8,
              position: "absolute",
              zIndex: 9,
              top: 0,
            }}
            source={require("./assets/chat-bg.jpg")}
          ></Image>
        </View>
      </SafeAreaView>
      <ScrollView
        ref={ScrollViewRef}
        onContentSizeChange={() =>
          ScrollViewRef.current.scrollToEnd({ animated: false })
        }
      >
        <View style={{ flex: 1, paddingHorizontal: 20 }}>
          {messages.map((message, index) => (
            <TouchableWithoutFeedback
              key={index}
              onLongPress={() => isDelete(message.key)}
              onPressIn={() => messageBgDark(message.key)}
              onPressOut={() => messageBgDark(null)}
            >
              <View
                style={{
                  ...(message.from === "me"
                    ? styles.msgMe
                    : styles.msgOpponent),
                  ...(messageBg === message.key ? { opacity: ".6" } : {}),
                }}
              >
                <Text style={{ color: "#020202", fontSize: 16 }}>
                  {message.msg}
                </Text>
                <Text
                  style={{
                    marginTop: 5,
                    alignSelf: "flex-end",
                    fontSize: 13,
                    color: "#8B8B8B",
                  }}
                >
                  {message.msgHour}
                </Text>
              </View>
            </TouchableWithoutFeedback>
          ))}
        </View>
      </ScrollView>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View
            style={{
              ...styles.container,
              paddingBottom: focused ? 8 : 40,
              paddingTop: 5,
              backgroundColor: "#F6F6F6",
              width: "100%",
              bottom: 0,
              flexDirection: "row",
              justifyContent: "space-between",
              paddingHorizontal: 25,
              borderTopColor: "#E2E2E2",
              borderTopWidth: 1,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                width: "100%",
                alignItems: "center",
                paddingTop: 5,
              }}
            >
              <AntDesign name="plus" size={30} color="#017CF6" />
              <View
                style={{ marginHorizontal: 15, position: "relative", flex: 1 }}
              >
                <TextInput
                  onFocus={toggleFocus}
                  onBlur={toggleFocus}
                  onChange={(event) => setnewMsg(event.nativeEvent.text)}
                  value={newMsg}
                  style={{
                    height: 32,
                    borderColor: "#B0B0B0",
                    borderWidth: 1,
                    borderRadius: 15,
                    alignItems: "center",
                    paddingHorizontal: 10,
                    paddingRight: 35,
                  }}
                ></TextInput>
                <FontAwesome
                  name="sticky-note"
                  size={22}
                  color="#017CF6"
                  style={{ position: "absolute", right: 10, top: 5 }}
                />
              </View>
              {focused ? (
                <TouchableWithoutFeedback onPress={sentMessage}>
                  <FontAwesome
                    name="send"
                    size={24}
                    color="#017CF6"
                    style={{
                      paddingHorizontal: 7,
                      marginHorizontal: -7,
                    }}
                  />
                </TouchableWithoutFeedback>
              ) : (
                <>
                  <View style={{flexDirection:'row'}}>
                      <TouchableOpacity>
                      <FontAwesome
                        name="camera"
                        size={24}
                        color="#017CF6"
                        style={{
                          marginRight: 15,
                        }}
                      />
                    </TouchableOpacity>
                    <FontAwesome name="microphone" size={24} color="#017CF6" />
                  </View>
                </>
              )}
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  /*Genel*/
  container: {
    paddingHorizontal: 25,
    backgroundColor: "#fff",
  },
  text: {
    color: "#1e78e0",
    fontSize: 17,
  },
  headerTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  icon: {
    fontSize: 15,
    alignItems: "center",
  },
  hr: {
    height: 1,
    backgroundColor: "#c6c6c6",
    width: "100%",
    marginTop: 10,
  },
  /*Genel End*/

  /*Header */
  largeText: {
    color: "#000",
    fontSize: 38,
    fontWeight: "700",
    marginBottom: 15,
  },
  /*Header End*/

  /*Content*/
  chatLabel: {
    flexDirection: "row",
    paddingLeft: 17,
    alignItems: "flex-start",
  },

  chatImg: {
    width: 65,
    height: 65,
    marginRight: 10,
    marginTop: 10,
    marginVertical: 5,
    alignItems: "center",
    justifyContent: "center",
  },

  chatWrap: {
    flexDirection: "row",
    justifyContent: "space-between",
    fontSize: 20,
    borderBottomColor: "#c6c6c6",
    borderBottomWidth: 1,
    paddingVertical: 15,
    paddingBottom: 20,
  },
  chatWrap2: {
    flexDirection: "row",
    justifyContent: "space-between",
    fontSize: 20,
    borderBottomColor: "#c6c6c6",
    borderBottomWidth: 1,
    paddingVertical: 15,
    paddingBottom: 10,
  },

  chatTxt: {
    justifyContent: "space-between",
    flex: 1,
  },

  chatName: {
    fontSize: 18,
    fontWeight: "700",
    marginTop: -4,
  },

  msgHours: {
    marginRight: 25,
    color: "#9b9ba3",
  },

  profileImg: {
    width: 58,
    height: 60,
    marginTop: -6,
  },

  iconWrap: {
    flex: 1,
    textAlign: "center",
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
  },
  textFocused: {
    paddingBottom: 5,
  },
  msgMe: {
    backgroundColor: "#E2FFD3",
    marginVertical: 5,
    alignSelf: "flex-end",
    padding: 8,
    paddingHorizontal: 13,
    borderRadius: 15,
    borderBottomRightRadius: 0,
  },
  msgOpponent: {
    backgroundColor: "#fff",
    marginVertical: 5,
    alignSelf: "flex-start",
    padding: 8,
    paddingHorizontal: 13,
    borderRadius: 15,
    borderBottomLeftRadius: 0,
  },
  /*Content End*/
});
