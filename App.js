import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {StyleSheet, View } from 'react-native';


export default function App() {

  return (
    <>
    <View style={styles.view1}/>
    <View style={styles.view2}/> 
    <View style={styles.view3}/> 

    <View style={styles.viewPai4}>
    <View style={styles.view4}></View> 
    <View style={styles.view5}></View>
    </View>


    <View style={styles.view6}/>

    <View style={styles.viewPai}>
    <View style={styles.view7}></View>
    <View style={styles.view9}></View> 
    <View style={styles.view8}></View> 
    </View>

    <View style={styles.viewPai2}>
    <View style={styles.view9}></View>
    <View style={styles.view10}></View>
    <View style={styles.view11}></View> 
    </View>

    <View style={styles.view12}/> 
  
    </>
  );
}

const styles = StyleSheet.create({
  container:{
    width:'100%',
    
  },
  viewPai:{
    marginLeft: '3%',
    marginRight: '3%',
    marginTop: '7%',
    flex:1,
    flexDirection:'row',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',
  },
  viewPai4:{
    marginTop: '7%',
    flex:1,
    flexDirection:'row',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',
  },
  viewPai2:{
    marginLeft: '3%',
    marginRight: '3%',
    marginTop: '7%',
    flex:1,
    flexDirection:'row',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',
  },
  view1:{
    flex: 0.3,
    flexDirection: 'row',
    width: '100%',
    backgroundColor: '#50E3C2',
  },
  view2:{
    alignItems: 'center',
    flex: 1,
    marginTop: '15%',
    marginLeft: '35%',
    marginRight: '35%',
    backgroundColor: '#F5A623',
  },
  view3:{
    flex: 0.4,
    alignItems: 'center',
    marginTop: '5%',
    marginLeft: '25%',
    marginRight: '25%',
    backgroundColor: '#F5A623',
  },
  view4:{
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: '#9013FE',
  },
  view5:{
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: '#4A90E2',
  },
  view6:{
    flex: 0.2,
    backgroundColor: '#50E3C2',
  },
  view7:{
    marginLeft: '3%',
    marginRight: '3%',
    flex:1,
    width: 80,
    height: 80,
    backgroundColor: '#F5A623',
  },
  view8:{
    marginLeft: '3%',
    marginRight: '3%',
    flex:1,
    width: 80,
    height: 80,
    backgroundColor: '#F5A623',
  },
  view9:{
    marginLeft: '3%',
    marginRight: '3%',
    flex:1,
    width: 80,
    height: 80,
    backgroundColor: '#F5A623',
  },
  view10:{
    marginLeft: '3%',
    marginRight: '3%',
    flex:1,
    width: 80,
    height: 80,
    backgroundColor: '#F5A623',
  },
  view11:{
    marginLeft: '3%',
    marginRight: '3%',
    flex:1,
    width: 80,
    height: 80,
    backgroundColor: '#F5A623',
  },
  view12:{
    flex: 0.3,
    width: '100%',
    backgroundColor: '#4A90E2',
  },
 
});
