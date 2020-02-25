import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, ActivityIndicator } from 'react-native';
import config from '../constants/constants';


import Header from '../components/header';
import CardView from '../components/card';

const Photos = (props) => {
    console.log("[photos]");

    let [photos, setPhotos] = useState([]);
    let [photosFetched, setPhotosFetched] = useState(false);
    let photosUI = <ActivityIndicator size="large" color={config.headerColor} />;;

    useEffect(() => {
        // fetch('https://jsonplaceholder.typicode.com/photos  ')
        //     .then(response => response.json())
        //     .then(response => {
        //         setPhotosFetched(true);
        //         setPhotos(response);
        //     });

        fetch('https://api.pexels.com/v1/curated?per_page=80&page=1', {
            method: 'GET',
            headers: {
                'Authorization': '563492ad6f9170000100000124988f52f603420182a20a23bfd7e7f4'
            },
        })
            .then(response => response.json())
            .then(response => {
                console.log(response);
                setPhotosFetched(true);
                setPhotos(response.photos);
            });

    }, [])

    if (photosFetched) {
        photosUI = <FlatList
            data={photos}
            renderItem={
                ({ item }) => {
                    return (
                        <CardView style={{ overflow: 'hidden' }}>
                            <Image style={{ width: 400, height: 400, resizeMode: 'cover', maxWidth: '100%' }} source={{ uri: item.src.medium }}
                            />
                        </CardView>
                    )
                }
            }
            keyExtractor={item => item.id.toString()}
        />
    }



    return (
        <React.Fragment>
            <Header title="Photos"></Header>
            {photosUI}
        </React.Fragment>
    )
}

export default Photos;