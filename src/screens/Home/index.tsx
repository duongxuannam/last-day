import React from 'react';
import Text from 'components/Text';
import View from 'components/View';
import {Pressable} from 'react-native';
import {AppStackScreenProps} from 'navigation/index';

interface Props extends AppStackScreenProps<'Home'> {}

const HomeScreen = ({navigation}: Props) => {
  return (
    <>
      <View flex={1} contentCenter itemCenter>
        <Text s={30} fw="500" f="BentonSans-Book">
          The future is in our hands to shape.
        </Text>
        <Text s={30} fw="500" f="BentonSans-Black">
          The future is in our hands to shape.
        </Text>
        <Pressable onPress={() => navigation.navigate('DemoSetting')}>
          <Text>go setting</Text>
        </Pressable>
        <Pressable onPress={() => navigation.navigate('DemoTab')}>
          <Text>go tab</Text>
        </Pressable>
        <Pressable onPress={() => navigation.navigate('PuzzleGame')}>
          <Text>go puzzle</Text>
        </Pressable>
      </View>
    </>
  );
};

export default HomeScreen;
