import React from 'react';
import Text from 'components/Text';
import View from 'components/View';
import {observer} from 'mobx-react-lite';
import {useAppInfo} from 'contexts/store';
import {Pressable} from 'react-native';
import {useTranslation} from 'react-i18next';
import {AppStackScreenProps} from 'navigation/index';

const TextMobx = observer(() => {
  const appInfo = useAppInfo();
  const lang = appInfo?.data.language;
  const theme = appInfo?.data.theme;
  return (
    <>
      <Text>{lang}</Text>
      <Text>{theme}</Text>
    </>
  );
});

const ButtonSetMox = () => {
  const appInfo = useAppInfo();
  const onPressHandle = () =>
    appInfo?.setAppInfo({
      language: 'en',
      theme: 'light',
    });
  const onPressHandleVN = () =>
    appInfo?.setAppInfo({
      language: 'vi',
      theme: 'dark',
    });

  const onPressRung = () =>
    appInfo?.setAppInfo({
      theme: 'forest',
    });

  return (
    <>
      <Pressable onPress={onPressHandle}>
        <Text>Change theme</Text>
      </Pressable>
      <Pressable onPress={onPressHandleVN}>
        <Text>Change theme black - vi</Text>
      </Pressable>
      <Pressable onPress={onPressRung}>
        <Text>Change theme rung </Text>
      </Pressable>
    </>
  );
};

const LangText = observer(() => {
  const {t} = useTranslation();
  return (
    <>
      <Text fw="900">{t('text.hello')}</Text>
    </>
  );
});

interface Props extends AppStackScreenProps<'DemoSetting'> {}

const DemoSettingScreen = ({navigation}: Props) => {
  return (
    <>
      <View flex={1} contentCenter itemCenter>
        <Text s={30} fw="800">
          Setting
        </Text>
        <TextMobx />
        <ButtonSetMox />
        <LangText />
        <Pressable onPress={() => navigation.navigate('Home')}>
          <Text>go Home</Text>
        </Pressable>
      </View>
    </>
  );
};

export default DemoSettingScreen;
