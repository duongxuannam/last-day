import React from 'react';
import {Pressable} from 'react-native';
import Text from 'components/Text';
import View from 'components/View';
import {observer} from 'mobx-react-lite';
import StoreProvider, {useProfile, useTime} from 'contexts/store';
import {store} from 'store/index';
import 'languages/i18n';
import {useTranslation} from 'react-i18next';

const TextMobx = observer(() => {
  const profile = useProfile();
  const name = profile.information.name;
  const age = profile.getAge;
  return (
    <>
      <Text>{name}</Text>
      <Text>{age}</Text>
    </>
  );
});

const TextMobxTime = observer(() => {
  const time = useTime();
  const current = time.currentTime;
  console.log('Log in Time');
  return (
    <>
      <Text fw="900">{current}</Text>
    </>
  );
});

const ButtonSetTimeMox = () => {
  const time = useTime();
  const onPressHandle = () =>
    time.setTime(new Date().getMilliseconds().toString());

  return (
    <Pressable onPress={onPressHandle}>
      <Text>Change time</Text>
    </Pressable>
  );
};

const ButtonSetMox = () => {
  const profile = useProfile();
  const onPressHandle = () => profile?.setName('Name');

  return (
    <Pressable onPress={onPressHandle}>
      <Text>Change name</Text>
    </Pressable>
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

const LangButton = () => {
  const {i18n} = useTranslation();
  const onPressHandle = () => i18n.changeLanguage('en');
  const onPressHandleVN = () => i18n.changeLanguage('vi');
  return (
    <>
      <Pressable onPress={onPressHandle}>
        <Text>Change ta</Text>
      </Pressable>
      <Pressable onPress={onPressHandleVN}>
        <Text>Change TV</Text>
      </Pressable>
    </>
  );
};

function App(): JSX.Element {
  return (
    <StoreProvider value={store}>
      <View flex={1} itemCenter contentCenter bg="pink">
        <Text s={30} cl={'black'} fw="800">
          hehe
        </Text>
        <TextMobxTime />
        <TextMobx />
        <ButtonSetMox />
        <ButtonSetTimeMox />
        <LangText />
        <LangButton />
      </View>
    </StoreProvider>
  );
}

export default App;
