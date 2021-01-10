import React from 'react';
import {View, Text} from 'react-native';


const Order = () => {

  const [data, setData]=useState([]);

  useEffect(()=>{
    fetch(URL)
    .then((response)=> response.json())
    .then((json)=> {
      setData(json)
    })
    .catch((error) => Alert.alert('Error','Something IS Wrong!'))
  }, []);

  
  return (
    <View>
      <Text>
        Order.js
      </Text>
    </View>
  );
};

export default Order;
