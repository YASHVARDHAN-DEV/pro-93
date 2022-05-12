import React, {Component} from 'react'
import {view, Text, Stylesheet} from 'react-native'
export default class cakeScreen extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.text}>cakeScreen</Text>
            </View>
        )
    }
}
const styles=Stylesheet.create({
   container:{
       flex:1,
       justifyContent:'center',
       alignItems:'center',
       backgroundColor:'#5653d4',

   },
   text:{
       color:'#ffff',
       fontSize:30,
   }
})