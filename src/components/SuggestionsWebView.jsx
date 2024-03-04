import React from 'react';
import {WebView} from 'react-native-webview';
import {View, StyleSheet} from 'react-native';

const SuggestionsWebView = () => {
  return (
    <View style={styles.container}>
      <WebView
        style={styles.webView}
        source={{uri: 'https://www.lipsum.com/'}}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        startInLoadingState={true}
        scalesPageToFit={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  webView: {
    height: 800,
  },
});

export default SuggestionsWebView;
