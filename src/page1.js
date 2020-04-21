import React, { useState } from 'react';
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

import { Colors } from 'react-native/Libraries/NewAppScreen';

const Page1 = (props) => {

  const {abrirLink} = props;
  const [cartao, setCartao] = useState('00320000077439414');
  const [uri, setUri] = useState('');
  const urls = [
    'https://www.unimedcontraocoronavirus.com.br/home?cartao=[BENEFICIARIO]',
    'http://www3.unimedsjc.coop.br/servico/srv_05b.php?carteira=[BENEFICIARIO]&hash=[MD5]unimed_[BENEFICIARIO][/MD5]',
    'http://www3.unimedsjc.coop.br/servico/coop_rev_manuais.php?hash=[MD5]unimed_[DATA][/MD5]',
    'https://www.unimedcontraocoronavirus.com.br/home?cartao=[BENEFICIARIO]',
    'https://portal.unimedbauru.com.br/portal/unimedbauru/Portugues/sistemas/teleconsultas/index.php?origem=app&cartao=[BENEFICIARIO]&ch=[MD5][BENEFICIARIO];d9d5d745c96d166a3bdddc6cf720373a;[DATA][/MD5]',
    'https://www.unimedcontraocoronavirus.com.br/home?cartao=[BENEFICIARIO]',
    'https://www.unimedcontraocoronavirus.com.br/home?cartao=[BENEFICIARIO]',
    'https://www.unimed.coop.br/web/limeira/guia-medico',
    'https://www.unimed.coop.br/web/noroestedoparana',
    'https://portal.unimedumr.com.br/SegundaViaPF',
    'https://api.unimedamparo.coop.br:8080?pass=[MD5]0192:[PRESTADOR]:unimed@192:[DATA][/MD5]&prestador=[PRESTADOR]',
    'https://www.unimedcontraocoronavirus.com.br/home?cartao=[BENEFICIARIO]',
    'https://autoatendimento.unimedsorocaba.coop.br/YouDo/Login.aspx',
    'https://www.unimedsorocaba.coop.br/Diagnosticos/Acesso/Paciente',
    'https://agendamento.unimedsorocaba.coop.br/Agendamento/GUI/PrincipalAOL.aspx',
    'https://www.unimedsorocaba.coop.br/website/servicosonline/PesquisaMedicamentos.ashx'
  ];

  const aoClicarLink = (link) => {
    console.log('aoClicarLink',link);
    const l = link.replace('[BENEFICIARIO]',cartao);
    if (abrirLink) {
      abrirLink(l);
    }
  }

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Numero cartão teste</Text>
              <TextInput
                value={cartao}
                onChangeText={t => setCartao(t)}
                style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                keyboardType="numeric"
                />
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Abrir outra url</Text>
              <TextInput
                value={uri}
                onChangeText={t => setUri(t)}
                style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                placeholder="http://www..."
                />
              <TouchableOpacity onPress={() => aoClicarLink(uri)}>
                <Text style={{fontSize: 18}}>Abrir</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Enereços teste</Text>
              <>
                {urls.map((u,i) => (
                  <TouchableOpacity key={i.toString()} onPress={() => aoClicarLink(u)}>
                    <Text style={styles.sectionDescription}>{u}</Text>
                  </TouchableOpacity>
                ))}
              </>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default Page1;
