import React, {useEffect, useState} from 'react';
import {View, Text, Image, FlatList} from 'react-native';

export default App = () => {
  const [data, setData] = useState([]);
  console.log(data);

  //Making an API call/HTTP call
  useEffect(() => {
    fetch(
      'https://reqres.in/api/users',
    )
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error));
  }, []);

  return (
    <View style={{flex: 1, padding: 50}}>
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}>
        <Text
          style={{
            fontSize: 40,
            color: 'blue',
            textAlign: 'justify',
            paddingBottom: 10,
          }}>
          {' '}
          Our Developers{' '}
        </Text>
        <Text
         >
        </Text>

        <FlatList
          data={data.data}
          keyExtractor={({id}, index) => id}
          renderItem={({item}) => <View>
            <Image
            style={{ width: 350, height: 300 }} source={{ uri: item.avatar }}
        />
            <Text  style={{
            fontSize: 20,
            textAlign: 'center',
            paddingBottom: 10,
          }}>{item.first_name} {item.last_name}{'\n'}Email: {item.email}</Text></View>}
        />
      </View>
    </View>
  );
};