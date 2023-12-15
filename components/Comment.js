// Comment.js
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Comment = ({ comment }) => {
  return (
    <View style={styles.commentContainer}>
      <Image source={{ uri: comment.userImage }} style={styles.commentUserImage} />
      <View style={styles.commentContent}>
        <View style={styles.commentHeader}>
          <Text style={styles.commentUsername}>{comment.username}</Text>
          <Text style={styles.commentAction}>@{comment.nickname}</Text>
          <Text style={styles.commentAction}>{comment.action}</Text>
          <Text style={styles.commentTime}>{comment.postedTime} ago</Text>
        </View>
        <Text>{comment.tweet}</Text>
        <View style={styles.commentStats}>
          <View style={styles.commentStatItem}>
            <Icon name="chatbubble-outline" style={styles.commentIcon} />
            <Text style={styles.commentStatsNumber}>{comment.cmntCount}</Text>
          </View>
          <View style={styles.commentStatItem}>
            <Icon name="repeat-outline" style={styles.commentIcon} />
            <Text style={styles.commentStatsNumber}>{comment.retweetCount}</Text>
          </View>
          <View style={styles.commentStatItem}>
            <Icon name="heart-outline" style={styles.commentIcon} />
            <Text style={styles.commentStatsNumber}>{comment.likeCount}</Text>
          </View>
          <View style={styles.commentStatItem}>
            <Icon name="share-outline" style={styles.commentIcon} />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  commentContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginTop: 10,
    marginBottom:10,
  },
  commentUserImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  commentContent: {
    flex: 1,
  },
  commentHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  commentUsername: {
    fontWeight: 'bold',
    marginRight: 5,
  },
  commentAction: {
    color: 'gray',
    marginRight: 5,
  },
  commentTime: {
    color: 'gray',
  },
  commentStats: {
    flexDirection: 'row',
    marginTop: 5,
    justifyContent:"space-between"
  },
  commentStatItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  commentIcon: {
    fontSize: 16,
    color: 'gray',
    marginRight: 5,
  },
  commentStatsNumber: {
    color:"gray",
    // fontWeight: 'bold',
    fontSize:12
  },
});

export default Comment;
