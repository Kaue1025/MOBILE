import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, Switch, Vibration, Share, Button, TextInput } from 'react-native';

export default function App() {
  const [receberOfertas, setReceberOfertas] = useState(false);

  const handleSwitchChange = (value) => {
    setReceberOfertas(value);
  };

  const vibrate = () => {
    Vibration.vibrate(500);
  };

  const onShare = async () => {
    try {
      await Share.share({
        message: 'exp://10.188.105.16:8081',
      });
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <View style={styles.principal}>
      <ScrollView>
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={require('./assets/src/logo.png')}
          />
        </View>

        <Text style={styles.titulo}>Loja do Construtor</Text>

        <TextInput
          style={styles.input}
          placeholder="Pesquisar"
        />

        <View style={styles.column}>
          <View style={styles.item}>
            <Image
              style={styles.image}
              source={require('./assets/src/makita.png')}
            />
            <Text style={styles.textoItem}>Serra Mármore com 2 Discos 110mm 1300W 220V Makita</Text>
            <Text style={styles.precoItem}>$359,99</Text>
            <TouchableOpacity style={styles.button} onPress={vibrate}>
              <Text style={styles.textoBotao}>Comprar</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.item}>
            <Image
              style={styles.image}
              source={require('./assets/src/escada.png')}
            />
            <Text style={styles.textoItem}>Escada Articulada 4x4 com 16 Degraus de Alumínio</Text>
            <Text style={styles.precoItem}>$488,90</Text>
            <TouchableOpacity style={styles.button} onPress={vibrate}>
              <Text style={styles.textoBotao}>Comprar</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.item}>
            <Image
              style={styles.image}
              source={require('./assets/src/caixa_ferramenta.png')}
            />
            <Text style={styles.textoItem}>Jogo de Ferramentas Oficina Master com Chaves Combinadas com Catraca</Text>
            <Text style={styles.precoItem}>$1199,90</Text>
            <TouchableOpacity style={styles.button} onPress={vibrate}>
              <Text style={styles.textoBotao}>Comprar</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.item}>
            <Image
              style={styles.image}
              source={require('./assets/src/furadeira.png')}
            />
            <Text style={styles.textoItem}>Furadeira de Impacto Vel. Variável e Reversível 1/2 Pol. 760W com Kit de Broca</Text>
            <Text style={styles.precoItem}>$484,73</Text>
            <TouchableOpacity style={styles.button} onPress={vibrate}>
              <Text style={styles.textoBotao}>Comprar</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.item}>
            <Image
              style={styles.image}
              source={require('./assets/src/caixaF.png')}
            />
            <Text style={styles.textoItem}>Carrinho Vermelho para Ferramentas com 7 Gavetas</Text>
            <Text style={styles.precoItem}>$3233,00</Text>
            <TouchableOpacity style={styles.button} onPress={vibrate}>
              <Text style={styles.textoBotao}>Comprar</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.item}>
            <Image
              style={styles.image}
              source={require('./assets/src/arame.png')}
            />
            <Text style={styles.textoItem}>Arame Farpado Motto Belgo® - 500m</Text>
            <Text style={styles.precoItem}>$342,11</Text>
            <TouchableOpacity style={styles.button} onPress={vibrate}>
              <Text style={styles.textoBotao}>Comprar</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.item}>
            <Image
              style={styles.image}
              source={require('./assets/src/solda.png')}
            />
            <Text style={styles.textoItem}>máquina de solda mig/mag smashweld 277x 250 amp</Text>
            <Text style={styles.precoItem}>$6.859,96</Text>
            <TouchableOpacity style={styles.button} onPress={vibrate}>
              <Text style={styles.textoBotao}>Comprar</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.item}>
            <Image
              style={styles.image}
              source={require('./assets/src/capacete.jpg')}
            />
            <Text style={styles.textoItem}>Capacete Aba frontal com Catraca Baseball Diamond V Rotor Amarelo Delta Plus</Text>
            <Text style={styles.precoItem}>$48,90</Text>
            <TouchableOpacity style={styles.button} onPress={vibrate}>
              <Text style={styles.textoBotao}>Comprar</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.item}>
            <Image
              style={styles.image}
              source={require('./assets/src/maleta.png')}
            />
            <Text style={styles.textoItem}>Jogo de Ferramentas com Maleta 186 Peças Bumafer</Text>
            <Text style={styles.precoItem}>$698,99 </Text>
            <TouchableOpacity style={styles.button} onPress={vibrate}>
              <Text style={styles.textoBotao}>Comprar</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.item}>
            <Image
              style={styles.image}
              source={require('./assets/src/esmilha.png')}
            />
            <Text style={styles.textoItem}>Esmerilhadeira Angular GWS700 4.1/2" 710W 127V Bosch</Text>
            <Text style={styles.precoItem}>$289,99</Text>
            <TouchableOpacity style={styles.button} onPress={vibrate}>
              <Text style={styles.textoBotao}>Comprar</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.switchContainer}>
          <Text style={styles.switchText}>Deseja receber ofertas?</Text>
          <Switch
            trackColor={{ false: "#f00", true: "#4de44d" }}
            thumbColor={receberOfertas ? "#fff" : "#fff"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={handleSwitchChange}
            value={receberOfertas}
          />
        </View>
        <View style={{ marginTop: 20 }}>
          <Button onPress={onShare} title="Compartilhar"/>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  principal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#76a4ef',
  },
  titulo: {
    fontSize: 30,
    marginTop: 20,
    marginHorizontal: 20,
    textAlign: 'center',
    margin: 40,
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  logo: {
    height: 150,
    width: 150,
  },

  input: {
    borderWidth: 2,
    borderRadius: 15,
    borderColor: '#000',
    textAlign: 'center',
    margin: 20,
    fontSize: 15,
    padding: 0,
    width: '90%',
    marginBottom: 50,
  },

  column: {
    alignItems: 'center',
    marginBottom: 20,
  },
  item: {
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 200,
    borderWidth: 3,
    borderRadius: 10,
    borderColor: '#000',
  },
  textoItem: {
    textAlign: 'center',
    fontSize: 20,
    marginTop: 10,
    paddingHorizontal: 10,
  },
  precoItem: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
  },

  button: {
    backgroundColor: '#000',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginTop: 10
  },
  textoBotao: {
    color: '#fff',
    fontSize: 16,
    textTransform: 'uppercase',
    fontWeight: 'bold'
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  switchText: {
    fontSize: 20,
    marginRight: 10,
  },
});
