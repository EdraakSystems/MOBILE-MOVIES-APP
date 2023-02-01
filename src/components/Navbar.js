import React from 'react';
import {
  SafeAreaView,
  View,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import PropTypes from 'prop-types';
import Colors from '../theme/Colors';

const Navbar = ({navigation, main}) => {
  return (
    <SafeAreaView style={styles.header}>
      {/* {main ? ( */}
        <View style={styles.mainNav}>
          <Image
            // source={require('../assets/images/movies.png')}
            source={require('../assets/images/edraakLogo.png')}
            style={styles.logo}
          />
          <TouchableOpacity onPress={() => navigation.navigate('Search')}>
            <Icon name="search-outline" color={Colors.white} size={30} />
          </TouchableOpacity>
        </View>
      {/* ) : (
        <View style={styles.mainNav}>
          <TouchableOpacity onPress={navigation.goBack}>
            <Icon name="chevron-back" color={Colors.white} size={30} />
          </TouchableOpacity>
        </View>
      )} */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 50,
    backgroundColor: Colors.background,
  },
  mainNav: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
    marginTop:20
  },
  logo: {
    width: 130,
    height: 130,
    resizeMode:'contain'
  },
});

Navbar.defaultProps = {
  main: false,
};

Navbar.propTypes = {
  main: PropTypes.bool,
};

export default Navbar;
