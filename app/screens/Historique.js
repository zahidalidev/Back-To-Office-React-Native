import React, { useState } from 'react';
import { StyleSheet, View, StatusBar, Text, TouchableOpacity } from 'react-native';
import { Appbar } from "react-native-paper"
import { RFPercentage } from 'react-native-responsive-fontsize';

// components
import AppTextButton from '../components/common/AppTextButton';
import HostoriqueCard from '../components/HostoriqueCard';


//config
import colors from '../config/colors';

function Historique(props) {
    const [currentComponent, setCurrentComponent] = useState('venir')

    const [data, setData] = useState([
        {
            id: 0,
            date: "Jeudi 24 Juin",
            title: "Salle 1",
            subTitle: "Matin",
            description: '1er étage'
        },
        {
            id: 1,
            date: "Mardi 08 Juin",
            title: "Salle 2",
            subTitle: "journée",
            description: '2eme étage'
        },
        {
            id: 2,
            date: "Laundi 30 Mai",
            title: "Salle 2",
            subTitle: "journée",
            description: '4eme étage'
        },
    ])

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={colors.primary} />
            <Appbar style={{ elevation: 0, backgroundColor: colors.primary }} >
                <Appbar.Action onPress={() => props.navigation.openDrawer()} icon="menu" />
                <Appbar.Content style={{ marginLeft: RFPercentage(11) }} titleStyle={{ fontSize: RFPercentage(3) }} title="Historique" />
            </Appbar>

            <View style={{ width: "100%", flexDirection: "column", justifyContent: "center", alignItems: 'center' }} >
                <View style={{ marginTop: RFPercentage(8), flexDirection: 'row', width: "40%", justifyContent: "space-between", alignItems: "center" }} >
                    <TouchableOpacity activeOpacity={0.6} onPress={() => setCurrentComponent('venir')} >
                        <Text style={{ color: currentComponent === 'venir' ? colors.primary : colors.mediumGrey, fontWeight: "bold", fontSize: RFPercentage(2.8) }} >A venir</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.6} onPress={() => setCurrentComponent('passe')} >
                        <Text style={{ color: currentComponent === 'passe' ? colors.primary : colors.mediumGrey, fontWeight: "bold", fontSize: RFPercentage(2.8) }} >Passé</Text>
                    </TouchableOpacity>
                </View>
            </View>

            {
                data.map((item, index) =>
                    <HostoriqueCard key={index} data={item} index={index} />
                )
            }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white
    }
})

export default Historique;