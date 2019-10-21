// import React, { Component } from "react";
// import PropTypes from "prop-types";
// import { connect } from "react-redux";
// import {
//   StyleSheet,
//   ScrollView,
//   View,
//   Image,
//   Text,
//   RefreshControl,
//   TouchableOpacity
// } from "react-native";

// // redux actions
// import {
//   getSelectedUser,
//   getSelectedUserArtefacts
// } from "../../actions/userActions";

// // responsive design component
// import {
//   deviceHeigthDimension as hp,
//   deviceWidthDimension as wd
// } from "../../utils/responsiveDesign";

// class PublicUserGroups extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       user: {},
//       artefacts: [],
//       refreshing: false,
//       // get group id passed in from the navigation parameter
//       userId: this.props.navigation.getParam("userId")
//     };
//   }

//   componentDidMount() {
//     const { userId } = this.state;
//     // make sure it exists
//     userId
//       ? this.getSelectedUserData(userId)
//       : alert("Error loading user data");
//   }

//   // nav details
//   static navigationOptions = {
//     headerStyle: {
//       elevation: 0 // remove shadow on Android
//     }
//   };


//   render() {
//     // date format
//     Moment.locale("en");
//     // extract data from local states
//     const { user, artefacts } = this.state;
//     const { name, username, profilePic, dateJoined } = user;
//     const { navigate } = this.props.navigation;
//     // make sure groups is not undefined
//     const groups = !user.groups ? [] : user.groups;
//     // decide which image source to use
//     const imageSource = !this.state.user
//       ? require("../../../assets/images/default-profile-pic.png")
//       : { uri: profilePic };

//     return (
//       <View style={styles.container}>
//         {/* scrollable area for CONTENT */}
//         <ScrollView
//           showsVerticalScrollIndicator={false}
//           scrollEventThrottle={16}
//           refreshControl={
//             <RefreshControl
//               refreshing={this.state.refreshing}
//               onRefresh={this.refreshPage}
//             />
//           }
//         >
//           {/* user details */}
//           <View style={styles.userDetailsContainer}>
//             {/* user profile picture */}
//             <View style={styles.profilePicContainer}>
//               <Image
//                 style={styles.profilePic}
//                 source={imageSource}
//                 resizeMethod="resize"
//                 resizeMode="cover"
//               />
//             </View>

//             {/* user heading */}
//             <Text style={[styles.userName, styles.font]}>
//               {name ? name : " " /*ensure consistency before data is loaded*/}
//             </Text>
//             <Text style={[styles.userDetails, styles.subFont]}>
//               @{username}
//             </Text>
//             <Text style={styles.userDetails}>
//               joined since {Moment(dateJoined).format("Do MMMM YYYY")}
//             </Text>
//             {/* number of artefacts and groups of the user */}
//             <View
//               style={{
//                 flexDirection: "row",
//                 justifyContent: "space-evenly",
//                 marginVertical: 10
//               }}
//             >
//               {/* artefacts numbers */}
//               <TouchableOpacity
//                 style={{ alignItems: "center" }}
//               // onPress={() => navigate("PublicUserArtefacts", { origin: "PublicProfile" })}
//               >
//                 <Text style={styles.font}>{artefacts.length}</Text>
//                 <Text style={(styles.subFont, { color: "#939090" })}>
//                   Artefacts
//                 </Text>
//               </TouchableOpacity>

//               {/* groups number */}
//               <TouchableOpacity
//                 style={{ alignItems: "center" }}
//               // onPress={() => navigate("PublicUserGroups", { origin: "PublicProfile" })}
//               >
//                 <Text style={styles.font}>{groups.length}</Text>
//                 <Text style={(styles.subFont, { color: "#939090" })}>
//                   Groups
//                 </Text>
//               </TouchableOpacity>
//             </View>
//           </View>

//           {/* user artefacts posts */}
//           <View style={{ marginTop: wd(0.01) }}>{this.showArtefacts()}</View>
//         </ScrollView>
//       </View >
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#F7F7F7"
//   },

//   font: {
//     fontFamily: "HindSiliguri-Bold"
//   },

//   subFont: {
//     fontFamily: "HindSiliguri-Regular"
//   },

//   userDetailsContainer: {
//     backgroundColor: "white"
//   },

//   userName: {
//     fontSize: hp(0.025),
//     marginVertical: 5,
//     alignSelf: "center"
//   },

//   userDetails: {
//     fontSize: hp(0.015),
//     alignSelf: "center",
//     color: "#939090"
//   },

//   profilePicContainer: {
//     width: wd(0.35),
//     height: wd(0.35),
//     alignSelf: "center",
//     marginBottom: hp(0.01)
//   },

//   profilePic: {
//     marginTop: hp(0.015),
//     width: wd(0.35),
//     height: wd(0.35),
//     borderRadius: wd(0.35)
//   },

//   feed: {
//     flexDirection: "row",
//     marginLeft: wd(0.032),
//     marginRight: wd(0.032)
//   },

//   emptyFeed: {
//     flex: 1,
//     height: hp(0.3),
//     alignItems: "center",
//     justifyContent: "center"
//   }
// });

// PublicProfile.propTypes = {
//   getSelectedUser: PropTypes.func.isRequired,
//   getSelectedUserArtefacts: PropTypes.func.isRequired,
//   user: PropTypes.object.isRequired
// };

// const mapStateToProps = state => ({
//   user: state.user,
//   artefacts: state.artefacts
// });

// // export
// export default connect(
//   mapStateToProps,
//   { getSelectedUser, getSelectedUserArtefacts }
// )(PublicProfile);
