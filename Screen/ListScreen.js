import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import {  StyleSheet,TouchableOpacity ,Text, ScrollView, StatusBar,View} from 'react-native';
import { DataTable } from 'react-native-paper';


const ListScreen = () => {

const [apiData, setApiData] = useState([]);
// const leagues =  apiData.leagues.map((item, index) => {
//   return(
//     <TouchableOpacity onPress={save}>

// <DataTable.Row key={item.idLeague}>
// <DataTable.Cell>{item.strLeague}</DataTable.Cell>
// <DataTable.Cell>{item.strSport}</DataTable.Cell>
// <DataTable.Cell>{item.strLeagueAlternate}</DataTable.Cell>
// </DataTable.Row> 
  
  
//    </TouchableOpacity>
//   ) 
// })

const save=()=>{
console.log("hello")
}
// console.log(apiData)
const getData=async()=>{
  try {
    const res=await fetch(`https://www.thesportsdb.com/api/v1/json/1/all_leagues.php`,{
    method:"GET",
    headers:{
      "Content-Type":"application/json"
    }
  });
  const data=await res.json();
  // console.log(data)
setApiData(
{
  ...data
}
)
  } catch (error) {
    console.log(error)
  }
}



 useEffect(() => {
  getData();
 }, []) 
 
  return (
    <>
     
    
    

     
     <DataTable class="table table-striped">
      <DataTable.Header>
        
        <DataTable.Title> idLeague </DataTable.Title> 
        <DataTable.Title> strLeague </DataTable.Title> 
        <DataTable.Title> strSport </DataTable.Title> 
        <DataTable.Title> strLeagueAlternate </DataTable.Title> 
      
      </DataTable.Header>
      <ScrollView style={styles.scrollView} horizontal={false}>
  
   {/* {leagues} */}
      </ScrollView>
   
  </DataTable>
 
    

    </>
  )
}





const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    backgroundColor: 'pink',
    marginHorizontal: 20,
  },
 
});



export default ListScreen;
    // style={{
      //   flex: 1,
      //   justifyContent: "center",
      //   alignItems: "center"
      // }}