import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, Switch, Vibration, Share, Button, TextInput, FlatList } from 'react-native';

export default function App() {
  const [receberOfertas, setReceberOfertas] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [filteredData, setFilteredData] = useState([]);

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

  const data = [
    { name: 'Serra Mármore com 2 Discos 110mm 1300W 220V Makita', price: 359.99, image: require('./assets/src/makita.png') },
    { name: 'Escada Articulada 4x4 com 16 Degraus de Alumínio', price: 488.90, image: require('./assets/src/escada.png') },
    { name: 'Jogo de Ferramentas Oficina Master com Chaves Combinadas com Catraca', price: 1199.90, image: require('./assets/src/caixa_ferramenta.png') },
    { name: 'Furadeira de Impacto Vel. Variável e Reversível 1/2 Pol. 760W com Kit de Broca', price: 484.73, image: require('./assets/src/furadeira.png') },
    { name: 'Carrinho Vermelho para Ferramentas com 7 Gavetas', price: 3233.00, image: require('./assets/src/caixaF.png') },
    { name: 'Arame Farpado Motto Belgo® - 500m', price: 342.11, image: require('./assets/src/arame.png') },
    { name: 'máquina de solda mig/mag smashweld 277x 250 amp', price: 6859.96, image: require('./assets/src/solda.png') },
    { name: 'Capacete Aba frontal com Catraca Baseball Diamond V Rotor Amarelo Delta Plus', price: 48.90, image: require('./assets/src/capacete.jpg') },
    { name: 'Jogo de Ferramentas com Maleta 186 Peças Bumafer', price: 698.99, image: require('./assets/src/maleta.png') },
    { name: 'Esmerilhadeira Angular GWS700 4.1/2" 710W 127V Bosch', price: 289.99, image: require('./assets/src/esmilha.png') },
  ];

  const handleSearch = (text) => {
    setSearchText(text);
    const newData = data.filter(item => {
      const itemName = item.name.toLowerCase();
      const searchTextLower = text.toLowerCase();
      return itemName.indexOf(searchTextLower) > -1;
    });
    setFilteredData(newData);
    if (newData.length ===0 && text!==''){
      setFilteredData([{name:'Item não encontrado'}])
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
          onChangeText={handleSearch}
          value={searchText}
        />

        <FlatList
          data={filteredData.length > 0 ? filteredData : data}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Image
                style={styles.image}
                source={item.image}
              />
              <Text style={styles.textoItem}>{item.name}</Text>
              {/* Verifica se o preço não é null*/}
              {item.price ? (
    <TouchableOpacity style={styles.button} onPress={vibrate}>
    <Text style={styles.textoBotao}>Comprar</Text>
    </TouchableOpacity>
        ) : null}

            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
        />

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
  {filteredData.length > 0 && filteredData.some(item => item.price) && (
    <Button onPress={onShare} title="Compartilhar" />
  )}
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