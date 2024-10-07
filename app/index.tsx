import { StyleSheet, View, Text, ImageBackground, TouchableOpacity, Image } from 'react-native';
import PagerView from 'react-native-pager-view';
import React, { useRef } from 'react';
import { router } from 'expo-router';

export default function MyPager() {
  const pagerRef = useRef<PagerView>(null); // Reference to PagerView

  // Function to navigate to the next page in the carousel
  const handleNextPage = () => {
    if (pagerRef.current) {
      pagerRef.current.setPage(2); // Set to the third page (index 2)
    }
  };

  // Handle "Get Started" button
  const handleGetStarted = () => {
    handleNextPage(); // Move to the next page
  };

  const handleLogin = () => {
    router.push('/Login');
  };

  const handleSignUp = () => {
    router.push('/SignUp');
  }



  return (
    <View style={styles.container}>
      <PagerView style={styles.container} initialPage={0} ref={pagerRef}>
        {/* First Page */}
        <View style={styles.page} key="1">
          <ImageBackground style={styles.bgImg} source={require('@/assets/images/Caraousel/bgImg.png')}>
            <View style={styles.TextContainer}>
              <Text style={{ fontFamily: 'G-Bold', fontSize: 30 }}>BOSSIN Salon</Text>
              <Text>__________________________________</Text>
              <Text style={{ fontFamily: 'G-Regular', fontSize: 18 }}>Fashion with care</Text>
              <Text style={{ fontFamily: 'P-Regular', marginTop: 5 }}>Swipe Right</Text>
            </View>
          </ImageBackground>
        </View>

        {/* Second Page */}
        <View style={styles.page} key="2">
          <ImageBackground style={styles.bgImg} source={require('@/assets/images/Caraousel/Image2.jpg')}>
            <View style={styles.overlay} />
            <View style={styles.Page2Text}>
              <Text style={{ fontFamily: 'SemiBold', fontSize: 25, color: '#FFFF' }}>Find The Best Service</Text>
              <Text style={{ fontFamily: 'Light', fontSize: 13, color: '#FFFF', marginTop: 5 }}>Explore a variety of services{'\n'}tailored to fit your lifestyle</Text>

              {/* "Get Started" Button */}
              <TouchableOpacity style={styles.BtnContainer} onPress={handleGetStarted}>
                <Text style={styles.btnText}>Get Started</Text>
              </TouchableOpacity>

              {/* Login Option */}
              <TouchableOpacity style={{ marginTop: 40, flexDirection: 'row' }}>
                <Text style={{ fontFamily: 'P-Regular', color: '#FFF' }}>Already a user?</Text>
                <Text style={styles.loginText} onPress={handleLogin}>SignIn</Text>
              </TouchableOpacity>
            </View>
          </ImageBackground>
        </View>

        {/* Third Page */}
        <View style={styles.page} key="3">
          <ImageBackground style={styles.bgImg} source={require('@/assets/images/Caraousel/bosin.jpg')}>
            <View style={styles.overlay} />
            <View style={styles.Page3Text}>
              <Text style={{ fontFamily: 'SemiBold', fontSize: 25, color: '#FFF', textAlign: 'center' }}>Embark your journey with Bossin today!</Text>
              <Text style={{
                fontFamily: 'Light',
                fontSize: 14,
                color: '#FFF',
                textAlign: 'center',
                marginTop: 10,
                lineHeight: 20,
              }}>Log in or sign up to {'\n'} access personalized beauty treatments and {'\n'} exclusive promotions!</Text>
              <TouchableOpacity style={{ backgroundColor: '#FFF', paddingHorizontal: 60, paddingVertical: 15, borderRadius: 30, marginTop: 30, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                <Image style={{ height: 24, width: 24, marginRight: 10 }} source={require('@/assets/images/logos/google.png')} />
                <Text style={{ fontFamily: 'P-Regular', color: '#674636' }}>Sign Up with Google</Text>
              </TouchableOpacity>

              <TouchableOpacity style={{ backgroundColor: '#D3B09F', paddingHorizontal: 60, paddingVertical: 15, borderRadius: 30, marginTop: 15 }} onPress={handleSignUp}>
                <Text style={{ fontFamily: 'P-Regular', color: '#674636' }} >Sign Up with Email/Phone</Text>
              </TouchableOpacity>

              <TouchableOpacity style={{ marginTop: 20, flexDirection: 'row' }}>
                <Text style={{ fontFamily: 'P-Regular', color: '#FFF' }}>Already a user?</Text>
                <Text style={styles.loginText} onPress={handleLogin}>SignIn</Text>
              </TouchableOpacity>
            </View>
          </ImageBackground>
        </View>
      </PagerView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  page: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  bgImg: {
    height: '100%',
    width: '100%',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  Page2Text: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 400,
  },
  TextContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  BtnContainer: {
    backgroundColor: '#D3B09F',
    paddingHorizontal: 80,
    paddingVertical: 20,
    borderRadius: 25,
    marginTop: 40,
  },
  btnText: {
    fontFamily: 'SemiBold',
    fontSize: 16,
    color: '#FFF',
  },
  loginText: {
    fontFamily: 'SemiBold',
    color: '#FFF',
    textDecorationLine: 'underline',
    marginLeft: 5,
  },
  Page3Text: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 300
  }
});
