import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
  Dimensions,
  Platform,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { getProductsByCategory, getProductsBySubcategory } from '../data/products';

const { width } = Dimensions.get('window');

const CategoryScreen = ({ route, navigation }) => {
  const { category } = route.params;
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);
  const [topRatedProducts, setTopRatedProducts] = useState([]);

  useEffect(() => {
    if (category.subcategories && category.subcategories.length > 0) {
      setSelectedSubcategory(category.subcategories[0]);
    }
  }, [category]);

  useEffect(() => {
    if (selectedSubcategory) {
      const topProducts = [...selectedSubcategory.products]
        .sort((a, b) => b.rating - a.rating)
        .slice(0, 4);
      setTopRatedProducts(topProducts);
    }
  }, [selectedSubcategory]);

  const handleSubcategoryPress = (subcategory) => {
    setSelectedSubcategory(subcategory);
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
        <Text style={styles.headerTitle}>{category.name}</Text>
        <View style={styles.placeholder} />
      </View>

      <View style={styles.subcategoriesWrapper}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.subcategoriesContainer}
        >
          {category.subcategories.map((subcategory) => (
            <TouchableOpacity
              key={subcategory.id}
              style={[
                styles.subcategoryButton,
                selectedSubcategory?.id === subcategory.id && styles.selectedSubcategoryButton,
              ]}
              onPress={() => handleSubcategoryPress(subcategory)}
            >
              <Text
                style={[
                  styles.subcategoryButtonText,
                  selectedSubcategory?.id === subcategory.id && styles.selectedSubcategoryButtonText,
                ]}
              >
                {subcategory.name}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Top Rated Products Section */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Ən Yaxşı Məhsullar</Text>
            <TouchableOpacity>
              <Text style={styles.seeAllText}>Hamısına Bax</Text>
            </TouchableOpacity>
          </View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.topRatedContainer}
          >
            {topRatedProducts.map((product) => (
              <TouchableOpacity
                key={product.id}
                style={styles.topRatedCard}
                onPress={() => navigation.navigate('ProductDetail', { product })}
              >
                <Image
                  source={{ uri: product.image }}
                  style={styles.topRatedImage}
                  resizeMode="cover"
                />
                <View style={styles.topRatedOverlay}>
                  <View style={styles.topRatedInfo}>
                    <Text style={styles.topRatedName}>{product.name}</Text>
                    <Text style={styles.topRatedPrice}>{product.price} ₼</Text>
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

        {/* All Products Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Bütün Məhsullar</Text>
          <View style={styles.productsContainer}>
            {selectedSubcategory?.products.map((product) => (
              <TouchableOpacity
                key={product.id}
                style={styles.productCard}
                onPress={() => navigation.navigate('ProductDetail', { product })}
              >
                <Image
                  source={{ uri: product.image }}
                  style={styles.productImage}
                  resizeMode="cover"
                />
                <View style={styles.productInfo}>
                  <Text style={styles.productName} numberOfLines={2}>
                    {product.name}
                  </Text>
                  <Text style={styles.productSeller}>{product.seller}</Text>
                  <View style={styles.productBottom}>
                    <Text style={styles.productPrice}>{product.price} ₼</Text>
                    <View style={styles.ratingContainer}>
                      <Ionicons name="star" size={16} color="#FFD700" />
                      <Text style={styles.ratingText}>{product.rating}</Text>
                    </View>
                  </View>
                </View>
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
  subcategoriesWrapper: {
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
    backgroundColor: '#FFFFFF',
  },
  subcategoriesContainer: {
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  subcategoryButton: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    backgroundColor: '#F5F5F5',
    marginRight: 12,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  selectedSubcategoryButton: {
    backgroundColor: '#2E7D32',
    borderColor: '#2E7D32',
  },
  subcategoryButtonText: {
    fontSize: 14,
    color: '#666',
    fontWeight: '500',
  },
  selectedSubcategoryButtonText: {
    color: '#FFFFFF',
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
  topRatedContainer: {
    marginHorizontal: -16,
    paddingHorizontal: 16,
  },
  topRatedCard: {
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
  topRatedImage: {
    width: '100%',
    height: '100%',
  },
  topRatedOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'flex-end',
    padding: 16,
  },
  topRatedInfo: {
    flexDirection: 'column',
    borderRadius: 8,
  },
  topRatedName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 4,
  },
  topRatedPrice: {
    fontSize: 18,
    color: '#FFFFFF',
    fontWeight: 'bold',
    marginBottom: 8,
  },
  productsContainer: {
    paddingVertical: 16,
  },
  productCard: {
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
  productImage: {
    width: 120,
    height: 120,
    resizeMode: 'cover',
  },
  productInfo: {
    flex: 1,
    padding: 12,
    justifyContent: 'space-between',
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  productSeller: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },
  productBottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  productPrice: {
    fontSize: 16,
    color: '#2E7D32',
    fontWeight: 'bold',
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
    color: 'white',
    marginLeft: 4,
    fontWeight: '500',
  },
});

export default CategoryScreen; 