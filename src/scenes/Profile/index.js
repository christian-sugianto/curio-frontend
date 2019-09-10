import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { getUserData } from "../../actions/userActions";

import {
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  View,
  Image,
  Text
} from "react-native";

import Moment from "moment";
import SimpleHeader from "../../component/SimpleHeader";
import CustomFontText from "../../utils/customFontText";

class Profile extends Component {
  constructor() {
    super();
    this.state = {
      userData: {}
    };
  }

  componentDidMount() {
    // get user authentication data
    const { user } = this.props.auth;
    this.props.getUserData(user.id);
  }

  componentWillUpdate(nextProps) {
    if (Object.keys(this.state.userData).length === 0) {
      this.setState({
        userData: nextProps.user.userData
      });
    }
  }

  // logout button
  onLogoutClick = () => {
    const { navigate } = this.props.navigation;
    this.props.logoutUser().then(res => {
      navigate("Auth");
    });
  };

  render() {
    console.log(this.state.userData);

    // date format
    Moment.locale("en");
    const dt = this.state.userData.dateJoined;

    return (
      <View style={styles.container}>
        <SimpleHeader title="Profile" />

        {/* scrollable area for CONTENT */}
        <ScrollView
          showsVerticalScrollIndicator={false}
          scrollEventThrottle={16}
        >
          {/* user profile picture */}
          {this.state.userData.profilePic != null ? (
            <Image
              style={styles.profilePic}
              source={{ uri: this.state.userData.profilePic }}
            />
          ) : (
            <Image
              style={styles.profilePic}
              source={require("../../../assets/images/default-profile-pic.png")}
            />
          )}

          {/* user heading */}
          <CustomFontText style={styles.userName}>
            {this.state.userData.name}
          </CustomFontText>
          <CustomFontText style={styles.userDetails}>
            joined since {Moment(dt).format("Do MMMM YYYY")}
          </CustomFontText>

          {/* line separator */}
          <View style={styles.line} />

          {/* TODO REPLACE THIS  */}
          <View style={{ height: 350, justifyContent: "center" }}>
            <CustomFontText
              style={{
                fontFamily: "HindSiliguri-Regular",
                alignSelf: "center"
              }}
            >
              Whoops, Looks like you dont have any Artefacts
            </CustomFontText>
            <CustomFontText
              style={{
                fontFamily: "HindSiliguri-Regular",
                alignSelf: "center"
              }}
            >
              Create a collection now !
            </CustomFontText>
          </View>

          <TouchableOpacity onPress={this.onLogoutClick} style={styles.button}>
            <CustomFontText style={styles.buttonText}>Log Out</CustomFontText>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },

  userName: {
    fontSize: 24,
    marginTop: 5,
    alignSelf: "center",
    fontFamily: "HindSiliguri-Bold"
  },

  userDetails: {
    fontSize: 14,
    marginTop: 3,
    marginBottom: 10,
    alignSelf: "center",
    color: "#939090",
    fontFamily: "HindSiliguri-Regular"
  },

  profilePic: {
    marginTop: 30,
    width: Dimensions.get("window").width * 0.45,
    height: Dimensions.get("window").width * 0.45,
    borderRadius: (Dimensions.get("window").width * 0.45) / 2,
    alignSelf: "center"
  },

  line: {
    marginTop: 10,
    borderBottomColor: "#939090",
    borderBottomWidth: 0.4,
    width: Dimensions.get("window").width * 0.8,
    alignSelf: "center"
  },

  button: {
    justifyContent: "center",
    alignSelf: "center",
    backgroundColor: "#FF6E6E",
    width: Dimensions.get("window").width * 0.4,
    height: 50,
    margin: 10,
    borderRadius: 40,
    elevation: 3
  },

  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    alignSelf: "center",
    color: "white",
    fontFamily: "HindSiliguri-Regular"
  }
});

Profile.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  getUserData: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  user: state.user
});

//  export
export default connect(
  mapStateToProps,
  { logoutUser, getUserData }
)(Profile);
