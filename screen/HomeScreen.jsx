import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
  TextInput,
  Dimensions,
  Platform,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';

const { width } = Dimensions.get('window');

const HomeScreen = ({ navigation }) => {
  const featuredProducts = [
    {
      id: '1',
      name: 'Təzə Alma',
      price: '2.50',
      image: 'https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      seller: 'Əli Məmmədov',
      rating: 4.8,
    },
    {
      id: '2',
      name: 'Təzə Badam',
      price: '15.00',
      image: 'https://images.unsplash.com/photo-1587132137056-bfbf0166836e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      seller: 'Məhəmməd Əliyev',
      rating: 4.9,
    },
  ];

  const categories = [
    { id: '1', name: 'Meyvələr', icon: 'nutrition-outline' },
    { id: '2', name: 'Tərəvəzlər', icon: 'leaf-outline' },
    { id: '3', name: 'Quru Meyvələr', icon: 'nutrition-outline' },
    { id: '4', name: 'Bal', icon: 'water-outline' },
  ];

  const recentProducts = [
    {
      id: '3',
      name: 'Təzə Üzüm',
      price: '4.50',
      image: 'https://images.unsplash.com/photo-1515779124580-caef2806e781?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      seller: 'Ayşə Hüseynova',
      rating: 4.7,
    },
    {
      id: '4',
      name: 'Təzə Pomidor',
      price: '3.50',
      image: 'https://images.unsplash.com/photo-1546094097-24607b921c63?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      seller: 'Hüseyn Əliyev',
      rating: 4.6,
    },
  ];

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

        {/* Featured Products Section */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Seçilmiş Məhsullar</Text>
            <TouchableOpacity>
              <Text style={styles.seeAllText}>Hamısına Bax</Text>
            </TouchableOpacity>
          </View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.featuredContainer}
          >
            {featuredProducts.map((product) => (
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
              <TouchableOpacity key={category.id} style={styles.categoryCard}>
                <View style={styles.categoryIconContainer}>
                  <Ionicons name={category.icon} size={24} color="#2E7D32" />
                </View>
                <Text style={styles.categoryName}>{category.name}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Recent Products Section */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Son Əlavə Olunanlar</Text>
            <TouchableOpacity>
              <Text style={styles.seeAllText}>Hamısına Bax</Text>
            </TouchableOpacity>
          </View>
          {recentProducts.map((product) => (
            <TouchableOpacity
              key={product.id}
              style={styles.recentCard}
              onPress={() => navigation.navigate('ProductDetail', { product })}
            >
              <Image 
                source={{ uri: product.image }} 
                style={styles.recentImage}
              />
              <View style={styles.recentInfo}>
                <Text style={styles.recentName}>{product.name}</Text>
                <Text style={styles.recentSeller}>{product.seller}</Text>
                <View style={styles.recentBottom}>
                  <Text style={styles.recentPrice}>{product.price} ₼</Text>
                  <View style={styles.ratingContainer}>
                    <Ionicons name="star" size={16} color="#FFD700" />
                    <Text style={styles.ratingText}>{product.rating}</Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          ))}
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
    ...Platform.select({
      ios: {
        resizeMode: 'cover',
      },
      android: {
        resizeMode: 'cover',
      },
    }),
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
    // backgroundColor: 'rgba(0,0,0,0.7)',
    // padding: 12,
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
    ...Platform.select({
      ios: {
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
      },
    }),
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
    marginTop: 8,
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
  recentCard: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    marginBottom: 16,
    overflow: 'hidden',
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
  recentImage: {
    width: 120,
    height: 120,
    ...Platform.select({
      ios: {
        resizeMode: 'cover',
      },
      android: {
        resizeMode: 'cover',
      },
    }),
  },
  recentInfo: {
    flex: 1,
    padding: 12,
    justifyContent: 'space-between',
    ...Platform.select({
      ios: {
        backgroundColor: '#FFFFFF',
      },
    }),
  },
  recentName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
    ...Platform.select({
      ios: {
        fontWeight: '600',
      },
    }),
  },
  recentSeller: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
    ...Platform.select({
      ios: {
        fontWeight: '500',
      },
    }),
  },
  recentBottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  recentPrice: {
    fontSize: 16,
    color: '#2E7D32',
    fontWeight: 'bold',
    ...Platform.select({
      ios: {
        fontWeight: '600',
      },
    }),
  },
});

export default HomeScreen;


