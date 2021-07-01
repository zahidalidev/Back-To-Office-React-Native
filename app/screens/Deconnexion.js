import React from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import { Appbar } from 'react-native-paper';
import { RFPercentage } from 'react-native-responsive-fontsize';
import CalendarStrip from 'react-native-calendar-strip';

import colors from '../config/colors';
import moment from 'moment';

function Deconnexion(props) {


    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={colors.primary} />
            <Appbar style={{ elevation: 0, backgroundColor: colors.primary }} >
                <Appbar.Action onPress={() => props.navigation.openDrawer()} icon="menu" />
            </Appbar>

            <View style={{ flex: 1 }}>
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
                    style={{ height: 120, }}
                    calendarHeaderFormat={"MMM"}
                    showMonth={true}
                    // dayComponentHeight={50}
                    calendarColor={colors.primary}
                    calendarHeaderStyle={{ color: 'white', fontSize: 20 }}
                    dateNameStyle={{ fontSize: 20, marginTop: 10, color: colors.white }}
                    dateNumberStyle={{ flex: 1, color: 'white', fontSize: 18, marginBottom: 10, paddingLeft: 10, padding: 5, paddingRight: 10 }}
                    selectedDate={moment(new Date())}

                    // markedDates={
                    //     [
                    //         {
                    //             date: "2021-07-02T00:06:08.323Z",
                    //             dots: [
                    //                 {
                    //                     color: 'red', fontSize: 20, marginTop: 10,
                    //                     selectedColor: "red",
                    //                 },
                    //             ],
                    //         },

                    //     ]
                    // }
                    // highlightDateContainerStyle={{ backgroundColor: `#${(`#00000${(Math.random() * (1 << 24) | 0).toString(16)}`).slice(-6)}` }}
                    highlightDateNameStyle={{ fontSize: 18, marginTop: 10, color: colors.white }}
                    highlightDateNumberStyle={{ marginBottom: 15, backgroundColor: colors.white, fontSize: 18, paddingLeft: 10, padding: 5, paddingRight: 10, borderRadius: 100, color: colors.black }}
                    iconContainer={{ flex: 0.1 }}
                    iconStyle={{ tintColor: colors.white }}
                // iconStyle
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        // marginTop: Constants.statusBarHeight
    }
})

export default Deconnexion;