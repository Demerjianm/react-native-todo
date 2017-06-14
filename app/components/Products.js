import React, { Component } from 'react';
import { Text, View, ListView } from 'react-native';

class Products extends Component {
  state = { products: [] };

  componentDidMount() {
    fetch('https://devpoint-ajax-example-server.herokuapp.com/api/v1/products')
      .then( response => response.json() )
      .then( products => { this.setState({ products })})
      .catch( err => {
        // TODO: handle errors better for a production app!
        console.log(err);
      });
  }

  render() {
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    let dataSource = ds.cloneWithRows(this.state.products);

    return(
      <View style={{ flex: 1, paddingTop: 22 }}>
        { this.state.products.length ?
          <ListView
            dataSource={dataSource}
            renderRow={ (rowData) => <Text>{rowData.name}</Text> }
          />
          : <Text>Loading Products...</Text>
        }
      </View>
    );
  }
}

export default Products;
