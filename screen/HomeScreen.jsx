import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Dimensions,
  Platform,
  Image,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { categories, getAllProducts } from '../data/products';

const { width } = Dimensions.get('window');

const HomeScreen = ({ navigation }) => {
  // Bütün məhsulları alıb reytinqə görə sıralayırıq
  const topRatedProducts = getAllProducts()
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 4); // İlk 4 ən yüksək reytinqli məhsulu götürürük

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Header Section */}
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <Text style={styles.welcomeText}>Xoş Gəldiniz</Text>
            <Text style={styles.headerTitle}>Təbii Məhsullar</Text>
          </View>
          <TouchableOpacity
            style={styles.cartButton}
            onPress={() => navigation.navigate('Cart')}
          >
            <Ionicons name="cart-outline" size={24} color="#333" />
            <View style={styles.cartBadge}>
              <Text style={styles.cartBadgeText}>2</Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* Search Section */}
        <View style={styles.searchContainer}>
          <Ionicons name="search-outline" size={20} color="#666" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Məhsul axtar..."
            placeholderTextColor="#666"
          />
        </View>

        {/* Top Rated Products Section */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Ən Yaxşı Məhsullar</Text>
            <TouchableOpacity onPress={() => navigation.navigate('AllProducts')}>
              <Text style={styles.seeAllText}>Hamısına Bax</Text>
            </TouchableOpacity>
          </View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.featuredContainer}
          >
            {topRatedProducts.map((product) => (
              <TouchableOpacity
                key={product.id}
                style={styles.featuredCard}
                onPress={() => navigation.navigate('ProductDetail', { product })}
              >
                <Image
                  source={{ uri: product.image }}
                  style={styles.featuredImage}
                  resizeMode="cover"
                />
                <View style={styles.featuredOverlay}>
                  <View style={styles.featuredInfo}>
                    <Text style={styles.featuredName}>{product.name}</Text>
                    <Text style={styles.featuredPrice}>{product.price} ₼</Text>
                    <View style={styles.ratingContainer}>
                      <Ionicons name="star" size={16} color="#FFD700" />
                      <Text style={styles.ratingText}>{product.rating}</Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Categories Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Kateqoriyalar</Text>
          <View style={styles.categoriesContainer}>
            {categories.map((category) => (
              <TouchableOpacity
                key={category.id}
                style={styles.categoryCard}
                onPress={() => navigation.navigate('Category', { category })}
              >
                <View style={styles.categoryIconContainer}>
                  <Ionicons name={category.icon} size={24} color="#2E7D32" />
                </View>
                <Text style={styles.categoryName}>{category.name}</Text>
              </TouchableOpacity>
            ))}
          </View>
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
  content: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  headerLeft: {
    flex: 1,
  },
  welcomeText: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  cartButton: {
    padding: 8,
    position: 'relative',
  },
  cartBadge: {
    position: 'absolute',
    top: 0,
    right: 0,
    backgroundColor: '#2E7D32',
    borderRadius: 10,
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cartBadgeText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: 'bold',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    margin: 16,
    paddingHorizontal: 16,
    borderRadius: 12,
    height: 48,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  section: {
    padding: 16,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    paddingBottom: 20
  },
  seeAllText: {
    fontSize: 14,
    color: '#2E7D32',
    fontWeight: '500',
  },
  featuredContainer: {
    marginHorizontal: -16,
    paddingHorizontal: 16,
  },
  featuredCard: {
    width: width * 0.7,
    height: 200,
    marginRight: 16,
    borderRadius: 16,
    overflow: 'hidden',
    backgroundColor: '#F5F5F5',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
      },
      android: {
        elevation: 3,
      },
    }),
  },
  featuredImage: {
    width: '100%',
    height: '100%',
  },
  featuredOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'flex-end',
    padding: 16,
  },
  featuredInfo: {
    flexDirection: 'column',
    borderRadius: 8,
  },
  featuredName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 4,
  },
  featuredPrice: {
    fontSize: 18,
    color: '#FFFFFF',
    fontWeight: 'bold',
    marginBottom: 8,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    alignSelf: 'flex-start',
  },
  ratingText: {
    fontSize: 14,
    color: '#FFFFFF',
    marginLeft: 4,
    fontWeight: '500',
  },
  categoriesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  categoryCard: {
    width: (width - 48) / 2,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    alignItems: 'center',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
      },
      android: {
        elevation: 2,
      },
    }),
  },
  categoryIconContainer: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#E8F5E9',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  categoryName: {
    fontSize: 16,
    color: '#333',
    fontWeight: '600',
    textAlign: 'center',
  },
});

export default HomeScreen;


