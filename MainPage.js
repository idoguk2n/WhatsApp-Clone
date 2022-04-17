import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Image, ScrollView, TouchableWithoutFeedback } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Icon from  "./components/Icon";

export default function MainPage({ navigation }) {
  return (
    <View style={{flex: 1,}}>
      <SafeAreaView style={{position:'relative', backgroundColor: '#fff'}}>
        <View style={{...styles.header, ...styles.container}}>
          <View style={{...styles.headerTop, marginTop:10, paddingBottom:15}}>
            <Text style={{...styles.text}}>Edit</Text>
            <Icon name="edit" />
          </View>
        </View>
        <ScrollView>
          <View style={{...styles.header, ...styles.container}}>
          <View>
            <Text style={styles.largeText}>Chats</Text>
          </View>
            <View style={styles.headerTop}>
              <Text style={{...styles.text}}>Brodcast List</Text>
              <Text style={styles.text}>New Group</Text>
            </View>
          </View>
          <View style={styles.hr}></View>
          <View style={{ ...styles.chatLabel}}>
            <View style={{ justifyContent:'flex-start',alignItems: 'center', marginRight: 10,width: 65, marginTop:12, }}><FontAwesome name="archive" size={20} color="#9b9ba3" /></View>
            <View style={styles.chatTxt}>
              <View style={{...styles.chatWrap2}}>
                <View style={styles.newMessage}>
                  <Text style={{...styles.chatName,}}>Archived</Text>
                </View>
                <Text style={{...styles.msgHours, color:'#1e78e0', fontSize:16}}>3</Text>
              </View>
            </View>
          </View>
          <TouchableWithoutFeedback onPress={()=> navigation.navigate("ChatPage")}>
            <View style={{ ...styles.chatLabel}}>
              <View style={styles.chatImg}><Image style={styles.profileImg} source={require('./assets/profile-photo.jpg')}></Image></View>
              <View style={styles.chatTxt}>
                <View style={styles.chatWrap}>
                  <View style={styles.newMessage}>
                    <Text style={styles.chatName}>Batın Muştu</Text>
                    <Text style={{...styles.chatMessage, marginTop:1, color:'#9b9ba3', fontSize:16}}>Lorem ipsum dolor sit amet</Text>
                  </View>
                  <View style={{...styles.newMessage, alignItems: 'flex-end'}}>
                    <Text style={{...styles.msgHours, fontSize:15, color: '#017CF6',}}>16:29</Text>
                    <View style={{...styles.msgHours,  backgroundColor:'#017CF6', textAlign:'center', color:'#fff', borderRadius: 99,}}>
                      <Text style={{color:'#fff', fontSize:15, textAlign:'center', paddingHorizontal:5,}}>1</Text>  
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={()=> navigation.navigate("ChatPage")}>
            <View style={{ ...styles.chatLabel}}>
              <View style={styles.chatImg}><Image style={styles.profileImg} source={require('./assets/profile-photo.jpg')}></Image></View>
              <View style={styles.chatTxt}>
                <View style={styles.chatWrap}>
                  <View style={styles.newMessage}>
                    <Text style={styles.chatName}>Batın Muştu</Text>
                    <Text style={{...styles.chatMessage, marginTop:1, color:'#9b9ba3', fontSize:16}}>Lorem ipsum dolor sit amet</Text>
                  </View>
                  <View style={{...styles.newMessage, alignItems: 'flex-end'}}>
                    <Text style={{...styles.msgHours, fontSize:15, color: '#9b9ba3',}}>16:29</Text>
                  </View>
                </View>
              </View>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={()=> navigation.navigate("ChatPage")}>
            <View style={{ ...styles.chatLabel}}>
              <View style={styles.chatImg}><Image style={styles.profileImg} source={require('./assets/profile-photo.jpg')}></Image></View>
              <View style={styles.chatTxt}>
                <View style={styles.chatWrap}>
                  <View style={styles.newMessage}>
                    <Text style={styles.chatName}>Batın Muştu</Text>
                    <Text style={{...styles.chatMessage, marginTop:1, color:'#9b9ba3', fontSize:16}}>Lorem ipsum dolor sit amet</Text>
                  </View>
                  <View style={{...styles.newMessage, alignItems: 'flex-end'}}>
                    <Text style={{...styles.msgHours, fontSize:15, color: '#017CF6',}}>16:29</Text>
                    <View style={{...styles.msgHours,  backgroundColor:'#017CF6', textAlign:'center', color:'#fff', borderRadius: 99,}}>
                      <Text style={{color:'#fff', fontSize:15, textAlign:'center', paddingHorizontal:5,}}>1</Text>  
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={()=> navigation.navigate("ChatPage")}>
            <View style={{ ...styles.chatLabel}}>
              <View style={styles.chatImg}><Image style={styles.profileImg} source={require('./assets/profile-photo.jpg')}></Image></View>
              <View style={styles.chatTxt}>
                <View style={styles.chatWrap}>
                  <View style={styles.newMessage}>
                    <Text style={styles.chatName}>Batın Muştu</Text>
                    <Text style={{...styles.chatMessage, marginTop:1, color:'#9b9ba3', fontSize:16}}>Lorem ipsum dolor sit amet</Text>
                  </View>
                  <View style={{...styles.newMessage, alignItems: 'flex-end'}}>
                    <Text style={{...styles.msgHours, fontSize:15, color: '#9b9ba3',}}>16:29</Text>
                  </View>
                </View>
              </View>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={()=> navigation.navigate("ChatPage")}>
            <View style={{ ...styles.chatLabel}}>
              <View style={styles.chatImg}><Image style={styles.profileImg} source={require('./assets/profile-photo.jpg')}></Image></View>
              <View style={styles.chatTxt}>
                <View style={styles.chatWrap}>
                  <View style={styles.newMessage}>
                    <Text style={styles.chatName}>Batın Muştu</Text>
                    <Text style={{...styles.chatMessage, marginTop:1, color:'#9b9ba3', fontSize:16}}>Lorem ipsum dolor sit amet</Text>
                  </View>
                  <View style={{...styles.newMessage, alignItems: 'flex-end'}}>
                    <Text style={{...styles.msgHours, fontSize:15, color: '#9b9ba3',}}>16:29</Text>
                  </View>
                </View>
              </View>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={()=> navigation.navigate("ChatPage")}>
            <View style={{ ...styles.chatLabel}}>
              <View style={styles.chatImg}><Image style={styles.profileImg} source={require('./assets/profile-photo.jpg')}></Image></View>
              <View style={styles.chatTxt}>
                <View style={styles.chatWrap}>
                  <View style={styles.newMessage}>
                    <Text style={styles.chatName}>Batın Muştu</Text>
                    <Text style={{...styles.chatMessage, marginTop:1, color:'#9b9ba3', fontSize:16}}>Lorem ipsum dolor sit amet</Text>
                  </View>
                  <View style={{...styles.newMessage, alignItems: 'flex-end'}}>
                    <Text style={{...styles.msgHours, fontSize:15, color: '#9b9ba3',}}>16:29</Text>
                  </View>
                </View>
              </View>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={()=> navigation.navigate("ChatPage")}>
            <View style={{ ...styles.chatLabel}}>
              <View style={styles.chatImg}><Image style={styles.profileImg} source={require('./assets/profile-photo.jpg')}></Image></View>
              <View style={styles.chatTxt}>
                <View style={styles.chatWrap}>
                  <View style={styles.newMessage}>
                    <Text style={styles.chatName}>Batın Muştu</Text>
                    <Text style={{...styles.chatMessage, marginTop:1, color:'#9b9ba3', fontSize:16}}>Lorem ipsum dolor sit amet</Text>
                  </View>
                  <View style={{...styles.newMessage, alignItems: 'flex-end'}}>
                    <Text style={{...styles.msgHours, fontSize:15, color: '#9b9ba3',}}>16:29</Text>
                  </View>
                </View>
              </View>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={()=> navigation.navigate("ChatPage")}>
            <View style={{ ...styles.chatLabel}}>
              <View style={styles.chatImg}><Image style={styles.profileImg} source={require('./assets/profile-photo.jpg')}></Image></View>
              <View style={styles.chatTxt}>
                <View style={styles.chatWrap}>
                  <View style={styles.newMessage}>
                    <Text style={styles.chatName}>Batın Muştu</Text>
                    <Text style={{...styles.chatMessage, marginTop:1, color:'#9b9ba3', fontSize:16}}>Lorem ipsum dolor sit amet</Text>
                  </View>
                  <View style={{...styles.newMessage, alignItems: 'flex-end'}}>
                    <Text style={{...styles.msgHours, fontSize:15, color: '#9b9ba3',}}>16:29</Text>
                  </View>
                </View>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </ScrollView>
      </SafeAreaView>
      <View style={{
        ...styles.container,
        paddingBottom:15, 
        backgroundColor: '#F6F6F6', 
        position: 'absolute', 
        width: '100%', 
        bottom: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 5,
        borderTopColor: '#E2E2E2',
        borderTopWidth: 1,
      }}>
        <View style={{...styles.iconWrap, padding:10, backgroundColor: '#F6F6F6'}}>
          <FontAwesome name="circle-o-notch" size={28} color="#A6A6A6" style={{fontWeight: '900' }} />
          <Text style={{fontSize:10, marginTop: 3, color:'#A6A6A6'}}>Status</Text>
        </View>
        <View style={{...styles.iconWrap, padding:10, backgroundColor: '#F6F6F6'}}>
          <FontAwesome name="phone" size={28} color="#A6A6A6" style={{fontWeight: '900' }} />
          <Text style={{fontSize:10, marginTop: 3, color:'#A6A6A6'}}>Calls</Text>
        </View>
        <View style={{...styles.iconWrap, padding:10, backgroundColor: '#F6F6F6'}}>
          <FontAwesome name="camera" size={28} color="#A6A6A6" style={{fontWeight: '900' }} />
          <Text style={{fontSize:10, marginTop: 3, color:'#A6A6A6'}}>Camera</Text>
        </View>
        <View style={{...styles.iconWrap, padding:10, backgroundColor: '#F6F6F6'}}>
          <FontAwesome name="comments" size={28} color="#017CF6" style={{fontWeight: '900',  }} />
          <Text style={{fontSize:10, marginTop: 3, color:'#017CF6'}}>Chats</Text>
          <View style={{ backgroundColor:'red', borderRadius:99, position:'absolute', right:12, top:4,}}>
            <Text style={{ color: '#fff', paddingVertical:3, paddingHorizontal:5, fontSize:13, }}>12</Text>
          </View>
        </View>
        <View style={{...styles.iconWrap, padding:10, backgroundColor: '#F6F6F6'}}>
          <FontAwesome name="cog" size={28} color="#A6A6A6" style={{fontWeight: '900' }} />
          <Text style={{fontSize:10, marginTop: 3, color:'#A6A6A6'}}>Settings</Text>
        </View>
      </View>
    </View>    
  );
}

const styles = StyleSheet.create({
  /*Genel*/
  container: {
    paddingHorizontal: 25,
    backgroundColor: '#fff'
  },
  text: {
    color: '#1e78e0',
    fontSize: 17,
  },
  headerTop: {
    flexDirection:'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  icon: {
    fontSize:15,
    alignItems:'center',
  },
  hr: {
    height: 1,
    backgroundColor: '#c6c6c6',
    width : '100%' ,
    marginTop: 10,
  },
  /*Genel End*/

  /*Header */
  largeText: {
    color: '#000',
    fontSize: 38,
    fontWeight: '700',
    marginBottom: 15,
  },
  /*Header End*/

  /*Content*/
  
  chatLabel: {
    flexDirection: 'row',
    paddingLeft:17,
    alignItems: 'flex-start'
  },

  chatImg: {
    width: 65,
    height: 65,
    marginRight: 10,
    marginTop:10,
    marginVertical:5,
    alignItems: 'center',
    justifyContent: 'center'
  },

  chatWrap: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    fontSize: 20,
    borderBottomColor: '#c6c6c6',
    borderBottomWidth: 1,
    paddingVertical: 15,
    paddingBottom:20
  },
  chatWrap2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    fontSize: 20,
    borderBottomColor: '#c6c6c6',
    borderBottomWidth: 1,
    paddingVertical: 15,
    paddingBottom:10
  },

  chatTxt: {
    justifyContent: 'space-between',
    flex: 1,
  },

  chatName: {
    fontSize:18,
    fontWeight:'700',
    marginTop: -4,
  },

  msgHours: {
    marginRight: 25,
    color:'#9b9ba3'
  },

  profileImg: {
    width:58,
    height:60,
    marginTop: -6,
    borderRadius: 99
  },

  iconWrap: {
    flex: 1,
    textAlign: 'center',
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center'
  }
  
  
  /*Content End*/

});
