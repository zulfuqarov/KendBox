import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';

const { width } = Dimensions.get('window');

const ProductDetailScreen = ({ route, navigation }) => {
  const { product } = route.params;
  const [quantity, setQuantity] = React.useState(1);

  const handleQuantityChange = (value) => {
    if (value >= 1 && value <= product.stock) {
      setQuantity(value);
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
        <Text style={styles.headerTitle}>Məhsul Haqqında</Text>
        <View style={styles.placeholder} />
      </View>

      <ScrollView style={styles.content}>
        <Image
          source={{ uri: product.image }}
          style={styles.productImage}
          resizeMode="cover"
        />

        <View style={styles.detailsContainer}>
          <View style={styles.titleContainer}>
            <Text style={styles.productName}>{product.name}</Text>
            <Text style={styles.productPrice}>{product.price} ₼</Text>
          </View>

          <View style={styles.infoRow}>
            <View style={styles.infoItem}>
              <Ionicons name="star" size={20} color="#FFD700" />
              <Text style={styles.infoText}>{product.rating}</Text>
            </View>
            <View style={styles.infoItem}>
              <Ionicons name="cube-outline" size={20} color="#666" />
              <Text style={styles.infoText}>{product.stock} {product.unit}</Text>
            </View>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Satıcı</Text>
            <Text style={styles.sectionText}>{product.seller}</Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Ünvan</Text>
            <Text style={styles.sectionText}>{product.address}</Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Təsvir</Text>
            <Text style={styles.sectionText}>{product.description}</Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Miqdar</Text>
            <View style={styles.quantitySelector}>
              <TouchableOpacity 
                style={styles.quantityButton}
                onPress={() => handleQuantityChange(quantity - 1)}
              >
                <Ionicons name="remove" size={20} color="#666" />
              </TouchableOpacity>
              <Text style={styles.quantityText}>{quantity} {product.unit}</Text>
              <TouchableOpacity 
                style={styles.quantityButton}
                onPress={() => handleQuantityChange(quantity + 1)}
              >
                <Ionicons name="add" size={20} color="#666" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.addToCartButton}>
          <Ionicons name="cart-outline" size={24} color="#FFFFFF" />
          <Text style={styles.addToCartText}>Səbətə Əlavə Et</Text>
        </TouchableOpacity>
      </View>
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
    justifyContent: 'space-between',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  backButton: {
    padding: 8,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  placeholder: {
    width: 40,
  },
  content: {
    flex: 1,
  },
  productImage: {
    width: width,
    height: width,
  },
  detailsContainer: {
    padding: 16,
  },
  titleContainer: {
    marginBottom: 16,
  },
  productName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  productPrice: {
    fontSize: 20,
    color: '#2E7D32',
    fontWeight: 'bold',
  },
  infoRow: {
    flexDirection: 'row',
    marginBottom: 24,
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 24,
  },
  infoText: {
    marginLeft: 4,
    fontSize: 16,
    color: '#666',
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  sectionText: {
    fontSize: 16,
    color: '#666',
    lineHeight: 24,
  },
  quantitySelector: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#F5F5F5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  quantityText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginHorizontal: 16,
  },
  footer: {
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#F0F0F0',
    backgroundColor: '#FFFFFF',
  },
  addToCartButton: {
    backgroundColor: '#2E7D32',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    borderRadius: 8,
  },
  addToCartText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 8,
  },
});

export default ProductDetailScreen; 