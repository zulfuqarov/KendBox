import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Linking,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';

const HelpScreen = ({ navigation }) => {
  const [expandedFaq, setExpandedFaq] = useState(null);

  const faqs = [
    {
      id: '1',
      question: 'Sifarişi necə ləğv edə bilərəm?',
      answer: 'Sifarişinizi ləğv etmək üçün "Sifariş Tarixçəsi" bölməsinə daxil olun, ləğv etmək istədiyiniz sifarişi seçin və "Sifarişi ləğv et" düyməsinə klikləyin. Qeyd: Yalnız "Gözləyir" statusunda olan sifarişləri ləğv edə bilərsiniz.'
    },
    {
      id: '2',
      question: 'Ödəniş üsulları hansılardır?',
      answer: 'Hal-hazırda kartla ödəniş və nağd ödəniş üsullarını dəstəkləyirik. Kartla ödəniş üçün Visa, Mastercard və digər əsas kredit kartları qəbul edilir.'
    },
    {
      id: '3',
      question: 'Çatdırılma müddəti nə qədərdir?',
      answer: 'Çatdırılma müddəti ünvandan asılı olaraq 30 dəqiqə ilə 2 saat arasında dəyişir. Sifariş verdikdən sonra çatdırılma müddəti haqqında məlumat alacaqsınız.'
    },
    {
      id: '4',
      question: 'Məhsulu qaytara bilərəm?',
      answer: 'Bəli, məhsulu qaytara bilərsiniz. Qaytarma prosesi üçün məhsulu ilkin vəziyyətində, orijinal qablaşdırmasında qaytarmalısınız. Qaytarma müddəti 14 gündür.'
    }
  ];

  const contactInfo = {
    phone: '+994 50 123 45 67',
    email: 'support@kenbox.az',
    address: 'Bakı şəhəri, Nərimanov rayonu',
    workingHours: 'Hər gün 09:00 - 20:00'
  };

  const handleCall = () => {
    Linking.openURL(`tel:${contactInfo.phone}`);
  };

  const handleEmail = () => {
    Linking.openURL(`mailto:${contactInfo.email}`);
  };

  const handleReportProblem = () => {
    navigation.navigate('ReportProblem');
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
        <Text style={styles.headerTitle}>Kömək</Text>
      </View>

      <ScrollView style={styles.content}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Tez-tez soruşulan suallar</Text>
          {faqs.map((faq) => (
            <TouchableOpacity
              key={faq.id}
              style={styles.faqItem}
              onPress={() => setExpandedFaq(expandedFaq === faq.id ? null : faq.id)}
            >
              <View style={styles.faqHeader}>
                <Text style={styles.question}>{faq.question}</Text>
                <Ionicons
                  name={expandedFaq === faq.id ? 'chevron-up' : 'chevron-down'}
                  size={24}
                  color="#666"
                />
              </View>
              {expandedFaq === faq.id && (
                <Text style={styles.answer}>{faq.answer}</Text>
              )}
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Əlaqə məlumatları</Text>
          <View style={styles.contactCard}>
            <TouchableOpacity style={styles.contactItem} onPress={handleCall}>
              <Ionicons name="call-outline" size={24} color="#2E7D32" />
              <Text style={styles.contactText}>{contactInfo.phone}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.contactItem} onPress={handleEmail}>
              <Ionicons name="mail-outline" size={24} color="#2E7D32" />
              <Text style={styles.contactText}>{contactInfo.email}</Text>
            </TouchableOpacity>
            <View style={styles.contactItem}>
              <Ionicons name="location-outline" size={24} color="#2E7D32" />
              <Text style={styles.contactText}>{contactInfo.address}</Text>
            </View>
            <View style={styles.contactItem}>
              <Ionicons name="time-outline" size={24} color="#2E7D32" />
              <Text style={styles.contactText}>{contactInfo.workingHours}</Text>
            </View>
          </View>
        </View>

        <TouchableOpacity
          style={styles.reportButton}
          onPress={handleReportProblem}
        >
          <Ionicons name="warning-outline" size={24} color="#FFFFFF" />
          <Text style={styles.reportButtonText}>Problem bildir</Text>
        </TouchableOpacity>

        <View style={styles.appInfo}>
          <Text style={styles.appVersion}>KenBox v1.0.0</Text>
          <Text style={styles.appCopyright}>© 2025 KenBox. Bütün hüquqlar qorunur.</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
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
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 16,
  },
  faqItem: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
  },
  faqHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  question: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
    flex: 1,
    marginRight: 16,
  },
  answer: {
    fontSize: 14,
    color: '#666',
    marginTop: 12,
    lineHeight: 20,
  },
  contactCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  contactText: {
    fontSize: 16,
    color: '#333',
    marginLeft: 16,
  },
  reportButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2E7D32',
    padding: 16,
    borderRadius: 12,
    marginBottom: 24,
  },
  reportButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 8,
  },
  appInfo: {
    alignItems: 'center',
    marginBottom: 24,
  },
  appVersion: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
  appCopyright: {
    fontSize: 12,
    color: '#999',
  },
});

export default HelpScreen; 