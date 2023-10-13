import { StatusBar } from 'expo-status-bar';
import { 
    StyleSheet,
    Text,
    View,
    Image,
    Button,
} from 'react-native';

export default function App() {
    return ( <
        View style = { styles.container } >
        <View style = { styles.view1 } >
            <Image
                style={styles.tinyLogo}
                source={require('./assets/vs_blue.png')} />
   
        </View> 
        <View style = { styles.view2 } >
            <Text style={styles.text1}>
                Điện Thoại Vsmart Joy 3 - Hàng chính hãng
            </Text>
            <View style={styles.rating}>
                <Image
                    style={styles.star}
                    source={require('./assets/star.png')} />
                <Image
                    style={styles.star}
                    source={require('./assets/star.png')} />
                <Image
                    style={styles.star}
                    source={require('./assets/star.png')} />
                <Image
                    style={styles.star}
                    source={require('./assets/star.png')} />
                <Image
                    style={styles.star}
                    source={require('./assets/star.png')} />
                <Text style={styles.danhgia}>
                    (Xem 828 đánh giá)
                </Text>
            </View>
            <View style={styles.price}>
                <Text style={{
                    
                }}>
                    1.790.000 đ
                </Text>
                <Text>
                    1.790.000 đ
                </Text>
            </View>
            <View style={{
                flex:1,
                flexDirection: 'row',
                backgroundColor: 'green'
            }}>
                <Text style={{
                    color:'red',
                    fontSize:'18px'
                }}>
                    Ở ĐÂU RẺ HƠN HOÀN TIỀN
                </Text>
                <Image
                    style={styles.question}
                    source={require('./assets/question.png')} />
            </View>
            <View style={{
                flex:1,
                justifyContent:'space-between'
            }}>
                <Button 
                    title='4 MÀU-CHỌN MÀU'
                    color=''
                    style={{
                        color:'black'
                    }}
                >
                    
                </Button>
                <Button 
                    title='CHON MUA'
                    color='red'
                
                >
                    
                </Button>
            </View>
         </View> 
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',

    },
    view1: {
        flex:1,
        padding:'5px',
        alignItems:'flex-start',
        justifyContent:'flex-start',
        backgroundColor: 'gray',
    },
    view2: {
        flex:1,
        backgroundColor: 'pink',
    },
    tinyLogo:{
        
        width: 350,
        height: 300,

    },
    rating: {
        flexDirection:"row"
    },
    star:{
        
        width: 30,
        height: 30,

    },
    danhgia :{
        fontSize:'18px',
        alignContent:'flex-end'
    },
    price:{
        flexDirection:'row',
        alignContent:'space-between'
    },
    text1:{
        alignSelf:'flex-end',
        fontWeight:'bold',
        fontSize: '18px'
    },
    question:{
        padding:10,
        height: 18,
        width: 18
    }


});