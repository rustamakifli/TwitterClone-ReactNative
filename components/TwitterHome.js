import { Text, SafeAreaView, View,FlatList, Image, TouchableOpacity,StyleSheet } from 'react-native';
import Logo from '../assets/logo.png';
import Feature from '../assets/feature.png';
import Account from '../assets/Account.png';
import Tweet from './Tweet';

export default function TwitterHome () {
    const data = [
        
      {
        image: "https://pbs.twimg.com/media/E370sx_VoAMBQVU.jpg",
        nickname: "Rustam Akifli",
        username: "rustamakifli",
        postedTime: "5h",
        action: "Aykhan Hajiyev liked",
        tweet: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        cmntCount: 28,
        retweetCount: 5,
        likeCount: 21
      },
      {
        image: "https://geekyapar.com/wp-content/uploads/2015/03/tokyo-ghoul-episode-12-cover.jpg",
        nickname: "Markaz Gasimov",
        username: "mrkzgsmv",
        postedTime: "10h",
        action: "Aykhan Hajiyev liked",
        tweet: "Lorem ipsum .",
        cmntCount: 28,
        retweetCount: 5,
        likeCount: 21
      }
      ,
      {
        image: "https://geekyapar.com/wp-content/uploads/2015/03/tokyo-ghoul-episode-12-cover.jpg",
        nickname: "Markaz Gasimov",
        username: "mrkzgsmv",
        postedTime: "10h",
        action: "Aykhan Hajiyev liked",
        tweet: "Lorem ipsum .",
        cmntCount: 28,
        retweetCount: 5,
        likeCount: 21
      }
      ,
      {
        image: "https://geekyapar.com/wp-content/uploads/2015/03/tokyo-ghoul-episode-12-cover.jpg",
        nickname: "Markaz Gasimov",
        username: "mrkzgsmv",
        postedTime: "10h",
        action: "Aykhan Hajiyev liked",
        tweet: "Lorem ipsum .",
        cmntCount: 28,
        retweetCount: 5,
        likeCount: 21
      }
      ,
      {
        image: "https://geekyapar.com/wp-content/uploads/2015/03/tokyo-ghoul-episode-12-cover.jpg",
        nickname: "Markaz Gasimov",
        username: "mrkzgsmv",
        postedTime: "10h",
        action: "Aykhan Hajiyev liked",
        tweet: "Lorem ipsum .",
        cmntCount: 28,
        retweetCount: 5,
        likeCount: 21
      }
      ,
      {
        image: "https://geekyapar.com/wp-content/uploads/2015/03/tokyo-ghoul-episode-12-cover.jpg",
        nickname: "Markaz Gasimov",
        username: "mrkzgsmv",
        postedTime: "10h",
        action: "Aykhan Hajiyev liked",
        tweet: "Lorem ipsum .",
        cmntCount: 28,
        retweetCount: 5,
        likeCount: 21
      }
      ,
      {
        image: "https://geekyapar.com/wp-content/uploads/2015/03/tokyo-ghoul-episode-12-cover.jpg",
        nickname: "Markaz Gasimov",
        username: "mrkzgsmv",
        postedTime: "10h",
        action: "Aykhan Hajiyev liked",
        tweet: "Lorem ipsum .",
        cmntCount: 28,
        retweetCount: 5,
        likeCount: 21
      }
      ,
      {
        image: "https://geekyapar.com/wp-content/uploads/2015/03/tokyo-ghoul-episode-12-cover.jpg",
        nickname: "Markaz Gasimov",
        username: "mrkzgsmv",
        postedTime: "10h",
        action: "Aykhan Hajiyev liked",
        tweet: "Lorem ipsum .",
        cmntCount: 28,
        retweetCount: 5,
        likeCount: 21
      }
      ,
      {
        image: "https://geekyapar.com/wp-content/uploads/2015/03/tokyo-ghoul-episode-12-cover.jpg",
        nickname: "Markaz Gasimov",
        username: "mrkzgsmv",
        postedTime: "10h",
        action: "Aykhan Hajiyev liked",
        tweet: "Lorem ipsum .",
        cmntCount: 28,
        retweetCount: 5,
        likeCount: 21
      }
    ]
    return (
      <>
        <View style={styles.navbar}> 
          <Image source={Account} style={styles.images} />
          <Image source={Logo} style={styles.images} />
          <Image source={Feature} style={styles.images} />
        </View>
        <FlatList
        vertical
        data={data}
        style={{marginLeft: 5, marginTop: 10}}
        renderItem={({item}) => <Tweet image={item.image} nickname={item.nickname}
        username = {item.username} postedTime = {item.postedTime} tweet={item.tweet}
        />}
        />
      </>
    );
}

const styles = StyleSheet.create({

  navbar: {
    // flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#ecf0f1',
    flexDirection: "row",
  },
  images: {
    margin: 10
  },

});
