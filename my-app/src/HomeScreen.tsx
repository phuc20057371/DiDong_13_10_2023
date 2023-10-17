import * as React from 'react';
import { Button, View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RightOutlined from '@ant-design/icons/RightOutlined';

function HomeScreen({ navigation }: { navigation: any }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <View style={styles.view1}>
          <Image
            style={styles.tinyLogo}
            source={require('../assets/vs_blue.png')} />
        </View>
        <View style={styles.view2} >
          <Text style={styles.text1}>
            Điện Thoại Vsmart Joy 3 - Hàng chính hãng
          </Text>
          <View style={styles.rating}>
            <Image
              style={styles.star}
              source={require('../assets/star.png')} />
            <Image
              style={styles.star}
              source={require('../assets/star.png')} />
            <Image
              style={styles.star}
              source={require('../assets/star.png')} />
            <Image
              style={styles.star}
              source={require('../assets/star.png')} />
            <Image
              style={styles.star}
              source={require('../assets/star.png')} />
            <Text style={styles.danhgia}>
              (Xem 828 đánh giá)
            </Text>
          </View>
          <View style={styles.price}>
            <Text style={{
              fontWeight: 'bold',
              fontSize: 15,
            }}>
              1.790.000 đ
            </Text>
            <Text style={{
              textDecorationLine: 'line-through',
              color: 'gray',
              marginLeft: 10,
            }}>
              1.790.000 đ
            </Text>
          </View>
          <View style={{
            flex: 1,
            flexDirection: 'row',
            marginTop: 10,
          }}>
            <Text style={{
              color: 'red',
              fontWeight: 'bold',
            }}>
              Ở ĐÂU RẺ HƠN HOÀN TIỀN
            </Text>
            <Image
              style={styles.question}
              source={require('../assets/question.png')} />
          </View>
  
          <TouchableOpacity
            style={{
              flex: 1,
              flexDirection: 'row',
              backgroundColor: 'white',
              marginBottom: 30,
              borderRadius: 30,
              borderWidth: 1,
              borderColor: 'black',
              justifyContent: 'center',
            }}
            onPress={() => navigation.navigate('Details')}>
            <Text style={{
              color: 'black',
              fontSize: 16,
              alignSelf: 'center'
            }}>4 Màu- Chọn màu </Text>
            <RightOutlined style={{
              alignSelf: 'center',           
            }}/>
          </TouchableOpacity>
  
          <TouchableOpacity
            style={{ backgroundColor: 'red', padding: 10, borderRadius: 10 }}>
            <Text style={{
              color: 'white',
              fontSize: 18,
              fontWeight: 'bold',
              alignSelf: 'center'
            }}>Chọn mua</Text>
          </TouchableOpacity>
  
        </View>
      </View>
  
    );
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      //   backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
  
    },
    view1: {
      flex: 6,
      padding: 5,
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      //   backgroundColor: 'gray',
    },
    view2: {
      flex: 4,
      //   backgroundColor: 'pink',
    },
    tinyLogo: {
  
      width: 301,
      height: 361
  
  
    },
    rating: {
      flexDirection: "row"
    },
    star: {
  
      width: 30,
      height: 30,
  
    },
    danhgia: {
      fontSize: 18,
      alignContent: 'flex-end'
    },
    price: {
      gap: 20,
      flexDirection: 'row',
      alignContent: 'space-between'
    },
    text1: {
      alignSelf: 'flex-end',
      fontWeight: 'bold',
      fontSize: 18,
    },
    question: {
      padding: 10,
      height: 18,
      width: 18
    },
  
  
  
  });

  export default HomeScreen;