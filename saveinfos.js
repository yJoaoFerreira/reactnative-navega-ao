import { SafeAreaView, Button, TextInput } from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";
import {useState} from 'react';
 
_storeData = async (valorParaSalvar) => {
  try {
    await AsyncStorage.setItem('teste', valorParaSalvar);
  } catch (error) {alert(error)}};
 
_retrieveData = async () => {
  try {
    const value = await AsyncStorage.getItem('teste');
    if (value !== null) {alert(value);}
  } catch (error) {alert(error)}};
 
export default function App() {
  const[valorSalvar, setValorSalvar] = useState('');
  return (
    <SafeAreaView>
      <TextInput placeholder='Digite o valor' value={valorSalvar} onChangeText={setValorSalvar}/>
      <Button onPress={()=>_storeData(valorSalvar)} title="Registrar valor"/>
      <Button onPress={_retrieveData} title="Pegar valor"/>
    </SafeAreaView>
  );}
