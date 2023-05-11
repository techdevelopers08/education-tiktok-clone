import React, { useEffect, useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import Clock from '../../assets/clock.svg'
import Search from "../../assets/search.svg";
import { STRINGS } from "../utils/string";

const Header = (props) => {
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds(seconds => seconds + 1);
        }, 1000);
        return () => clearInterval(interval);

    }, [props?.activeIndex]);

    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    const timerDisplay = `${minutes < 10 ? '0' : ''}${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;

    return (
        <View style={{ ...style.mainView, paddingTop: 8 }}>
            <View style={{ ...style.middleView, marginTop: 6, marginLeft: 16 }}>
                <Clock width={24} height={24} />

                <Text style={style.text}>
                    {timerDisplay}
                </Text>
            </View>
            <View style={{ ...style.middleView, justifyContent: 'center', marginTop: 6, flex: 2 }}>
                <View style={{ ...style.lineView, marginRight: 10 }}>
                    <TouchableOpacity onPress={() => props?.setFollowingOrForyou(true)}>
                        <Text style={{ ...style.text, fontWeight: props?.followingOrForyou ? 'bold' : '400' }}>
                            {STRINGS.following}
                        </Text>
                        {
                            props?.followingOrForyou &&
                            <View style={style.line}>
                            </View>}
                    </TouchableOpacity>
                </View>
                <TouchableOpacity onPress={() => props?.setFollowingOrForyou(false)}>
                    <Text style={{ ...style.text, fontWeight: !props?.followingOrForyou ? 'bold' : '400' }}>
                        {STRINGS.foryou}
                    </Text>
                    {
                        !props?.followingOrForyou && <View style={style.line}>
                        </View>
                    }

                </TouchableOpacity>
            </View>
            <View style={style.searchView}>
                <TouchableOpacity style={{ marginRight: 10 }} >
                    <Search width={24} height={24} />
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default Header;
const style = StyleSheet.create({
    mainView: {
        flexDirection: 'row',
        width: '100%',
        backgroundColor: '#011E29',
        height: '7%',
        justifyContent: "space-between"
    },
    image: {
        height: 19,
        width: 20,
        marginRight: 4,
        marginTop: 5,
        tintColor: 'white'
    },
    text: {
        color: 'white',
        fontWeight: '700',
        fontSize: 18,
        marginLeft: 10
    },
    middleView: {
        flexDirection: 'row',
        flex: 0.5,
    },
    line: {
        width: 30,
        height: 4,
        backgroundColor: 'white',
        flexDirection: 'column',
        alignSelf: 'center'
    },
    lineView: {
        flexDirection: 'column', alignItems: 'center', width: '36%'
    },
    searchView: {
        marginTop: 6,
        flex: 0.5,
        alignItems: "flex-end",
    }
})