import type { CompositeScreenProps } from '@react-navigation/native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs';

export type TabParamList = {
    Home: undefined;
}

export type RootStackParamList = {
    Tabs: NativeStackScreenProps<TabParamList>;
    Detail: { id: number, title: string};
}

export type DetailProps = NativeStackScreenProps<RootStackParamList, 'Detail'>;

export type HomeProps = CompositeScreenProps<
  BottomTabScreenProps<TabParamList, 'Home'>,
  NativeStackScreenProps<RootStackParamList>
>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}