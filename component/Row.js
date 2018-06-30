import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default class Row extends Component {
    render() {
        const data = this.props.data;
        return (
            <View style={styles.container}>
                <TouchableOpacity style={styles.card} onPress={() => this.props.navigation.navigate('About', { Details: data })}>
                    <View style={{ flex: 1, flexDirection: 'row' }}>
                        <Image
                            style={styles.image}
                            // resizeMode='contain'
                            source={{ uri: `https://image.tmdb.org/t/p/w500/${data.poster_path}` }}
                        />
                        <View style={styles.nameView}>
                            <Text style={styles.nameText}>
                                {data.original_title}
                            </Text>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={styles.nameText}>
                                    {data.release_date}
                                </Text>
                                <Text style={[styles.nameText, { color: 'green' }]}>
                                    {data.vote_average}
                                </Text>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 12,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fafafa',
    },
    text: {
        flex: 1,
        marginLeft: 12,
        marginRight: 12,
        fontSize: 16,
        textAlign: 'justify'
    },
    photo: {
        height: 60,
        width: 60,
        borderRadius: 2,
    },
    card: {
        // borderWidth: 1,
        // borderColor: '#8F8F8F',
        // backgroundColor: 'white',
        // width: '18%',
        // marginLeft: 25,
        // marginBottom: 20,
        // shadowColor: 'black',
        // shadowOpacity: 0.2,
        // height: 280,
        // borderRadius: 5,
        // marginTop: 5
        // justifyContent: 'center',
        // alignItems: 'center',
    },
    imageView: {
        flexDirection: 'row',
    },
    image: {
        flex: 1,
        width: 230,
        height: 210,
        // overflow: 'hidden',
        marginTop: 5,
        marginBottom: 5,
        height: 60,
        width: 60,
        borderRadius: 2,
    },
    loading: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 20,
        borderTopWidth: 1,
        borderColor: "#CED0CE"
    },
    nameView: {
        // flex: 1,
        // borderColor: '#8F8F8F',
    },
    nameText: {
        color: '#8F8F8F',
        fontSize: 16,
        marginLeft: 10,
        marginTop: 5
    },
});