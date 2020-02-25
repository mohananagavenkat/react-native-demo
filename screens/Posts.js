import React, { useState, useEffect } from 'react';
import { FlatList, ActivityIndicator, Modal, View, TouchableHighlight, Alert, Text, StyleSheet } from 'react-native';
import MyButton from '../components/button';



import Header from '../components/header';
import PostCard from '../components/PotsCard';
import config from '../constants/constants';

const Posts = (props) => {
    console.log("[posts]");

    let [posts, setPosts] = useState([]);
    let [postsFetched, setPostsFetched] = useState(false);
    let [modalVisible, setModalVisible] = useState(true);
    let [specificPost, setSpecificPost] = useState({
        "userId": 1,
        "id": 1,
        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    });
    let postsUI = <ActivityIndicator size="large" color={config.headerColor} />;
    let modalUI = null;


    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(response => {
                setPostsFetched(true);
                setPosts(response);
            });
    }, [])

    const readMore = (id) => {
        setSpecificPost(posts.find(post => post.id == id));
        console.log(specificPost);
        setModalVisible(true);
    }

    if (postsFetched) {
        postsUI = <FlatList
            data={posts}
            renderItem={
                ({ item }) => {
                    return (
                        <PostCard onReadMore={readMore} {...item} />
                    )
                }
            }
            keyExtractor={item => item.id.toString()}
        />
    }
    if (specificPost) {
        modalUI = (
            <Modal
                animationType="slide"
                transparent={false}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                }}>
                <View style={styles.modalContent}>
                    <View>
                        <MyButton onPress={() => {
                            setModalVisible(false);
                        }} title="< Back" style={styles.backButton} />
                        <Text style={styles.postTitle}>{specificPost.title}</Text>
                        <Text style={styles.PostText}>{specificPost.body}</Text>
                    </View>
                </View>
            </Modal>
        )
    }
    return (
        <React.Fragment>
            <Header title="Posts"></Header>
            {postsUI}
            {modalUI}


        </React.Fragment>
    )
}

const styles = StyleSheet.create({
    modalContent: {
        flex: 1,
        padding: 20,
        // backgroundColor:'#222'
        // height:'100%'
    },
    postTitle: {
        marginBottom: 12,
        fontFamily: 'open-sans-bold',
        fontSize: 20
    },
    postText: {
        fontSize: 18,
        lineHeight: 25
    },
    backButton:{
        marginBottom:10
    }
});

export default Posts;