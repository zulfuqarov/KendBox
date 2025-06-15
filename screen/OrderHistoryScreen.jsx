import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';

const OrderHistoryScreen = ({ navigation }) => {
  const orders = [
    {
      id: '1',
      customerId: 'user123',
      date: '2024-03-15',
      status: 'Tamamlandı',
      total: '5.50 ₼',
      items: [
        {
          id: '1',
          name: 'Alma "Qızıl"',
          quantity: 2,
          price: '1.50 ₼',
          unit: 'kq'
        },
        {
          id: '2',
          name: 'Pomidor "Qırmızı"',
          quantity: 1,
          price: '1.20 ₼',
          unit: 'kq'
        },
        {
          id: '3',
          name: 'Xiyar "Təzə bağ"',
          quantity: 1,
          price: '1.00 ₼',
          unit: 'kq'
        }
      ]
    },
    {
      id: '2',
      customerId: 'user123',
      date: '2024-03-10',
      status: 'Gözləyir',
      total: '7.70 ₼',
      items: [
        {
          id: '4',
          name: 'Pendir "Ağ"',
          quantity: 1,
          price: '4.00 ₼',
          unit: 'kq'
        },
        {
          id: '5',
          name: 'Qatıq "Kənd"',
          quantity: 1,
          price: '2.50 ₼',
          unit: 'litr'
        },
        {
          id: '6',
          name: 'Ayran "Təbii"',
          quantity: 1,
          price: '1.20 ₼',
          unit: 'litr'
        }
      ]
    },
    {
      id: '3',
      customerId: 'user123',
      date: '2024-03-15',
      status: 'Tamamlandı',
      total: '5.50 ₼',
      items: [
        {
          id: '1',
          name: 'Alma "Qızıl"',
          quantity: 2,
          price: '1.50 ₼',
          unit: 'kq'
        },
        {
          id: '2',
          name: 'Pomidor "Qırmızı"',
          quantity: 1,
          price: '1.20 ₼',
          unit: 'kq'
        },
        {
          id: '3',
          name: 'Xiyar "Təzə bağ"',
          quantity: 1,
          price: '1.00 ₼',
          unit: 'kq'
        }
      ]
    },
  ];

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('az-AZ', options);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Tamamlandı':
        return '#4CAF50';
      case 'Gözləyir':
        return '#FFA000';
      default:
        return '#757575';
    }
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
        <Text style={styles.headerTitle}>Sifariş Tarixçəsi</Text>
      </View>

      <ScrollView style={styles.content}>
        {orders.map((order) => (
          <View key={order.id} style={styles.orderCard}>
            <View style={styles.orderHeader}>
              <View>
                <Text style={styles.orderDate}>{formatDate(order.date)}</Text>
                <Text style={styles.orderId}>Sifariş #{order.id}</Text>
              </View>
              <View style={[styles.statusBadge, { backgroundColor: getStatusColor(order.status) }]}>
                <Text style={styles.statusText}>{order.status}</Text>
              </View>
            </View>

            <View style={styles.itemsContainer}>
              {order.items.map((item) => (
                <View key={item.id} style={styles.itemRow}>
                  <View style={styles.itemInfo}>
                    <Text style={styles.itemName}>{item.name}</Text>
                    <Text style={styles.itemQuantity}>
                      {item.quantity} {item.unit}
                    </Text>
                  </View>
                  <Text style={styles.itemPrice}>{item.price}</Text>
                </View>
              ))}
            </View>

            <View style={styles.orderFooter}>
              <Text style={styles.totalLabel}>Ümumi məbləğ:</Text>
              <Text style={styles.totalAmount}>{order.total}</Text>
            </View>
          </View>
        ))}
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
  orderCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  orderHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  orderDate: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  orderId: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  statusBadge: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
  },
  statusText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
  },
  itemsContainer: {
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
    paddingTop: 16,
  },
  itemRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  itemInfo: {
    flex: 1,
  },
  itemName: {
    fontSize: 16,
    color: '#333',
    marginBottom: 4,
  },
  itemQuantity: {
    fontSize: 14,
    color: '#666',
  },
  itemPrice: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  orderFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 16,
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
  },
  totalLabel: {
    fontSize: 16,
    color: '#666',
  },
  totalAmount: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default OrderHistoryScreen; 