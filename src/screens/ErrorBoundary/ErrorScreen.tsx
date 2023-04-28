import React from 'react';
import { Button, StyleSheet } from 'react-native';
import Text from 'src/components/Text';
import View from 'src/components/View';

type Props = {
    resetError: () => void;
};

const ErrorScreen: React.FC<Props> = ({ resetError }) => {
    return (
        <View style={styles.flexCenter}>
            <View style={styles.flexCenter}>
                <Text style={styles.errorText}>An error occurred...</Text>
            </View>
            <Button
                color={'darkslateblue'}
                onPress={resetError}
                title="Go home"
            />
        </View>
    );
};

export default ErrorScreen;

const styles = StyleSheet.create({
    flexCenter: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#E5E5E5',
    },
    errorText: {
        color: 'red',
        textAlign: 'center',
        fontSize: 32,
    },
});
