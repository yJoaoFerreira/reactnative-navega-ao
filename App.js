import { useState } from 'react';
import { View, Button, Text } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const Login = ({ navigation, route }) => {
  return (
    <View>
      <Button onPress={() => route.params.funcLogar(true)} title='Logar' />
      <Button onPress={() => navigation.navigate("Registrar")} title='Registrar' />
    </View>
  );
};

const Registrar = () => { return (<Text>Registrar</Text>) };

const Avisos = () => { return (<Text>Avisos</Text>) };

const Perfil = ({ navigation }) => {
  return (
    <View>
      <Text>Perfil</Text>
      <Button title="Voltar para Home" onPress={() => navigation.pop()} />
    </View>
  );
};

const Home = ({ navigation, route }) => {
  const deslogar = () => {
    route.params.funcLogar(false);
    navigation.replace("Login");
  };

  return (
    <View>
      <Text>Home</Text>
      <Button title="Ir para Perfil" onPress={() => navigation.push("Perfil")} />
      <Button title="Logout" onPress={deslogar} />
    </View>
  );
};

const Fotos = () => { return (<Text>Fotos</Text>) };

const Config = () => { return (<Text>Config</Text>) };

const Contatos = () => { return (<Text>Contatos</Text>) };

const App = () => {
  const [EstaLogado, setLogado] = useState(false);

  return (
    <NavigationContainer>
      {EstaLogado ? (
        <Drawer.Navigator>
          <Drawer.Screen name="Home" component={() => {
            return (
              <Tab.Navigator>
                <Tab.Screen name="Home_tab" options={{ headerShown: false }} component={() => {
                  return (
                    <Stack.Navigator>
                      <Stack.Screen name="Home" options={{ headerShown: false }} component={Home} initialParams={{ funcLogar: setLogado }} />
                      <Stack.Screen name="Perfil" component={Perfil} />
                    </Stack.Navigator>
                  );
                }} />
                <Tab.Screen name="Avisos" component={Avisos} />
              </Tab.Navigator>
            );
          }} />
          <Drawer.Screen name="Config" component={Config} />
          <Drawer.Screen name="Contatos" component={Contatos} />
          <Drawer.Screen name="Fotos" component={Fotos} />
        </Drawer.Navigator>
      ) : (
        <Stack.Navigator>
          <Stack.Screen name="Login" component={Login} initialParams={{ funcLogar: setLogado }} />
          <Stack.Screen name="Registrar" component={Registrar} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default App;
