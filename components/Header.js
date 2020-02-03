import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const TEXT_HEADER = 'Memory Game';

const STYLE = {
    HEADER: {
        flex: 1,
        flexDirection: 'column',
        alignSelf: 'stretch',
        paddingTop: 30,
        paddingBottom: 5,
        backgroundColor: '#f3f3f3'
    },
    HEADER_TEXT: {
        fontWeight: 'bold',
        fontSize: 17,
        textAlign: 'center'
    }
};

export const Header = () => {
    return (
        <View style={STYLE.HEADER}>
            <Text style={STYLE.HEADER_TEXT}>
                {TEXT_HEADER}
            </Text>
        </View>
    )
};
