import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import MyButton from './button';

const PostCard = ({id,title,body,onReadMore}) => {
    return (
        <View style={styles.PostCard }>
            <View style={styles.PostCardBody}>
                <Text style={styles.PostCardTitle}>{title}</Text>
                <Text style={styles.PostCardText}>{body}
                </Text>
                <MyButton onPress={onReadMore.bind(null,id)} title="Read More" />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    PostCard: {
        margin: 20,
        padding: 20,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOpacity: .25,
        shadowRadius: 10,
        shadowOffset: { width: 0, height: 1 },
        elevation: 5,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: 'rgba(0, 0, 0, 0.125)',
        borderRadius: 4,
    },
    PostCardTitle: {
        marginBottom: 12,
        fontFamily: 'open-sans-bold',
        fontSize: 20
    },
    PostCardText: {
        fontSize: 18,
        lineHeight: 25
    },
})

export default PostCard;
