/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Image,
  ListView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

var MOCKED_MOVIES_DATA = [
  {title: 'Title', year: '2015', posters: {thumbnail: 'http://i.imgur.com/UePbdph.jpg'}},
];

var REQUEST_URL = 'https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json';

class AwesomeProject extends Component {
  constructor(props){
    super(props);
    this.state = {
      movies: null,
    }
  }
  
  componentDidMount(){
    this.fetchData();
  }
  
  fetchData(){
    fetch(REQUEST_URL)
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({
          movies: responseData.movies,
        });
    })
    .done();
  }
  
  render() {
    if(!this.state.movies){
      return this.renderLoadingView();
    }
    
    var movie = this.state.movies[0];
    return this.renderMovie(movie);
  }
  
  renderLoadingView(){
    return (
        <View style={styles.container}>
           <Text>Loading movies...</Text>
        </View>
      );
  }

  renderMovie(movie){
    return (
        <View style={styles.container}>
            <Image
            source={{uri: movie.posters.thumbnail}}
            style={styles.thumbnail}
          />
          <View style={styles.rigthContainer}>
            <Text style={styles.title}>
              {movie.title}
            </Text>
            <Text style={styles.year}>
              {movie.year}
            </Text>
          </View>
        </View>
      );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  thumbnail: {
    width: 53,
    height: 81,
    backgroundColor: '#000000',
  },
  rigthContainer: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    marginBottom: 8,
    textAlign: 'center',
  },
  year: {
    textAlign: 'center',
  },
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
