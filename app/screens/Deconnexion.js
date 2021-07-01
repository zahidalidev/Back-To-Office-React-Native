import React from 'react';
import { StyleSheet, View, StatusBar, Text, ScrollView } from 'react-native';
import { Appbar } from 'react-native-paper';
import { RFPercentage } from 'react-native-responsive-fontsize';
import CalendarStrip from 'react-native-calendar-strip';
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons"

import colors from '../config/colors';
import moment from 'moment';
import HomeCard from '../components/HomeCard';
import { useState } from 'react';

function Deconnexion(props) {

    const [cardData, setCardData] = useState([
        {
            id: 0,
            title: "Salle 1",
            places: "4 places dispoibles",
            showDetails: false,
            details: [
                {
                    name1: "cancel",
                    name2: "check",
                    name3: "cross",
                },
                {
                    name1: "check",
                    name2: "cross",
                    name3: "cross",
                },
                {
                    name1: "check",
                    name2: "cancel",
                    name3: "check",
                },
                {
                    name1: "cancel",
                    name2: "check",
                    name3: "cross",
                },
            ]
        },
        {
            id: 0,
            title: "Salle 2",
            places: "7 places dispoibles",
            showDetails: false,
            details: [
                {
                    name1: "cancel",
                    name2: "cross",
                    name3: "cancel",
                },
                {
                    name1: "cancel",
                    name2: "check",
                    name3: "cross",
                },
                {
                    name1: "check",
                    name2: "cross",
                    name3: "cross",
                },
                {
                    name1: "check",
                    name2: "cancel",
                    name3: "check",
                },
                {
                    name1: "cancel",
                    name2: "check",
                    name3: "cross",
                },
                {
                    name1: "check",
                    name2: "cancel",
                    name3: "check",
                },
                {
                    name1: "cancel",
                    name2: "check",
                    name3: "cross",
                },
            ]
        },
    ])

    const handleShowDetails = index => {
        let tempDetails = [...cardData];
        tempDetails[index].showDetails = !tempDetails[index].showDetails;
        setCardData(tempDetails)
    }

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={colors.primary} />
            <Appbar style={{ elevation: 0, backgroundColor: colors.primary }} >
                <Appbar.Action onPress={() => props.navigation.openDrawer()} icon="menu" />
            </Appbar>

            <CalendarStrip
                locale={
                    {
                        name: "fr",
                        config: {
                            months: 'Janvier_Février_Mars_Avril_Mai_Jui_Juillet_Août_Septembre_Octobre_Novembre_Décembre'.split(
                                '_'
                            ),
                            monthsShort: 'Janv_Févr_Mars_Avr_Mai_Juin_Juil_Août_Sept_Oct_Nov_Déc'.split(
                                '_'
                            ),
                            weekdays: 'Dimanche_Lundi_Mardi_Mercredi_Jeudi_Vendredi_Samedi'.split('_'),
                            weekdaysShort: 'D_L_M_M_J_V_S'.split('_'),
                            weekdaysMin: 'DW_LE_Me_Mr_J_tV_yS'.split('_'),
                        }
                    }
                }
                scrollable
                style={{ height: 100, marginTop: -20 }}
                calendarHeaderFormat={"MMM"}
                showMonth={true}
                // dayComponentHeight={50}
                calendarColor={colors.primary}
                calendarHeaderStyle={{ color: 'white', fontSize: 20 }}
                dateNameStyle={{ fontSize: 20, marginTop: 10, color: colors.white }}
                dateNumberStyle={{ flex: 1, color: 'white', fontSize: 18, marginBottom: 10, paddingLeft: 10, padding: 5, paddingRight: 10 }}
                selectedDate={moment(new Date())}
                highlightDateNameStyle={{ fontSize: 18, marginTop: 10, color: colors.white }}
                highlightDateNumberStyle={{ marginBottom: 15, backgroundColor: colors.white, fontSize: 18, paddingLeft: 10, padding: 5, paddingRight: 10, borderRadius: 100, color: colors.black }}
                iconContainer={{ flex: 0.1 }}
                iconStyle={{ tintColor: colors.white }}
            />

            <View style={{ marginTop: RFPercentage(2), flexDirection: "row", alignItems: "center", justifyContent: "space-evenly" }} >
                <Text style={{ fontSize: RFPercentage(2.2), color: colors.black }} >1er etage</Text>
                <Text style={{ fontSize: RFPercentage(2.2), color: colors.grey }} >2eme etage</Text>
                <Text style={{ fontSize: RFPercentage(2.2), color: colors.grey }} >4eme etage</Text>
            </View>


            {/* Bottom cards */}
            <ScrollView>
                {
                    cardData.map((item, index) =>
                        <HomeCard key={index} index={index} showDetails={() => handleShowDetails(index)} data={item} />
                    )
                }
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white
        // marginTop: Constants.statusBarHeight
    }
})

export default Deconnexion;