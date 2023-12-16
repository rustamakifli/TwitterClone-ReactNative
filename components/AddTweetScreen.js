import React, { useState, useRef, useEffect } from 'react';
import { View, TextInput, Text, Image, TouchableOpacity, StyleSheet, Keyboard,SafeAreaView,Dimensions } from 'react-native';

const AddTweetScreen = ({ navigation, route }) => {
  const [tweetContent, setTweetContent] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handlePost = () => {
    if (route.params?.onPostTweet) {
      route.params.onPostTweet(tweetContent);
    }
    navigation.goBack();
  };

  const handleCancel = () => {
    navigation.goBack();
  };

  const width = Dimensions.get('window').width;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.navbar}>
        <TouchableOpacity onPress={handleCancel}>
          <Text style={styles.cancelText}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handlePost}>
          <Text style={styles.tweetText}>Tweet</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.tweetContainer}>
        <Image
          source={{ uri: 'https://pbs.twimg.com/media/E370sx_VoAMBQVU.jpg' }}
          style={styles.profileImage}
        />
        <TextInput
          ref={inputRef}
          style={styles.input}
          placeholder="What's happening?"
          multiline
          value={tweetContent}
          onChangeText={(text) => setTweetContent(text)}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 20,
    margin: 20
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  cancelText: {
    color: '#1DA1F2',
    fontSize: 16,
  },
  tweetText: {
    color: '#1DA1F2',
    fontSize: 16,
    fontWeight: 'bold',
  },
  tweetContainer: {
    flexDirection: 'row',
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  input: {
    flex: 1,
    // borderBottomWidth: 1,
    fontSize: 16,
  },
});

export default AddTweetScreen;
