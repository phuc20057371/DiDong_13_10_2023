import * as React from 'react';
import { useState } from 'react';
import { Button, View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RightOutlined from '@ant-design/icons/RightOutlined';



function DetailsScreen( { navigation }: { navigation: any }) {
    
    
    return (

        <View style={styles.container}>
            <View style={styles.view1}>
                <Image
                    style={styles.tinyLogo}
                    source={require('../assets/vs_blue.png')}
                 />
                <Text style={{
                    fontSize: 20,
                    marginRight: 60,
                }}>
                    Điện Thoại Vsmart Joy 3
                    Hàng chính hãng
                </Text>
            </View>

            {/* <Button
                title="Go to Details... again"
                onPress={() => navigation.navigate('Details')}
            /> */}

            <View style={styles.view2} >
                <Text style={{
                    flex: 0.5,

                    fontSize: 20,
                }}>
                    Chọn một màu bên dưới:
                </Text>
                <TouchableOpacity
                    style={{
                        flex: 1,
                        flexDirection: 'row',
                        backgroundColor: '#C5F1FB',
                        justifyContent: 'center',
                        width: 85,
                        height: 80,
                        alignSelf: 'center',
                        margin: 10,
                    }}
                    onPress={() => navigation.navigate('Details')}>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{
                        flex: 1,
                        flexDirection: 'row',
                        backgroundColor: '#F30D0D',
                        justifyContent: 'center',
                        width: 85,
                        height: 80,
                        alignSelf: 'center',
                        margin: 10,
                    }}
                    onPress={() => navigation.navigate('Details')}>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{
                        flex: 1,
                        flexDirection: 'row',
                        backgroundColor: '#000000',
                        justifyContent: 'center',
                        width: 85,
                        height: 80,
                        alignSelf: 'center',
                        margin: 10,
                    }}
                    onPress={() => navigation.navigate('Details')}>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{
                        flex: 1,
                        flexDirection: 'row',
                        backgroundColor: '#234896',
                        justifyContent: 'center',
                        width: 85,
                        height: 80,
                        alignSelf: 'center',
                        margin: 10,
                    }}
                    onPress={() => navigation.navigate('Details')}>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{
                        backgroundColor: '#1952E2',
                        margin: 20, padding: 10,
                        borderRadius: 10,


                    }}
                    onPress={() => navigation.goBack()}>
                    <Text style={{
                        color: 'white',
                        fontSize: 18,
                        fontWeight: 'bold',
                        alignSelf: 'center'
                    }}>Chọn mua</Text>
                </TouchableOpacity>

            </View>
            {/* <Button title="Go to Home" onPress={() => navigation.navigate('Home')} /> */}

        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 10,

    },
    view1: {
        flex: 2.5,
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        //   backgroundColor: 'gray',
    },
    view2: {
        flex: 7.5,

        backgroundColor: '#C4C4C4',
    },
    tinyLogo: {

        width: 112,
        height: 132


    },
});

export default DetailsScreen;