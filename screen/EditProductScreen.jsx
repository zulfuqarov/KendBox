import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Image,
  Platform,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { categories } from '../data/products';

const EditProductScreen = ({ route, navigation }) => {
  const { product } = route.params;
  
  // Find the category that matches the product's category
  const initialCategory = categories.find(cat => cat.name === product.category) || null;
  
  // Find the subcategory if category exists
  const initialSubcategory = initialCategory 
    ? initialCategory.subcategories.find(sub => sub.name === product.subcategory) || null 
    : null;

  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [selectedSubcategory, setSelectedSubcategory] = useState(initialSubcategory);
  const [productData, setProductData] = useState({
    name: product.name,
    price: product.price,
    description: product.description,
    seller: product.seller,
    stock: product.stock.toString(),
    unit: product.unit || '',
    image: { uri: product.image },
  });

  const handleInputChange = (field, value) => {
    setProductData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = () => {
    // TODO: Implement product update logic
    console.log('Updated Product Data:', productData);
    navigation.goBack();
  };

  const handleImageUpload = () => {
    // TODO: Implement image picker functionality
    // For now, we'll just simulate an image upload
    const mockImage = {
      uri: 'https://media.istockphoto.com/id/1316145932/photo/table-top-view-of-spicy-food.jpg?s=1024x1024&w=is&k=20&c=VaRsD5pHXDCMcwcAsOGaaBadptx0nHaJUuVKpyWaq3A=',
      type: 'image/jpeg',
      name: 'product-image.jpg',
    };
    setProductData(prev => ({
      ...prev,
      image: mockImage
    }));
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
        <Text style={styles.headerTitle}>Məhsulu Redaktə Et</Text>
        <View style={styles.placeholder} />
      </View>

      <ScrollView style={styles.content}>
        <View style={styles.formContainer}>
          {/* Category Selection */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Kateqoriya</Text>
            <View style={styles.categoriesWrapper}>
              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.categoriesContainer}
              >
                {categories.map((category) => (
                  <TouchableOpacity
                    key={category.id}
                    style={[
                      styles.categoryButton,
                      selectedCategory?.id === category.id && styles.selectedCategoryButton,
                    ]}
                    onPress={() => {
                      setSelectedCategory(category);
                      setSelectedSubcategory(null);
                    }}
                  >
                    <Text
                      style={[
                        styles.categoryButtonText,
                        selectedCategory?.id === category.id && styles.selectedCategoryButtonText,
                      ]}
                    >
                      {category.name}
                    </Text>
                  </TouchableOpacity>
                ))}
              </ScrollView>
            </View>
          </View>

          {/* Subcategory Selection */}
          {selectedCategory && (
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Alt Kateqoriya</Text>
              <View style={styles.categoriesWrapper}>
                <ScrollView
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  contentContainerStyle={styles.categoriesContainer}
                >
                  {selectedCategory.subcategories.map((subcategory) => (
                    <TouchableOpacity
                      key={subcategory.id}
                      style={[
                        styles.categoryButton,
                        selectedSubcategory?.id === subcategory.id && styles.selectedSubcategoryButton,
                      ]}
                      onPress={() => setSelectedSubcategory(subcategory)}
                    >
                      <Text
                        style={[
                          styles.categoryButtonText,
                          selectedSubcategory?.id === subcategory.id && styles.selectedCategoryButtonText,
                        ]}
                      >
                        {subcategory.name}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </ScrollView>
              </View>
            </View>
          )}

          {/* Product Details */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Məhsul Məlumatları</Text>
            
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Məhsulun Adı</Text>
              <TextInput
                style={styles.input}
                placeholder="Məhsulun adını daxil edin"
                value={productData.name}
                onChangeText={(value) => handleInputChange('name', value)}
              />
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Qiymət (₼)</Text>
              <TextInput
                style={styles.input}
                placeholder="Qiyməti daxil edin"
                keyboardType="decimal-pad"
                value={productData.price}
                onChangeText={(value) => handleInputChange('price', value)}
              />
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Təsvir</Text>
              <TextInput
                style={[styles.input, styles.textArea]}
                placeholder="Məhsul haqqında məlumat"
                multiline
                numberOfLines={4}
                value={productData.description}
                onChangeText={(value) => handleInputChange('description', value)}
              />
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Satıcı</Text>
              <TextInput
                style={styles.input}
                placeholder="Satıcının adını daxil edin"
                value={productData.seller}
                onChangeText={(value) => handleInputChange('seller', value)}
              />
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Stok</Text>
              <TextInput
                style={styles.input}
                placeholder="Stok miqdarını daxil edin"
                keyboardType="numeric"
                value={productData.stock}
                onChangeText={(value) => handleInputChange('stock', value)}
              />
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Ölçü Vahidi</Text>
              <TextInput
                style={styles.input}
                placeholder="kq, litr, ədəd və s."
                value={productData.unit}
                onChangeText={(value) => handleInputChange('unit', value)}
              />
            </View>

            <View style={styles.imageContainer}>
              <TouchableOpacity 
                style={styles.imageUploadButton}
                onPress={handleImageUpload}
              >
                {productData.image ? (
                  <Image
                    source={{ uri: productData.image.uri }}
                    style={styles.uploadedImage}
                    resizeMode="cover"
                  />
                ) : (
                  <>
                    <Ionicons name="camera-outline" size={32} color="#666" />
                    <Text style={styles.imageUploadText}>Şəkil Əlavə Et</Text>
                  </>
                )}
              </TouchableOpacity>
            </View>
          </View>

          <TouchableOpacity
            style={styles.submitButton}
            onPress={handleSubmit}
          >
            <Text style={styles.submitButtonText}>Dəyişiklikləri Yadda Saxla</Text>
          </TouchableOpacity>
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
    borderBottomColor: '#eee',
  },
  backButton: {
    padding: 8,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  placeholder: {
    width: 40,
  },
  content: {
    flex: 1,
  },
  formContainer: {
    padding: 16,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#333',
  },
  categoriesWrapper: {
    marginBottom: 16,
  },
  categoriesContainer: {
    paddingRight: 16,
  },
  categoryButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: '#f0f0f0',
    marginRight: 8,
  },
  selectedCategoryButton: {
    backgroundColor: '#4CAF50',
  },
  selectedSubcategoryButton: {
    backgroundColor: '#4CAF50',
  },
  categoryButtonText: {
    color: '#666',
    fontSize: 14,
  },
  selectedCategoryButtonText: {
    color: '#fff',
  },
  inputGroup: {
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  imageContainer: {
    marginTop: 16,
  },
  imageUploadButton: {
    width: '100%',
    height: 200,
    borderWidth: 2,
    borderColor: '#ddd',
    borderStyle: 'dashed',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
  },
  uploadedImage: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
  },
  imageUploadText: {
    marginTop: 8,
    color: '#666',
    fontSize: 16,
  },
  submitButton: {
    backgroundColor: '#4CAF50',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 24,
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default EditProductScreen; 