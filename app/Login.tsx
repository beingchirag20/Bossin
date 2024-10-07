import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import { router } from 'expo-router';

export default function Login() {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const SignUp = () => {
    router.push('/SignUp')
  }

  
  const Submit = () => {
    router.push('/MainPage')
  }
  return (
    <View>
      <View style={styles.TextContainer}>
        <Text style={styles.WelcomeText}>Welcome Back,</Text>
        <Text style={styles.SubText}>Glad to meet you again! Please log in to use the app.</Text>
      </View>

      <View style={styles.InputContainer}>
        {/* Email Input */}
        <View style={styles.inputWrapper }>
          <Icon name="mail-outline" size={20} color="#000" />
          <TextInput
            placeholder="Enter your Email"
            style={styles.input}
         
          />
        </View>

        {/* Password Input */}
        <View style={styles.inputWrapper}>
          <Icon name="lock-closed-outline"  size={20} color="#000"/>
          <TextInput
            placeholder="Enter Password"
            secureTextEntry={!passwordVisible}
            style={styles.input}
            
          />
          <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)}>
          <Icon name={passwordVisible ? "eye-outline" : "eye-off-outline"} size={20} color="#000" />
          </TouchableOpacity>
        </View>
        
        {/* Forgot Password */}
        <TouchableOpacity style={styles.ForgotPasswordContainer}>
          <Text style={styles.ForgotPasswordText}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>

      {/* Sign In Button */}
      <View style={styles.ButtonContainer}>
        <TouchableOpacity style={styles.SignInButton} onPress={Submit}>
          <Text style={styles.SignInButtonText}>Sign In</Text>
        </TouchableOpacity>
      </View>

      <Text style={{textAlign:'center', marginTop:20, color:'#474141'}}>________________    or    ________________</Text>

      <View style={{flexDirection:'row', justifyContent:'center', marginTop:20}}>
        <Text>Dont have an account? </Text>
        <Text style={{color:'#674636'}} onPress={SignUp}>Create an account</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  TextContainer: {
    marginTop: 80,
    paddingHorizontal: 20
  },
  WelcomeText: {
    fontFamily: 'SemiBold',
    fontSize: 25
  },
  SubText: {
    fontFamily: 'P-Regular',
    fontSize: 12,
    marginTop: 5
  },
  InputContainer: {
    marginTop: 150,
    paddingHorizontal: 20
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 30,
    padding: 10,
    marginBottom: 20,
    borderColor:'#ccc'
  },
  input: {
    flex: 1, 
    paddingLeft: 10
  },
  ForgotPasswordContainer: {
    alignItems: 'flex-end',
    marginTop: -5
  },
  ForgotPasswordText: {
    color: '#674636',
    fontSize: 12
  },
  ButtonContainer: {
    marginTop: 40,
    paddingHorizontal: 20
  },
  SignInButton: {
    backgroundColor: '#D3B09F',
    padding: 15,
    borderRadius: 30,
    alignItems: 'center'
  },
  SignInButtonText: {
    color: '#fff',
    fontSize: 16,
    fontFamily:'P-Regular'
  }
});
