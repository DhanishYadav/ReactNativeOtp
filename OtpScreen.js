import { View, Text, StyleSheet, Image, TextInput } from 'react-native'
import React, { useState, useEffect, useRef } from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native';
const OtpScreen = () => {
    const navigation = useNavigation();
    const edit1 = useRef();
    const edit2 = useRef();
    const edit3 = useRef();
    const edit4 = useRef();
    const edit5 = useRef();
    const edit6 = useRef();
    const [f1, setf1] = useState("");
    const [f2, setf2] = useState("");
    const [f3, setf3] = useState("");
    const [f4, setf4] = useState("");
    const [f5, setf5] = useState("");
    const [f6, setf6] = useState("");
    const [timer, setTimer] = useState(30);
    const Submit = () => {
        navigation.navigate("PanScreen")
    }
    useEffect(() => {
        const interval = setInterval(() => {
            setTimer((prevTimer) => {
                if (prevTimer === 1) {
                    clearInterval(interval);
                }
                return prevTimer - 1;
            });
        }, 1000);

        return () => clearInterval(interval);
    }, []);
    return (
        <View style={styles.container}>
            <View style={{ backgroundColor: '#ffffff', }}>
                <View
                    style={{
                        backgroundColor: '#f2612b', padding: 50,
                        borderBottomLeftRadius: 60
                    }}>
                    <View
                        style={{
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                        <Image
                            style={{
                                width: 100, height: 100,
                                resizeMode: 'contain', borderRadius: 10
                            }}
                            source={require('../../assets/images/appicon.png')} />
                    </View>
                </View>
            </View>
            <View style={{ backgroundColor: '#f2612b', }}>
                <View style={{
                    justifyContent: 'center',
                    backgroundColor: '#fff',
                    paddingHorizontal: 30,
                    borderTopRightRadius: 60,

                }}>
                    <View style={styles.spacing_big}></View>

                    <View style={{ flexDirection: "row", justifyContent: "space-between", marginHorizontal: 5 }}>
                        <Text style={styles.label}>Verify One Time Password</Text>
                        <Text style={styles.label}>2/9</Text>
                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", marginHorizontal: 5 }}>
                        <Text style={styles.otpText}>Please Enter the OTP sent To</Text>
                        <Text style={styles.otp}>8303730327</Text>
                    </View>
                    <View style={styles.otpView}>
                        <TextInput ref={edit1} style={[styles.inputView, { borderColor: f1.length >= 1 ? "#f2612b" : "#003990" }]}
                            keyboardType='number-pad' maxLength={1}
                            onChangeText={txt => {
                                setf1(txt)
                                if (txt.length >= 1) {
                                    edit2.current.focus();
                                }
                            }} cursorColor="#003990"
                            value={f1}
                        />
                        <TextInput ref={edit2} style={[styles.inputView, { borderColor: f2.length >= 1 ? "#f2612b" : "#003990" }]}
                            keyboardType='number-pad' maxLength={1} onChangeText={txt => {
                                setf2(txt)
                                if (txt.length >= 1) {
                                    edit3.current.focus();
                                }
                                else if (txt.length < 1) {
                                    edit1.current.focus();
                                }
                            }} cursorColor="#003990"
                            value={f2}
                        />
                        <TextInput ref={edit3} style={[styles.inputView, { borderColor: f3.length >= 1 ? "#f2612b" : "#003990" }]}
                            keyboardType='number-pad' maxLength={1}
                            value={f3}
                            onChangeText={txt => {
                                setf3(txt)
                                if (txt.length >= 1) {
                                    edit4.current.focus();
                                }
                                else if (txt.length < 1) {
                                    edit2.current.focus();
                                }
                            }} cursorColor="#003990" />
                        <TextInput ref={edit4} style={[styles.inputView, { borderColor: f4.length >= 1 ? "#f2612b" : "#003990" }]}
                            keyboardType='number-pad' maxLength={1}
                            value={f4}
                            onChangeText={txt => {
                                setf4(txt)
                                if (txt.length >= 1) {
                                    edit5.current.focus();
                                }
                                else if (txt.length < 1) {
                                    edit3.current.focus();
                                }
                            }}
                            cursorColor="#003990" />
                        <TextInput ref={edit5} style={[styles.inputView, { borderColor: f5.length >= 1 ? "#f2612b" : "#003990" }]}
                            keyboardType='number-pad' maxLength={1}
                            value={f5}
                            onChangeText={txt => {
                                setf5(txt)
                                if (txt.length >= 1) {
                                    edit6.current.focus();
                                }
                                else if (txt.length < 1) {
                                    edit4.current.focus();
                                }
                            }}
                            cursorColor="#003990" />
                        <TextInput ref={edit6} style={[styles.inputView, { borderColor: f6.length >= 1 ? "#f2612b" : "#003990" }]}
                            keyboardType='number-pad'
                            maxLength={1} cursorColor="#003990"
                            value={f6}
                            onChangeText={txt => {
                                setf6(txt)
                                if (txt.length >= 1) {
                                    edit6.current.focus();
                                }
                                else if (txt.length < 1) {
                                    edit5.current.focus();
                                }
                            }}
                        />

                    </View>
                    <View style={styles.spacing}></View>
                    <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
                        <Text style={styles.text}>Resend OTP : {timer}s </Text>
                    </View>
                    <View style={{ flexDirection: "row" }}>

                        <View
                            style={[styles.submitStyle, { backgroundColor: f1 !== "" && f2 !== "" && f3 !== "" && f4 !== "" && f5 !== "" && f6 !== "" ? "#003990" : "gray" }]}>
                            <TouchableOpacity onPress={Submit}
                                disabled={f1 !== "" && f2 !== "" && f3 !== "" && f4 !== "" && f5 !== "" && f6 !== "" ? false : true}
                            >
                                <Text style={{ color: "white", fontSize: 18, fontWeight: "800" }}>SUBMIT</Text>
                            </TouchableOpacity>

                        </View>

                    </View>
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    label: {
        fontWeight: '800',
        fontSize: 17,
        color: '#003990',
        marginVertical: 6,
        marginTop: 11
    },
    otp: {
        fontWeight: '800',
        fontSize: 15,
        color: '#003990',
    },
    otpText: {
        fontWeight: '500',
        fontSize: 16,
        color: 'gray',
        marginRight: 5
    },
    text: {
        fontWeight: '700',
        fontSize: 14,
        color: 'gray',
        marginVertical: 10,
        alignSelf: "flex-end"
    },
    input: {
        marginVertical: 6,
        height: 50,
        backgroundColor: "white",
        color: "#5DADE2",
        width: "100%",
        elevation: 10,
        shadowColor: "#5DADE2",
        shadowOffset: {
            width: 5,
            height: 10,
        },
        shadowOpacity: 9,
        shadowRadius: 20,
        borderRadius: 10,
        paddingLeft: 10,
    },
    submitStyle: {
        margin: 10,
        backgroundColor: '#003990',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        width: "90%",
        height: 45
    },
    otpView: {
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        marginTop: 10
    },
    inputView: {
        width: 50,
        height: 50,
        borderWidth: .8,
        borderRadius: 8,
        marginLeft: 10,
        textAlign: "center",
        fontSize: 18,
        fontWeight: "800"
    }
})
export default OtpScreen
