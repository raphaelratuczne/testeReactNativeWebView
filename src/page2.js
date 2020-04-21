import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  TouchableOpacity
} from 'react-native';
import { WebView } from 'react-native-webview';

const Page2 = (props) => {
  const { uri, setVoltar } = props;

  const voltar = () => {
    if (setVoltar) {
      setVoltar();
    }
  }

  {/*<View>

    </View>*/}
  return (
    <>
      <TouchableOpacity onPress={() => voltar()}>
        <Text style={{fontSize: 20, margin: 10}}>Voltar</Text>
      </TouchableOpacity>
      <Text>{uri}</Text>
      <WebView source={{uri}} style={{flex:1, borderWidth: 1, borderColor: 'gray'}}/>
    </>
  );
}

export default Page2;
