import React, { JSX, type ReactNode } from 'react';
import { View } from 'react-native';

interface ThemeWrapperProps {
    children: ReactNode;
}

export const ThemeWrapper = ({ children }: ThemeWrapperProps): JSX.Element => {
    return (
        <View className={'flex-1 bg-black/100'}>
            {children}
        </View>
    );
};

export default ThemeWrapper;