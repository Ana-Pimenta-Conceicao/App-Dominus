import {
  Button,
  Text,
  View,
  StyleSheet,
  Image,
  SafeAreaView,
} from 'react-native';

import * as React from 'react';

const Separator = () => <View style={styles.separator} />;

class TelaPrincipal extends React.Component {
  render() {
    return (
      <View style={styles.container}>  
          <Image style={styles.logo} source={require('../../assets/logo.png')} />   
             <Text style={styles.paragraph}>Instrumentos Musicais</Text>   
                <SafeAreaView>      
                  <Button      
                     onPress={() =>this.props.navigation.navigate('Login')}         
                      title="ACESSAR"          
                      color="#836FFF"        
                        accessibilityLabel="Learn more about this purple button"        />
                  
                   <Separator />   
                        <Button     
                           onPress={''}     
                                title="AJUDA"   
                                       color="#4B0082" 
                                               accessibilityLabel="Learn more about this purple button"        />  
                                                   </SafeAreaView>    
                                                   </View>  );

  }
}
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFFFFF', padding: 8, alignContent: 'center' },

 

  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  logo: {
    alignContent: 'center',
    margin: 'auto',
    width: 300,
    height: 300
    
  },
    separator: {
    marginVertical: 8,
    borderBottomColor: '#DFB4FF',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

export default TelaPrincipal;
