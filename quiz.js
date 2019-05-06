import React, {Component} from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'

class Quiz extends Component {
   state = {
      age: '',
   }
   handleAge = (text) => {
      this.setState({ age: text })
   }
  
   message = (age) => {
     if(age==1923)
      alert('Correct ' + age)


      else 
      alert('Wrong ' + age)
   }
   render() {
      return (
         <View style = {styles.container}>
         <Text>When is the publishment year of the republic?</Text>
            <TextInput style = {styles.input}
               placeholder = "Age"
               placeholderTextColor = "#f2f2f2"
               autoCapitalize = "none"
               onChangeText = {this.handleAge}/>
            
          
            
            <TouchableOpacity
               style = {styles.submitButton}
               onPress = {
                  () => this.message(this.state.age)
               }>
               <Text style = {styles.submitButtonText}> Submit </Text>
            </TouchableOpacity>
         </View>
      )
   }
}

const styles = StyleSheet.create({
   container: {
      paddingTop: 23
   },
   input: {
      margin: 15,
      height: 40,
      borderColor: '#7a42f4',
      borderWidth: 1
   },
   submitButton: {
      backgroundColor: '#7a42f4',
      padding: 10,
      margin: 15,
      height: 40,
   },
   submitButtonText:{
      color: 'white'
   }
})

export default Quiz;