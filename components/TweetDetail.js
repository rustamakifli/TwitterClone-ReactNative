import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
  Modal,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Comment from "../components/Comment";
import Icon from "react-native-vector-icons/Ionicons";

const TweetDetail = ({ route, navigation }) => {
  const { tweetdetail, user } = route.params;
  
  console.log(user);
  const [isModalVisible, setModalVisible] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [isRetwetted, setIsRetwetted] = useState(false);
  
  const handleLike = () => {
    setIsLiked(!isLiked);
  };

  const toggleModal = () => {
    setIsRetwetted(!isRetwetted);
    setModalVisible(!isModalVisible);
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.tweetContainer}>
          <View style={styles.userInfo}>
            <Image source={{ uri: user.image }} style={styles.pp} />
            <View>
              <Text style={styles.nickname}>{user.nickname}</Text>
              <Text style={styles.username}>@{user.username}</Text>
            </View>
          </View>

          <Text style={styles.tweetText}>{tweetdetail}</Text>

          <View style={styles.detailsContainer}>
            <Text style={styles.postedTime}>{user.postedTime} ago</Text>
            {/* <Text style={styles.source}>· Tweet from Web</Text> */}
            <View style={styles.separator} />
            <Text style={styles.statsText}>
              <Icon name="stats-chart-outline" /> View Tweet Activity
            </Text>
            <View style={styles.separator} />
            <View style={styles.likesRetweetsContainer}>
              <Text style={styles.statsText}>
                {isLiked ? user.likeCount + 1 : user.likeCount} Likes
              </Text>
              <Text style={styles.statsText}>
                {isRetwetted ? user.retweetCount + 1 : user.retweetCount}{" "}
                Retweets
              </Text>
            </View>
          </View>
          <View style={styles.statsContainer}>
            <Icon name="chatbubble-outline" style={styles.icon} />
            <TouchableOpacity onPress={toggleModal}>
              <Icon name="repeat-outline" style={styles.icon} />
            </TouchableOpacity>
            <TouchableWithoutFeedback onPress={handleLike}>
              <Icon
                name={isLiked ? "heart" : "heart-outline"}
                style={styles.icon}
              />
            </TouchableWithoutFeedback>
            <Icon name="share-outline" style={styles.icon} />
          </View>
        </View>
        <View style={styles.commentSection}>
          {user.comments.map((comment) => (
            <Comment key={comment.id} comment={comment} />
          ))}
        </View>
      </ScrollView>
      <Modal
        visible={isModalVisible}
        animationIn="slideInUp"
        transparent={true}
        animationOut="slideOutDown"
      >
        <View style={styles.overlay}>
          <TouchableWithoutFeedback onPress={toggleModal}>
            <View style={{ flex: 1 }} />
          </TouchableWithoutFeedback>
          <View style={styles.contentContainer}>
            <TouchableOpacity onPress={toggleModal}>
              <Text style={styles.modalOption}>Retweet</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={toggleModal}>
              <Text style={styles.modalOption}>Retweet with Comment</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={toggleModal}>
              <Text style={styles.modalOptionCancel}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    borderBottomWidth: 0.5,
    borderColor: "lightgray",
  },
  icon: {
    fontSize: 20,
    color: "gray",
    marginRight: 10,
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  tweetContainer: {
    padding: 15,
    borderBottomWidth: 0.5,
    borderColor: "lightgray",
  },
  userInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  pp: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  nickname: {
    fontSize: 16,
    fontWeight: "bold",
  },
  username: {
    color: "gray",
  },
  tweetText: {
    fontSize: 18,
    lineHeight: 24,
    marginTop: 10,
  },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
  },
  statsText: {
    color: "gray",
  },
  detailsContainer: {
    flexDirection: "column",
    marginTop: 10,
  },
  separator: {
    height: 1,
    backgroundColor: "lightgray",
    marginVertical: 10,
  },
  postedTime: {
    color: "gray",
    fontSize: 14,
  },
  source: {
    color: "gray",
    fontSize: 14,
    marginTop: 5,
  },
  likesRetweetsContainer: {
    flexDirection: "row",
    // marginTop: 5,
    alignItems: "center",
  },
  statsText: {
    color: "gray",
    marginRight: 10,
  },
  modalContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "transparent",
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "flex-end",
  },
  contentContainer: {
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 22,
    justifyContent: "center",
    alignItems: "center",
  },
  modalOption: {
    marginBottom: 15,
    fontSize: 18,
    fontWeight: "bold",
  },
  modalOptionCancel: {
    fontSize: 18,
    color: "red",
    fontWeight: "bold",
  },
  commentSection: {
    padding: 15,
    borderTopWidth: 1,
    borderTopColor: "lightgray",
  },
});

export default TweetDetail;
