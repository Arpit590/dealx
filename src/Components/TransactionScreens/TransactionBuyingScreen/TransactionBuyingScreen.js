import React, {useState} from 'react'
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native'
import { colors, fontSize, fontFamily} from '../../../commonStyle'
import TransactionHeader from '../TransactionHeader'
import TransactionOptions from '../TransactionOptions'

const TransactionBuyingScreen = () => {

    const [active1, setActive1] = useState(true);
    const [active2, setActive2] = useState(false);
    const [active3, setActive3] = useState(false);


    const activeButton1 = ()=>{
        setActive1(true);
        setActive2(false);
        setActive3(false);
    }
    const activeButton2 = ()=>{
        setActive1(false);
        setActive2(true);
        setActive3(false);
    }
    const activeButton3 = ()=>{
        setActive1(false);
        setActive2(false);
        setActive3(true); 
    }

    return (
        <View style={styles.screen}>
            <View style={styles.container}>
                <TransactionHeader headingText="Transactions" searchView={true} />
                <View style={styles.container1}>
                    <TouchableOpacity activeOpacity={0.8} onPress={activeButton1} style={active1 ? styles.activeOption : styles.option}
                    >
                        <Text style={active1 ? styles.activeText : styles.text}>My Earnings</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.8} onPress={activeButton2} style={active2 ? styles.activeOption : styles.option}>
                        <Text style={active2 ? styles.activeText : styles.text}>Puchase Orders</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.8} onPress={activeButton3} style={active3 ? styles.activeOption : styles.option}>
                        <Text style={active3 ? styles.activeText : styles.text}>Invoices</Text>
                    </TouchableOpacity>
                </View>
                {active1 &&
                <View style={styles.button}>
                    <TransactionOptions
                    size={fontSize.h1}
                    filterText="Buying"
                    text="Total Success Fee"
                    price="100,000"
                    priceColor={colors.primary}
                    />
                    <TransactionOptions
                    size={fontSize.h1}
                    filterText="Buying"
                    text="Success Fee Paid"
                    price="50,000"
                    priceColor="#27AE60"
                    />
                    <TransactionOptions
                    size={fontSize.h1}
                    filterText="Buying"
                    text="Success Fee Not Paid"
                    price="50,000"
                    priceColor="#F2994A"
                    />
                </View>}
                {active2 &&
                <View style={styles.comingSoon}>
                    <Text style={{fontSize:fontSize.h1, fontFamily:fontFamily.secondaryBold, color:colors.textPrimary}}>Coming Soon!</Text>
                </View>}
                {active3 &&
                <View style={styles.comingSoon}>
                    <Text style={{fontSize:fontSize.h1, fontFamily:fontFamily.secondaryBold, color:colors.textPrimary}}>Coming Soon!</Text>
                </View>}
            </View>
        </View>
    )
}

export default TransactionBuyingScreen

const styles = StyleSheet.create({
    screen:{
        alignItems:"center",
        backgroundColor: colors.screen,
        flex:1,
        width:"100%"
    },
    container:{
        alignItems:"center",
        width:"100%"
    },
    button:{
        flex:1,
        marginVertical:12,
        alignItems:"center",
        flexDirection:"column"
    },
    container1:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
        marginVertical:12,
    },
    activeOption:{
        paddingHorizontal:22,
        paddingVertical:10,
        backgroundColor:colors.primary,
        borderWidth:1,
        borderColor:colors.primary
    },
    option:{
        paddingHorizontal:22,
        paddingVertical:10,
        backgroundColor:colors.secondary,
        borderWidth:1,
        borderColor:colors.borderColor
    },
    activeText:{
        color:"#FEFEFE",
         fontSize:fontSize.h5,
         fontWeight:"400"
    },
    text:{
        fontSize:fontSize.h5,
        color: "#1A1A1A",
        fontWeight:"400"
    },
    comingSoon:{
        alignItems:"center",
        justifyContent:"center",
        marginTop:50
    }
})
