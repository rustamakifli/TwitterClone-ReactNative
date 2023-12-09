import { Text, SafeAreaView, View,FlatList, Image, TouchableOpacity,StyleSheet,Dimensions } from 'react-native';
import React, { useState } from 'react';

import Account from '../assets/Account.png';


export default function Tweet ({image,nickname,username,postedTime,tweet}) {
    const screenWidth = Dimensions.get('window').width

    const [expanded, setExpanded] = useState(false);

    const toggleReadMore = () => {
      setExpanded(!expanded);
    };
    return (
      <>
      <View style={styles.tweet}> 
        <View style={styles.ppView}>
          <Image source={{uri: image}}  style={styles.pp}/>
        </View>
        <View style={styles.details}>
          <View style={{flexDirection:"row"}}>
            <Text style={{fontWeight:"bold",margin:3}}>{nickname}</Text>
            <Text style={{margin:3}}>@{username}</Text>
            <Text style={{margin:3}}>{postedTime}</Text>
          </View>
          <Text numberOfLines={expanded ? 0 : 4} style={styles.tweetText}>
            {tweet}
          </Text>
          {tweet.length > 100 && (
            <TouchableOpacity onPress={toggleReadMore}>
              <Text style={styles.readMoreText}>{expanded ? ' Read less' : ' Read more'}</Text>
            </TouchableOpacity>
          )}  
        </View>
      </View>
      </>
    );
}

const styles = StyleSheet.create({
  tweet:{
    // flex:1,
    flexDirection:"row",
    margin:2,
    // justifyContent:"center",
    // alignItems:"center"
  },
  pp:{
    borderRadius:24,
    width:55,
    height:55
  },
  ppView:{
    margin:10,
    alignItems:"center"
  },
  tweetText: {
    fontSize: 16,
    lineHeight: 22,
    color: '#333', 
    marginHorizontal:5,

  },
  readMoreText: {
    color: 'blue',
    marginTop: 5,
  },

});
