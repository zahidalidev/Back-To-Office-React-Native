import React, { useState } from 'react';
import { StyleSheet, View, StatusBar, Text, ScrollView, TouchableOpacity } from 'react-native';
import { Appbar } from 'react-native-paper';
import { RFPercentage } from 'react-native-responsive-fontsize';
import CalendarStrip from 'react-native-calendar-strip';
import moment from 'moment';

// components
import HomeCard from '../components/HomeCard';
import AppTextButton from '../components/common/AppTextButton';

// config
import colors from '../config/colors';

function Deconnexion(props) {
    const [currentComponent, setCurrentComponent] = useState("1er")
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
                style={{ height: 110, marginTop: -20 }}
                calendarHeaderFormat={"MMM"}
                showMonth={true}
                calendarColor={colors.primary}
                calendarHeaderStyle={{ color: 'white', fontSize: 20 }}
                dateNameStyle={{ fontSize: RFPercentage(2), marginTop: 10, color: colors.white }}
                dateNumberStyle={{ height: 50, flex: 1, color: 'white', fontSize: RFPercentage(2), marginBottom: 10, paddingLeft: 10, padding: 5, paddingRight: 10 }}
                selectedDate={moment(new Date())}
                highlightDateNameStyle={{ fontSize: RFPercentage(2), marginTop: 10, color: colors.white }}
                highlightDateNumberStyle={{ marginBottom: 10, backgroundColor: colors.white, fontSize: RFPercentage(2), paddingLeft: 10, padding: 5, paddingRight: 10, borderRadius: 100, color: colors.black }}
                iconContainer={{ flex: 0.1 }}
                iconStyle={{ tintColor: colors.white }}
            />

            <View style={{ marginTop: RFPercentage(3), flexDirection: "row", alignItems: "center", justifyContent: "space-evenly" }} >
                <TouchableOpacity activeOpacity={0.7} onPress={() => setCurrentComponent('1er')} >
                    <Text style={{ fontSize: RFPercentage(2.2), color: currentComponent == '1er' ? colors.grey : colors.mediumGrey, fontWeight: "bold" }} >1er étage</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.7} onPress={() => setCurrentComponent('2er')} >
                    <Text style={{ fontSize: RFPercentage(2.2), color: currentComponent == '2er' ? colors.grey : colors.mediumGrey, fontWeight: "bold" }} >2eme étage</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.7} onPress={() => setCurrentComponent('4er')} >
                    <Text style={{ fontSize: RFPercentage(2.2), color: currentComponent == '4er' ? colors.grey : colors.mediumGrey, fontWeight: "bold" }} >4eme étage</Text>
                </TouchableOpacity>
            </View>


            {/* Bottom cards */}
            <ScrollView>
                {
                    cardData.map((item, index) =>
                        <HomeCard key={index} index={index} showDetails={() => handleShowDetails(index)} data={item} />
                    )
                }

                {/* show button conditionally */}
                {
                    cardData.map((item, index) => {
                        return item.showDetails === true ?
                            <View key={index} style={{ marginBottom: RFPercentage(5), marginTop: RFPercentage(2), width: "100%", alignItems: "center", justifyContent: "center" }} >
                                <AppTextButton title="Reserver" onSubmit={() => props.navigation.navigate('Reservation')} />
                            </View> : null
                    }
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