import React, { useState } from "react";
import {
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Ionicons";

export default function Tweet({
  image,
  nickname,
  username,
  postedTime,
  tweet,
  action,
  cmntCount,
  retweetCount,
  likeCount,
  comments,
}) {
  const [expanded, setExpanded] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const navigation = useNavigation();
  console.log(comments);
  const handleLikeUpdate = (updatedLikeCount) => {
    console.log("Like count updated:", updatedLikeCount);
  };

  const toggleReadMore = () => {
    if (!expanded) {
      navigation.navigate("TweetDetail", {
        user: {
          nickname,
          username,
          image,
          postedTime,
          likeCount,
          retweetCount,
          cmntCount,
          comments, 
        },
        tweetdetail: tweet,
        handleLikeUpdate: handleLike,
      });
    } else {
      setExpanded(!expanded);
    }
  };

  const handleLike = () => {
    setIsLiked(!isLiked);
    const updatedLikeCount = isLiked ? likeCount - 1 : likeCount + 1;
    handleLikeUpdate(updatedLikeCount);
  };

  return (
    <TouchableWithoutFeedback onPress={toggleReadMore}>
      <View style={styles.tweet}>
        <View style={styles.ppView}>
          <Image source={{ uri: image }} style={styles.pp} />
        </View>
        <View style={styles.details}>
          {action && (
            <Text style={[styles.username, styles.actionText]}>{action}</Text>
          )}
          <View style={styles.userInfo}>
            <Text style={styles.nickname}>{nickname}</Text>
            <Text style={styles.username}>@{username}</Text>
            <Text style={styles.postedTime}>· {postedTime}</Text>
          </View>
          <Text numberOfLines={expanded ? 0 : 4} style={styles.tweetText}>
            {tweet}
          </Text>
          <View style={styles.statsContainer}>
            <Text style={styles.statsText}>
              <Icon name="chatbubble-outline" style={styles.icon} /> {cmntCount}{" "}
            </Text>
            <Text style={styles.statsText}>
              <Icon name="repeat-outline" style={styles.icon} /> {retweetCount}{" "}
            </Text>
            <TouchableWithoutFeedback onPress={handleLike}>
              <View style={styles.likeContainer}>
                <Icon
                  name={isLiked ? "heart" : "heart-outline"}
                  style={[styles.icon, isLiked && styles.redIcon]}
                />
                <Text style={[styles.statsText, isLiked && styles.redText]}>
                  {isLiked ? likeCount + 1 : likeCount}
                </Text>
              </View>
            </TouchableWithoutFeedback>
            <Text style={styles.statsText}>
              <Icon name="share-outline" style={styles.icon} />
            </Text>
          </View>
          {!expanded && <Text style={styles.readMoreText}>...</Text>}
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  tweet: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 0.5,
    borderColor: "lightgray",
  },
  pp: {
    borderRadius: 26,
    width: 55,
    height: 55,
  },
  ppView: {
    margin: 10,
    alignItems: "center",
  },
  details: {
    flex: 1,
  },
  userInfo: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 5,
    marginTop: 5,
  },
  nickname: {
    fontWeight: "bold",
    fontSize: 16,
    marginRight: 5,
  },
  username: {
    color: "gray",
    fontSize: 16,
    marginRight: 5,
  },
  postedTime: {
    color: "gray",
    fontSize: 16,
  },
  tweetText: {
    fontSize: 16,
    lineHeight: 22,
    color: "#333",
    marginHorizontal: 5,
  },
  actionText: {
    color: "#687684",
    fontSize: 14,
    marginLeft: 5,
  },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 5,
  },
  statsText: {
    color: "gray",
    marginRight: 10,
  },
  readMoreText: {
    color: "blue",
    alignSelf: "flex-end",
    marginTop: 5,
  },
  icon: {
    fontSize: 15,
    color: "gray",
    marginRight: 5,
  },
  likeContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  redIcon: {
    color: "red",
  },
  redText: {
    color: "red",
  },
});
