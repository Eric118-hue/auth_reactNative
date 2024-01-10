import React from 'react'
import { Text, Button, TextInput, View } from 'react-native'
import { styles } from '../../../styles'

const Register: React.FC<any> = ({ navigation }) => {
  return (
    <View  style={styles.container}>
      <Text style={styles.textLogin}>CAMTRACK</Text>
      <View style={styles.loginContainer}>
        <Text style={styles.txtCreate}>Create your account </Text>
        <TextInput style={styles.border}  placeholder="Name"/>
        <TextInput style={styles.border}  placeholder="Email"/>
        <TextInput style={styles.border}  placeholder="Password"/>
        <View style={styles.btn}>
          <Button
              // onPress={this._onPressButton}
          
              title="Save"
              color="#009387"
          />
        </View>
        <Text>Have an account? 
                <Text 
                    style={styles.txt}
                    onPress={() => navigation.navigate('Login')}
                > Login </Text>
      </Text>
      </View>
    </View>
  )
}

export default Register