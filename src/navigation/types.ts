import type { CompositeScreenProps } from '@react-navigation/native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs';

// export type TabParamList = {
//     Home: undefined;
// }

export type RootStackParamList = {
    // Tabs: NativeStackScreenProps<TabParamList>;
    Account: undefined;
    Detail: {id: number, number: string, type: string, balance: string };
}

export type DetailProps = NativeStackScreenProps<RootStackParamList, 'Detail'>;
export type AccountProps = NativeStackScreenProps<RootStackParamList, 'Account'>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}