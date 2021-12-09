import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';


  

export default function App() {
  
  const[nome, setNome] = useState('');
  const[email, setEmail] = useState('');
  const[senha, setSenha] = useState('');

  const cadastro = () => {
    alert('Usuário Cadastrado');

  }

  return (
    <View style={styles.container}>
        <StatusBar hidden/>

        <Image style={{width:200, height:200}} source={require('./assets/image.png')}/>

        <TextInput placeholder="Digite seu nome" style={styles.textInput} onChangeText={text=>setNome(text)}/>
        <TextInput placeholder="Digite seu email"style={styles.textInput} onChangeText={text=>setSenha(text)}/>
        <TextInput secureTextEntry={true} placeholder="Digite sua senha"style={styles.textInput} onChangeText={text=>setEmail(text)}/>

        <TouchableOpacity style={styles.btnCadastro} onPress={()=>cadastro()}>
          <Text style={{color:'white', textAlign:'center'}}>CADASTRAR</Text>
        </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding:20
  },
  textInput:{
    width:'100%',
    height:40,
    backgroundColor:'#ffe',
    borderRadius:20,
    paddingLeft:10,
    marginBottom:10,
    borderWidth:1,
    borderColor:'blue'

  },
  btnCadastro:{
    width:'100%',
    height:40,
    backgroundColor:'blue',
    borderRadius:20,
    justifyContent:'center'

  }

});
