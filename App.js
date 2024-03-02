/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import type { Node } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
  Alert
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Auth from './Auth';
import { WebView } from 'react-native-webview';

const Section = ({ children, title }): Node => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const [useTrulio, setUseTrulio] = useState(false)

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const customHTML = `
      <body style="display:flex; flex-direction: column;justify-content: center; align-items:center; background-color: black; color:white; height: 100%;">
          <h1 style="font-size:100px; padding: 50px; text-align: center;" id="h1_element">
            This is simple html
          </h1>
          <h2 style="display: block; font-size:80px; padding: 50px; text-align: center;" id="h2_element">
            This text will be changed later!
          </h2>
      </body>`;

  const runFirst = `
      setTimeout(function() { 
          window.alert("Click me!");
          document.getElementById("h1_element").innerHTML = 
          "What is your favourite language?";
          document.getElementById("h2_element").innerHTML =
          "We will see!";
        }, 1000);
      true; // note: this is required, or you'll sometimes get silent failures
    `;

  const runBeforeFirst = `
  window.alert("Click me!");
  `;

  const injectjs = () => {
    let jsCode = `const bodyData = JSON.stringify({
      title: 'foo',
      body: 'bar',
      userId: 1
    });
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: bodyData,
    }).then(response => response.text()).then(valueText => {
      alert(JSON.stringify(valueText));
    });`;
    return jsCode;
  }

  const getTrulioo = () => {
    setUseTrulio(true)
  }

  const onMessage = (event) => {
    Alert.alert(JSON.parse(event.nativeEvent.data));
  }

  return (
    useTrulio ? (
      <SafeAreaView style={{ flex: 1 }}>
        <WebView
          ref={webview => { this.webview = webview; }}
          //   source=
          //     {{uri: 'https://myweb.com/tokenization?type=usersave&automation=yes', 
          //     headers: { 'Content-Type': 'application/x-www-form-urlencoded'}, method: 'POST',
          //     body: 
          //     'invoiceNumber='+invoice+'&storeName='+store+'&language='+setLanguage
          // }}
          source={{ uri: 'Trulio URL' }}
          onMessage={onMessage}
          // injectedJavaScript={injectjs}
          injectedJavaScript={runFirst}
          injectedJavaScriptBeforeContentLoaded={runBeforeFirst}
          scrollEnabled={true}
          domStorageEnabled={true}
          javaScriptEnabledAndroid={true}
          javaScriptEnabled={true}
        />
      </SafeAreaView>) : (
      <SafeAreaView style={backgroundStyle}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={backgroundStyle}>
          <Header />
          <View
            style={{
              backgroundColor: isDarkMode ? Colors.black : Colors.white,
            }}>
            <Section title="Step Zero">
              Use <Text style={styles.highlight}>Okta</Text> for authentication.
            </Section>
            <Auth />
            <View style={styles.button}>
              <Button
                onPress={async () => {
                  getTrulioo();
                }}
                title="Launch Trulioo"
              />
            </View>
            <Section title="Step One">
              Edit <Text style={styles.highlight}>App.js</Text> to change this
              screen and then come back to see your edits.
            </Section>
            <Section title="See Your Changes">
              <ReloadInstructions />
            </Section>
            <Section title="Debug">
              <DebugInstructions />
            </Section>
            <Section title="Learn More">
              Read the docs to discover what to do next:
            </Section>
            <LearnMoreLinks />
          </View>
        </ScrollView>
      </SafeAreaView>
    )
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
