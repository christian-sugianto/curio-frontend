import React, { Component } from 'react';
import {Dimensions, 
        StyleSheet,
        TouchableOpacity,
        View,
        Image,
        Text
        }from 'react-native';
import Header from "../../component/Header"

export default class Notification extends Component {

    render() {

        const { navigate } = this.props.navigation;
        return(
            
            <View style={styles.container}>

                <Header title="Notification" tab1="All" tab2=""/>         

                {/* heading */}
                <Text style = {styles.titleText}>NOTIFICATION</Text>

     
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    titleText: {
        fontSize: 30,
        marginTop: 250,
        fontWeight: 'bold',
        alignSelf: 'flex-start',
        marginLeft: Dimensions.get('window').width * 0.07,
        // fontFamily: 'HindSiliguri-Bold'
      },

    button : {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FF6E6E',
        width: Dimensions.get('window').width * 0.4,
        height: 50,
        margin: 10,
        borderRadius: 540,
        elevation: 3, 
    },


})