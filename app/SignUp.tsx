import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { router } from 'expo-router';

export default function SignUp() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    console.log("Sign Up Details:", { name, email, phone, password });
    router.push('/MainPage');
  };

  const Login = () => {
    router.push('/Login');
  };

  return (
    <View style={styles.Container}>
      <View style={styles.TextContainer}>
        <Text style={styles.WelcomeText}>Create an account,</Text>
        <Text style={styles.SubText}>Please fill the required details to Sign Up</Text>
      </View>

      <View style={styles.Inputs}>
        <View style={styles.InputWrapper}>
          <Icon name='person-outline' size={20} />
          <TextInput
            style={styles.Input}
            placeholder='Name'
            value={name}
            onChangeText={setName}
          />
        </View>

        <View style={styles.InputWrapper}>
          <Icon name='mail-outline' size={20} />
          <TextInput
            style={styles.Input}
            placeholder='Email'
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />
        </View>

        <View style={styles.InputWrapper}>
          <Icon name='call-outline' size={20} />
          <TextInput
            style={styles.Input}
            placeholder='+91| Phone Number'
            value={phone}
            onChangeText={setPhone}
            keyboardType='phone-pad'
          />
        </View>

        <View style={styles.InputWrapper}>
          <Icon name='lock-closed-outline' size={20} />
          <TextInput
            style={styles.Input}
            placeholder='Password'
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!passwordVisible}
          />
          <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)}>
            <Icon name={passwordVisible ? "eye-outline" : "eye-off-outline"} size={20} color="#000" />
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.SignUpButton} onPress={handleSignUp}>
          <Text style={styles.SignUpButtonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.DividerText}>________________    or    ________________</Text>

      <View style={styles.LoginContainer}>
        <Text>Already have an account? </Text>
        <Text style={styles.LoginText} onPress={Login}>Sign In</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  TextContainer: {
    marginBottom: 40,
  },
  WelcomeText: {
    fontFamily: 'SemiBold',
    fontSize: 25,
  },
  SubText: {
    fontFamily: 'Light',
    fontSize: 14,
  },
  Inputs: {
    marginTop: 20,
  },
  InputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 30,
    padding: 10,
    marginBottom: 20,
  },
  Input: {
    flex: 1,
    paddingLeft: 10,
  },
  SignUpButton: {
    backgroundColor: '#D3B09F',
    padding: 15,
    borderRadius: 30,
    alignItems: 'center',
  },
  SignUpButtonText: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'P-Regular',
  },
  DividerText: {
    textAlign: 'center',
    marginTop: 20,
    color: '#474141',
  },
  LoginContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  LoginText: {
    color: '#674636',
  },
});
