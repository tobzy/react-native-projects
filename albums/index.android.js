// index.android.js - place code in here for Android!!
// import a library to help create a component

import React from 'react'
import {AppRegistry, View} from 'react-native'

// import Album header component
import Header from './src/components/Header'

// import AlbumList component
import AlbumList from './src/components/AlbumList'

// Create a component//
class App extends React.Component {
  render() {
    return (
      <View style={{ flex: 1}}>
        <Header headerText='Albums!'/>
        <AlbumList />
      </View>

    )
  }
}

// Render to Device.
AppRegistry.registerComponent('albums', () => App)
