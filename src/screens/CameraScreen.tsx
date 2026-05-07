import React, {useCallback} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {launchCamera} from 'react-native-image-picker';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../navigation/types';
import {useTheme, typography, layout} from '../theme';
import {styles} from './CameraScreen.styles';

type CameraScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Camera'>;

export default function CameraScreen() {
  const theme = useTheme();
  const navigation = useNavigation<CameraScreenNavigationProp>();

  const takePhoto = useCallback(async () => {
    launchCamera(
      {
        mediaType: 'photo',
        quality: 0.8,
        saveToPhotos: false,
      },
      response => {
        if (response.didCancel) return;
        if (response.errorCode) {
          Alert.alert('Error', response.errorMessage ?? 'Camera error.');
          return;
        }
        const uri = response.assets?.[0]?.uri;
        if (uri) {
          navigation.navigate('StormForm', {photoUri: uri});
        }
      },
    );
  }, [navigation]);

  return (
    <View style={[layout.screenCentered, {backgroundColor: theme.background}]}>
      <Text style={[typography.h2, {color: theme.textPrimary}]}>
        Document Storm
      </Text>
      <Text style={[typography.body, {color: theme.textSecondary}]}>
        Use your camera to capture storm evidence.
      </Text>
      <TouchableOpacity
        style={[styles.permissionButton, {backgroundColor: theme.primary}]}
        onPress={takePhoto}>
        <Text style={[typography.label, {color: theme.surface}]}>
          OPEN CAMERA
        </Text>
      </TouchableOpacity>
    </View>
  );
}