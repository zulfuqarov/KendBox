import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Switch,
  Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';

const SettingsScreen = ({ navigation }) => {
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [locationServices, setLocationServices] = useState(true);

  const handleClearCache = () => {
    Alert.alert(
      'Keş təmizləmək',
      'Bütün keş məlumatları təmizlənsin?',
      [
        {
          text: 'Ləğv et',
          style: 'cancel',
        },
        {
          text: 'Təmizlə',
          onPress: () => {
            // Keş təmizləmə funksiyası
            Alert.alert('Uğurlu', 'Keş məlumatları təmizləndi');
          },
        },
      ]
    );
  };

  const handleLogout = () => {
    Alert.alert(
      'Çıxış',
      'Hesabdan çıxmaq istədiyinizə əminsiniz?',
      [
        {
          text: 'Ləğv et',
          style: 'cancel',
        },
        {
          text: 'Çıx',
          style: 'destructive',
          onPress: () => {
            // Çıxış funksiyası
            navigation.reset({
              index: 0,
              routes: [{ name: 'Login' }],
            });
          },
        },
      ]
    );
  };

  const settingsSections = [
    {
      title: 'Bildirişlər',
      items: [
        {
          id: 'notifications',
          title: 'Bildirişlər',
          type: 'switch',
          value: notifications,
          onValueChange: setNotifications,
          icon: 'notifications-outline',
        },
        {
          id: 'location',
          title: 'Məkan xidmətləri',
          type: 'switch',
          value: locationServices,
          onValueChange: setLocationServices,
          icon: 'location-outline',
        },
      ],
    },
    {
      title: 'Görünüş',
      items: [
        {
          id: 'darkMode',
          title: 'Qaranlıq rejim',
          type: 'switch',
          value: darkMode,
          onValueChange: setDarkMode,
          icon: 'moon-outline',
        },
        {
          id: 'language',
          title: 'Dil',
          type: 'select',
          value: 'Azərbaycan',
          icon: 'language-outline',
          onPress: () => {
            // Dil seçimi səhifəsinə yönləndirmə
          },
        },
      ],
    },
    {
      title: 'Təhlükəsizlik',
      items: [
        {
          id: 'changePassword',
          title: 'Şifrəni dəyiş',
          type: 'button',
          icon: 'lock-closed-outline',
          onPress: () => {
            // Şifrə dəyişdirmə səhifəsinə yönləndirmə
          },
        },
        {
          id: 'privacy',
          title: 'Məxfilik siyasəti',
          type: 'button',
          icon: 'shield-checkmark-outline',
          onPress: () => {
            // Məxfilik siyasəti səhifəsinə yönləndirmə
          },
        },
      ],
    },
    {
      title: 'Tətbiq',
      items: [
        {
          id: 'clearCache',
          title: 'Keş təmizlə',
          type: 'button',
          icon: 'trash-outline',
          onPress: handleClearCache,
        },
        {
          id: 'about',
          title: 'Tətbiq haqqında',
          type: 'button',
          icon: 'information-circle-outline',
          onPress: () => {
            // Tətbiq haqqında səhifəsinə yönləndirmə
          },
        },
      ],
    },
  ];

  const renderSettingItem = (item) => {
    return (
      <TouchableOpacity
        key={item.id}
        style={styles.settingItem}
        onPress={item.onPress}
        disabled={item.type === 'switch'}
      >
        <View style={styles.settingItemLeft}>
          <Ionicons name={item.icon} size={24} color="#333" />
          <Text style={styles.settingItemText}>{item.title}</Text>
        </View>
        {item.type === 'switch' ? (
          <Switch
            value={item.value}
            onValueChange={item.onValueChange}
            trackColor={{ false: '#767577', true: '#81b0ff' }}
            thumbColor={item.value ? '#2E7D32' : '#f4f3f4'}
          />
        ) : item.type === 'select' ? (
          <View style={styles.selectValue}>
            <Text style={styles.selectValueText}>{item.value}</Text>
            <Ionicons name="chevron-forward" size={24} color="#666" />
          </View>
        ) : (
          <Ionicons name="chevron-forward" size={24} color="#666" />
        )}
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Tənzimləmələr</Text>
      </View>

      <ScrollView style={styles.content}>
        {settingsSections.map((section, index) => (
          <View key={index} style={styles.section}>
            <Text style={styles.sectionTitle}>{section.title}</Text>
            <View style={styles.sectionContent}>
              {section.items.map(renderSettingItem)}
            </View>
          </View>
        ))}

        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Ionicons name="log-out-outline" size={24} color="#FF5252" />
          <Text style={styles.logoutButtonText}>Çıxış</Text>
        </TouchableOpacity>

        <Text style={styles.version}>Versiya 1.0.0</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  backButton: {
    marginRight: 16,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  content: {
    flex: 1,
    padding: 16,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#666',
    marginBottom: 8,
    marginLeft: 8,
  },
  sectionContent: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    overflow: 'hidden',
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  settingItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  settingItemText: {
    fontSize: 16,
    color: '#333',
    marginLeft: 16,
  },
  selectValue: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  selectValueText: {
    fontSize: 16,
    color: '#666',
    marginRight: 8,
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    marginTop: 16,
    padding: 16,
    borderRadius: 12,
  },
  logoutButtonText: {
    color: '#FF5252',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 8,
  },
  version: {
    textAlign: 'center',
    color: '#666',
    marginTop: 24,
    marginBottom: 16,
  },
});

export default SettingsScreen; 