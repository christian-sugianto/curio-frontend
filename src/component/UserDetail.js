import React, { Component } from "react";
import {
    View,
    StyleSheet,
    Text,
    Dimensions,
    Image,
    TouchableOpacity
} from "react-native";

// custom responsive design component
import {
    deviceHeigthDimension as hp,
    deviceWidthDimension as wd,
} from "../utils/responsiveDesign"

/** Touchable user detail that links to the user's pubic profile 
 *  used in comments, artefact feeds and selected artefacts */
class UserDetail extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            // TODO link to user profile
            // <TouchableOpacity onPress={} style={styles.container}>
            <TouchableOpacity style={styles.container}>
                <Image style={styles.photo} source={this.props.image} />

                {/* user details */}
                <View style={styles.userDetailPlaceholder}>
                    <View>
                        <Text style={styles.userName}>{this.props.userName}</Text>
                    </View>

                    <View>
                        {/* TODO set time dynamically */}
                        {/* <Text style={styles.timeTitle}> {Moment(dt).format("H")} hours ago </Text> */}
                        <Text style={styles.time}>7 hours ago</Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        alignSelf:"center",
        width: Dimensions.get('window').width * 0.9,
        height: Dimensions.get('window').width * 0.15,
    },

    photo: {
        borderRadius: Dimensions.get('window').width * 0.1 / 2,
        width: Dimensions.get('window').width * 0.1,
        height: Dimensions.get('window').width * 0.1,
        marginRight: wd(0.06),
    },

    userName: {
        fontFamily:"HindSiliguri-Bold",
    },

    time: {
        fontFamily:"HindSiliguri-Regular",
    },
});

// export
export default UserDetail;
