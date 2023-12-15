import { Text, SafeAreaView, View,FlatList, Image, TouchableOpacity,StyleSheet } from 'react-native';
import Logo from '../assets/logo.png';
import Feature from '../assets/feature.png';
import Account from '../assets/Account.png';
import Tweet from './Tweet';
import React, { useEffect } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';



export default function TwitterHome ({ navigation }) {
    useEffect(() => {
      navigation.setOptions({
        headerTitle: () => (
          <View style={{flexDirection: 'row',justifyContent:"space-between",alignItems:"center",width: "100%"}}>
            <Image source={Account} />
            <Icon name="logo-twitter" size={30} color="#1DA1F2" />
            <Image source={Feature}/>
          </View>
        ),
      });
    }, [navigation]);

    const data = [
      {
        image: "https://pbs.twimg.com/media/E370sx_VoAMBQVU.jpg",
        nickname: "Rustam Akifli",
        username: "rustamakifli",
        postedTime: "5h",
        action: "Aykhan Hajiyev reposted",
        tweet: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        cmntCount: 28,
        retweetCount: 5,
        likeCount: 21,
        comments: []
      },
      {
        image: "https://instagram.fgyd12-1.fna.fbcdn.net/v/t51.2885-19/405539497_1059369185065943_9189381242691020196_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fgyd12-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=nW4UiZa15_0AX80D6Tt&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfD9ykDm7_D1dlWv1sKkotHf5AT7Z3W2kZEPB-GEJkNzmg&oe=6580B721&_nc_sid=8b3546",
        nickname: "Aykhan Hajiyev",
        username: "aykhan_hajiyev",
        postedTime: "2 days ",
        action: "",
        tweet: "Today I left as senior developer for working as courier",
        cmntCount: 1253,
        retweetCount: 321,
        likeCount: 14874,
        comments: [
          {
            id: "1",
            username: "Rustam Akifli",
            nickname: "rustamakifli",
            userImage: "https://pbs.twimg.com/media/E370sx_VoAMBQVU.jpg",
            postedTime: "2 days",
            action: "replying",
            tweet: "Wow! Companies must increase their salary",
            cmntCount: 1253,
            retweetCount: 321,
            likeCount: 14874,
          },
          {
            id: 2,
            userImage:
              "https://dailyspin.id/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2023/08/Blue-Lock-Anime-700x689.jpeg.webp",
            nickname: "Markaz Gasimov",
            username: "mrkzgsmv",
            postedTime: "14h",
            action: "replying",
            tweet: "Let's go to eat xengel",
            cmntCount: 12,
            retweetCount: 105,
            likeCount: 1520,
          },
        ]
      },
      {
        image: "https://dailyspin.id/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2023/08/Blue-Lock-Anime-700x689.jpeg.webp",
        nickname: "Markaz Gasimov",
        username: "mrkzgsmv",
        postedTime: "14h",
        action: "Aykhan Hajiyev reposted",
        tweet: "Let's go to eat xengel",
        cmntCount: 12,
        retweetCount: 105,
        likeCount: 1520,
        comments: []

      },
      {
        image: "https://c4.wallpaperflare.com/wallpaper/405/688/6/kekkai-sensen-leonardo-watch-anime-boy-looking-through-finger-wallpaper-preview.jpg",
        nickname: "Nihad Isgandarli",
        username: "nihad_isgandar",
        postedTime: "50 min",
        action: "Rustam Akifli Liked",
        tweet: "Have you ever watched last episode of Jujutsu Kaisen",
        cmntCount: 1205,
        retweetCount: 14,
        likeCount: 45326,
        comments: []

      },
      {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC_-FidN5abPYernMAy3YbDKuhU-H7k2kKVg&usqp=CAU",
        nickname: "Random Person",
        username: "rndmprsn",
        postedTime: "5h",
        action: "",
        tweet: "lorem ipsum",
        cmntCount: 12,
        retweetCount: 105,
        likeCount: 1520,
        comments: []

      },
      {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhAwE_smZPwe4GFXD7JYcGmFarkO6qDD8eYQ&usqp=CAU",
        nickname: "Test User",
        username: "testuser",
        postedTime: "5h",
        action: "",
        tweet: "lorem ipsum",
        cmntCount: 12,
        retweetCount: 105,
        likeCount: 1520,
        comments: []

      },
    ]
    const renderItem = ({ item }) => (
      <Tweet
        image={item.image}
        nickname={item.nickname}
        username={item.username}
        postedTime={item.postedTime}
        tweet={item.tweet}
        action={item.action}
        cmntCount={item.cmntCount}
        retweetCount={item.retweetCount}
        likeCount={item.likeCount}
        comments = {item.comments}
      />
    );
    return (
      <>
        <FlatList
        vertical
        data={data}
        style={{marginLeft: 5, marginTop: 10}}
        renderItem={renderItem}
        />
      </>
    );
}

const styles = StyleSheet.create({

  navbar: {
    // flex: 1,
    justifyContent: 'space-between',
    backgroundColor: 'white',
    flexDirection: "row",
  },
  images: {
    margin: 10
  },

});
