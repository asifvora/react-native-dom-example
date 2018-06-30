import React from 'react';
import { StyleSheet, Text, View, Image, ActivityIndicator, ScrollView } from 'react-native';

export default class AboutScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            Details: {},
            isLoading: true,
        }
    }

    static navigationOptions = ({ navigation }) => {
        return {
            title: 'Details',
            headerTitleStyle: { width: '100%', textAlign: 'center' },
            // headerStyle: { backgroundColor: 'red' },
            // headerLeft: (null),
            // headerTintColor: 'pink',
            drawerLockMode: 'locked-closed',
        };
    };


    componentWillMount() {
        setTimeout(() => {
            this.setState({ isLoading: false });
        }, 1000);
        let { Details } = this.props.navigation.state.params;
        this.setState({ Details: Details });
    }

    render() {
        //hide yellow warnings...
        console.ignoredYellowBox = ['Warning: Each', 'Warning: Failed'];
        console.disableYellowBox = true;
        const { Details } = this.state;
        if (this.state.isLoading) {
            return (
                <View style={styles.loading}>
                    <ActivityIndicator animating size="large" />
                </View>
            )
        } else {
            return (
                <View style={styles.container}>
                    <ScrollView>
                        <View style={{ width: '100%' }}>
                            <Image
                                style={styles.imageCover}
                                resizeMode='cover'
                                source={{ uri: `https://image.tmdb.org/t/p/w1280/${Details.backdrop_path}` }}
                            />
                            <View style={{ flexDirection: 'row', justifyContent: 'center', }}>
                                <Image
                                    style={styles.imageMovie}
                                    resizeMode='contain'
                                    source={{ uri: `https://image.tmdb.org/t/p/w500/${Details.poster_path}` }}
                                />
                                <View style={styles.nameView}>
                                    <Text style={styles.nameText}>
                                        {Details.title}
                                    </Text>
                                    <Text style={styles.originalTitle}>
                                        {Details.original_title}
                                    </Text>
                                </View>
                            </View>
                            <View style={styles.overviewMain}>
                                <View style={[styles.overview]}>
                                    <Text style={styles.overviewText}>
                                        {Details.overview}
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </ScrollView>
                </View>
            );
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0)',
        // backgroundColor: '#fafafa',
        alignItems: 'center',
        justifyContent: 'center',
        // padding: 20
    },
    overviewMain: {
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: '#8F8F8F',
        backgroundColor: 'white',
        width: '100%',
        marginBottom: 10,
        top: -100,
    },
    overview: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
    },
    overviewText: {
        color: 'black',
        fontSize: 18,
        marginLeft: 5,
        marginTop: 5,
        textAlign: 'center'
    },
    imageView: {
        flexDirection: 'row',
    },
    imageCover: {
        width: '100%',
        height: 350,
        overflow: 'hidden',
    },
    imageMovie: {
        width: 200,
        height: 250,
        overflow: 'hidden',
        top: -150,
        left: 10
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
        padding: 10
    },
    nameText: {
        color: 'black',
        fontSize: 20,
        marginLeft: 5,
        marginTop: 5,
        fontWeight: 'bold'
    },
    originalTitle: {
        color: 'black',
        fontSize: 18,
        marginLeft: 5,
        marginTop: 5,
    },
});