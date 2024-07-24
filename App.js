import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, {useState} from 'react';

export default function App() {
  const [contadorPessoas, setContadorPessoas] = useState(0)
  const aparecer = false
  function adicionaPessoas() {
    if(contadorPessoas < 10){
      setContadorPessoas(contadorPessoas +1)
      return
    }
      
  }

  function removePessoas() {
    if(contadorPessoas > 0){
      setContadorPessoas(contadorPessoas -1)
      return
    }
      
  }
  return (
   <SafeAreaView style={styles.container}>
    <Text style={{color:'black', fontSize:18}}>Pessoas no restaurante:</Text>
     <View style={styles.areaContador}>
      
        <Text style={styles.numeroContador}>{contadorPessoas}</Text>

      <StatusBar style="auto" />
    </View>
    {contadorPessoas == 10 &&
      <View style={styles.aviso}>
      <Text>Restaurante está no seu limite de pessoas</Text>
    </View>
    }

    <View style={styles.areaBtn}>
      <TouchableOpacity style={[styles.botao, {backgroundColor:'#1d75cd'}]} onPress={adicionaPessoas}>
        <Text style={styles.botaoText}>Adicionar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.botao, {backgroundColor:'#cd3e1d'}]} onPress={removePessoas}>
        <Text style={styles.botaoText}>Remover</Text>
      </TouchableOpacity>
    </View>
   </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  areaContador:{
    backgroundColor:'black',
    height:80,
    width:80,
    borderRadius:8,
    justifyContent:'center',
    alignItems:'center',
    alignContent:'center',
    marginVertical:8
  },
  numeroContador:{
    color:'#FFF',
    fontSize:64,
  }, 
  aviso:{
    width:'75%',
    backgroundColor:'orange'
  },
  botao:{
    height:60,
    justifyContent:'center',
    alignItems:'center',
    padding:15,
    borderRadius:5,
  },
  botaoText:{
    fontSize:22,
    color:'#FFF'
    
  },
  areaBtn:{
    width:'90%',
    alignItems:'center',
    flexDirection:'row',
    marginTop:32,
    justifyContent:'space-around',
    
  },
});
