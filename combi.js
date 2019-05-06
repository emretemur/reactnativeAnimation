import React, { Component } from 'react';
//import React in our project
import { StyleSheet,Text,View, TouchableHighlight } from 'react-native';
import { Platform, Animated,Easing,Button } from 'react-native';
//import all the required components
import { Stopwatch, Timer } from 'react-native-stopwatch-timer';

//importing library to use Stopwatch and Timer
 
class CombiScreen extends Component {
  constructor(props) {
    super(props);
    this.animatedValue = new Animated.Value(0)
    this.state = {
    
      value: 0,
      redSquare: new Animated.Value(1),
      isTimerStart: false,
      isStopwatchStart: false,
      timerDuration: 20000,
      resetTimer: false,
      resetStopwatch: false,
      count: 0
    };
    
    this.startStopTimer = this.startStopTimer.bind(this);
    this.resetTimer = this.resetTimer.bind(this);
    this.startStopStopWatch = this.startStopStopWatch.bind(this);
    this.resetStopwatch = this.resetStopwatch.bind(this);
    
  }

     componentDidMount () {
  this.animate()
}
GenerareRandom()
{
   var RandomNumber = Math.floor(Math.random() * 100) + 1 ;
}
animate () {
  this.animatedValue.setValue(0)
  Animated.timing(
    this.animatedValue,
    {
      toValue: 1,
      duration: 2000,
      easing: Easing.linear
    }
  ).start(() => this.animate())
}

startStopTimer() {
  
    this.setState({ count: this.state.count + 1 })
    
    this.setState({isTimerStart: !this.state.isTimerStart, resetTimer: false})
    ;
    if(this.state.count==20){
      alert ('You are the winner')
    }
  }
  resetTimer() {
    this.setState({isTimerStart: false, resetTimer: true});
  }
  startStopStopWatch() {
    this.setState({isStopwatchStart: !this.state.isStopwatchStart, resetStopwatch: false});
  }
  resetStopwatch() {
    this.setState({isStopwatchStart: false, resetStopwatch: true});
  }
  getFormattedTime(time) {
      this.currentTime = time;
  }
  render() {
    const marginLeft = this.animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 250]
  })
  const opacity = this.animatedValue.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [0, 1, 0]
  })
  const movingMargin = this.animatedValue.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [0, 300, 0]
  })
  const textSize = this.animatedValue.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [18, 32, 18]
  })
  const rotateX = this.animatedValue.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: ['0deg', '90deg', '0deg']
  })

    return (
      
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <View style={{flex:1,marginTop:32, alignItems:'center', justifyContent:'center'}}>
       <TouchableHighlight onPress={this.startStopTimer}>
      <Animated.View
        onPress={this.startStopTimer} style={{
          marginLeft,
          height: 30,
          bottom:Math.random()*100,
          right:Math.random()*100,
          left:Math.random()*100,
          width: 40,
          backgroundColor: 'red'}}
          
           />
           </TouchableHighlight>
          <Timer 
            totalDuration={this.state.timerDuration} msecs 
            //Time Duration
            start={this.state.isTimerStart}
            //To start
            reset={this.state.resetTimer}
            //To reset
            options={options}
            //options for the styling
            handleFinish={handleTimerComplete}
            //can call a function On finish of the time 
            getTime={this.getFormattedTime} />
          <TouchableHighlight onPress={this.startStopTimer}>
            <Text style={{fontSize: 20, marginTop:10,  }}>
               {!this.state.isTimerStart ? "START" : "STOP"}
            </Text>
          </TouchableHighlight>
          <TouchableHighlight onPress={this.resetTimer}>
            <Text style={{fontSize: 20, marginTop:10}}>RESET</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}
 
const handleTimerComplete = () => alert("Game over");
const options = {
  container: {
  
    padding: 5,
    borderRadius: 5,
    width: 200,
    alignItems:'center',
  },
  text: {
    fontSize: 25,
    backgroundColor:'white',
    marginLeft: 7,
  }
};
const styles = StyleSheet.create({

});


export default CombiScreen;