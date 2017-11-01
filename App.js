import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  StyleSheet
} from 'react-native';
import { connect } from 'react-redux'
import {fetchPeopleFromAPI} from './actions'

let styles

const App = (props) => { 
  const { 
    container, 
    text,
    button,
    buttonText
  } = styles

  const {people , isFetching } = props.people
  console.log(props.people);
  return  (
    <View style={container}>
      <Text style={text}>Redux App</Text>
      <TouchableHighlight style={button} onPress={props.getPeople}>
          <Text style={buttonText}>Fetch Data</Text>
      </TouchableHighlight>
      {
        isFetching && <Text>Loading</Text>
      }
      {
        people.length ? (
          people.map((person, index) => {
            return (
              <View>
                <Test>Name: {person.name}</Test>
                <Test>BirthYear: {person.birth_year}</Test>
              </View>
            )
          })
        ) : null
      }
    </View>
  )
}

styles = StyleSheet.create({
  container: {
    marginTop: 100,
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
  },
  text: {
    textAlign: 'center'
  },
  button: {
    backgroundColor: '#0b7eff',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    color: 'white'
  }
});

function mapStateToProps(state) {
  return {
    people: state.people
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getPeople: () => dispatch(fetchPeopleFromAPI())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)