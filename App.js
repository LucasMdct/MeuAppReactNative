import { useState } from 'react';
import { StatusBar, Text, View, SafeAreaView, Image, ScrollView, Dimensions } from 'react-native';
import { Alert, Button, TextInput, Appbar, Provider } from 'react-native-paper';

const App = () => {
  const [Input, setInput] = useState('');

  const handleNomeChange = (text) => {
    setInput(text);
  };

  const handleButtonPress = () => {
    alert(`Olá, ${Input}!`);
  };

  // Obtém a largura total da tela
  const screenWidth = Dimensions.get('window').width;


  return (
    <Provider>
      <View>
        <SafeAreaView>

          <Appbar.Header>
            <Appbar.Content title="React-native" />
          </Appbar.Header>
          <StatusBar translucent={false} backgroundColor="#ff00ff" />
          <Image
            source={require('./imgs/react-app-banner.gif')}
             style={{ flex: 1, width: screenWidth }}
             resizeMode="contain"
          />

          <TextInput
            placeholder='Informe seu nome'
            style={{
              fontSize: 32
            }}
            value={Input}
            onChangeText={handleNomeChange}
          />
          <Button mode="contained" onPress={handleButtonPress}>
            Obter Saudação
          </Button>
        </SafeAreaView>
      </View>

    </Provider>
  );
};

export default App;




