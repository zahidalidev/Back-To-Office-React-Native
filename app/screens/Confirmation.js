import React from 'react';
import { StyleSheet, View, StatusBar, Text, Switch } from 'react-native';

import { Appbar } from "react-native-paper"
import { RFPercentage } from 'react-native-responsive-fontsize';

// components
import AppTextButton from '../components/common/AppTextButton';

//config
import colors from '../config/colors';

function Confirmation(props) {

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={colors.primary} />
            <Appbar style={{ elevation: 0, backgroundColor: colors.primary }} >
                <Appbar.Action onPress={() => props.navigation.openDrawer()} icon="menu" />
                <Appbar.Content style={{ marginLeft: RFPercentage(11) }} titleStyle={{ fontSize: RFPercentage(3) }} title="Confirmation" />
            </Appbar>

            <View style={{ flex: 1, width: "100%", flexDirection: "column", justifyContent: "center", alignItems: 'center' }} >
                <View style={{ marginTop: RFPercentage(-6), flexDirection: 'row', width: "75%", justifyContent: "center", alignItems: "center" }} >
                    <Text style={{ color: colors.primary, fontSize: RFPercentage(2.8), fontWeight: "bold" }} >Votre réservation est bien confirmée</Text>
                </View>
                <View style={{ marginTop: RFPercentage(5), flexDirection: 'row', width: "75%", justifyContent: "center", alignItems: "center" }} >
                    <Text style={{ color: colors.grey, fontSize: RFPercentage(3.2), fontWeight: "bold" }} >Lundi 19 Avril</Text>
                </View>
                <View style={{ marginTop: RFPercentage(2), flexDirection: 'row', width: "75%", justifyContent: "center", alignItems: "center" }} >
                    <Text style={{ color: colors.grey, fontSize: RFPercentage(3.2), fontWeight: "bold" }} >Open Space 1</Text>
                </View>
                <View style={{ marginTop: RFPercentage(2), flexDirection: 'row', width: "75%", justifyContent: "center", alignItems: "center" }} >
                    <Text style={{ color: colors.grey, fontSize: RFPercentage(2.2) }} >1er étage</Text>
                </View>
                <View style={{ marginTop: RFPercentage(2), flexDirection: 'row', width: "75%", justifyContent: "center", alignItems: "center" }} >
                    <Text style={{ color: colors.grey, fontSize: RFPercentage(2.2) }} >Toute la journée</Text>
                </View>
            </View>

            <View style={{ position: "absolute", bottom: RFPercentage(3), marginTop: RFPercentage(2), width: "100%", alignItems: "center", justifyContent: "center" }} >
                <AppTextButton backgroundColor={colors.grey} title="Annuler ma réservation" onSubmit={() => props.navigation.navigate('Annulation')} />
                <View style={{ marginTop: RFPercentage(3), width: "100%", alignItems: "center", justifyContent: "center" }} >
                    <AppTextButton title="Télécharger mon attestion" onSubmit={() => console.log('Télécharger mon attestion pressed')} />
                </View>
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

export default Confirmation;