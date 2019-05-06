import React, {Component} from 'react';
import { Text, View ,Button,Image} from 'react-native';

class HomeScreen extends Component{
  
  render(){
    return(
      <View style={{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'white'
      }}>
      <Image
          style={{width: 50, height: 50}}
          source={{uri: 'https://images-na.ssl-images-amazon.com/images/I/71qZ%2BDsFRQL._SY450_.jpg'}}
        />
      <Text>
    Do you want to play a game?
      </Text>
      <Button
      title="Easy"
      onPress={
          ()=>this.props.navigation.navigate('Users')
        }
  
      />
      <Button
      title="Medium"
      onPress={
          ()=>this.props.navigation.navigate('Combi')
        }
  
      />

      <Button
      title="Hard"
      onPress={
          ()=>this.props.navigation.navigate('Van')
        }
      />
      
      </View>
    );
  }
}

export default HomeScreen;