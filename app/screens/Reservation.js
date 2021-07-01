import React from 'react';
import { useState } from 'react';
import { StyleSheet, View, StatusBar, Text, Switch } from 'react-native';
import { Appbar, RadioButton } from "react-native-paper"
import { RFPercentage } from 'react-native-responsive-fontsize';

// components
import AppTextButton from '../components/common/AppTextButton';

//config
import colors from '../config/colors';

function Reservation(props) {
    const [journee, setJournee] = useState(false);
    const [radioButtonActive, setRadioButtonActive] = useState('matin');

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={colors.primary} />
            <Appbar style={{ elevation: 0, backgroundColor: colors.primary }} >
                <Appbar.Action onPress={() => props.navigation.openDrawer()} icon="menu" />
                <Appbar.Content style={{ marginLeft: RFPercentage(11) }} titleStyle={{ fontSize: RFPercentage(3) }} title="Reservation" />
            </Appbar>

            <View style={{ width: "100%", flexDirection: "column", justifyContent: "center", alignItems: 'center' }} >
                <View style={{ marginTop: RFPercentage(8), flexDirection: 'row', width: "75%", justifyContent: "space-between", alignItems: "center" }} >
                    <Text style={{ color: colors.primary, fontSize: RFPercentage(2.8) }} >Date</Text>
                    <Text style={{ color: colors.primary, fontSize: RFPercentage(2.8) }} >7 Mai 2021</Text>
                </View>
                <View style={{ marginTop: RFPercentage(2), flexDirection: 'row', width: "75%", justifyContent: "space-between", alignItems: "center" }} >
                    <Text style={{ color: colors.primary, fontSize: RFPercentage(2.8) }} >Salle</Text>
                    <View style={{ flexDirection: "row" }} >
                        <Text style={{ color: colors.primary, fontSize: RFPercentage(2.8) }} >1 </Text>
                        <Text style={{ color: colors.grey, fontSize: RFPercentage(2.8) }} >- 1er etage</Text>
                    </View>
                </View>
                <View style={{ marginTop: RFPercentage(2), flexDirection: 'row', width: "75%", justifyContent: "space-between", alignItems: "center" }} >
                    <Text style={{ color: colors.primary, fontSize: RFPercentage(2.8) }} >Journée entière</Text>
                    <Switch thumbColor={journee ? colors.primary : colors.white} value={journee} onChange={() => setJournee(!journee)} />
                </View>

                <View style={{ marginTop: RFPercentage(2), flexDirection: 'row', width: "75%", justifyContent: "space-between", alignItems: "center" }} >
                    <Text style={{ color: colors.primary, fontSize: RFPercentage(2.8) }} >Matin</Text>
                    <RadioButton onPress={() => setRadioButtonActive('matin')} status={radioButtonActive === 'matin' ? "checked" : "unchecked"} color={colors.primary} />
                </View>

                <View style={{ marginTop: RFPercentage(1), flexDirection: 'row', width: "75%", justifyContent: "space-between", alignItems: "center" }} >
                    <Text style={{ color: colors.primary, fontSize: RFPercentage(2.8) }} >Après-midi</Text>
                    <RadioButton onPress={() => setRadioButtonActive('apres')} status={radioButtonActive === 'apres' ? "checked" : "unchecked"} color={colors.primary} />
                </View>
            </View>

            <View style={{ position: "absolute", bottom: RFPercentage(3), marginTop: RFPercentage(2), width: "100%", alignItems: "center", justifyContent: "center" }} >
                <AppTextButton title="Valider mon crénau" onSubmit={() => props.navigation.navigate('Confirmation')} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white
    }
})

export default Reservation;