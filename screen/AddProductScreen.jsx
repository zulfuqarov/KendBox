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

const AddProductScreen = ({ navigation }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);
  const [productData, setProductData] = useState({
    name: '',
    price: '',
    description: '',
    seller: '',
    stock: '',
    unit: '',
    image: null,
  });

  const handleInputChange = (field, value) => {
    setProductData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = () => {
    // TODO: Implement product submission logic
    console.log('Product Data:', productData);
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
        <Text style={styles.headerTitle}>Yeni Məhsul</Text>
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
            <Text style={styles.submitButtonText}>Məhsulu Əlavə Et</Text>
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
  formContainer: {
    padding: 16,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 16,
  },
  categoriesWrapper: {
    borderWidth: 1,
    borderColor: '#F0F0F0',
    borderRadius: 12,
    backgroundColor: '#FFFFFF',
  },
  categoriesContainer: {
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  categoryButton: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    backgroundColor: '#F5F5F5',
    marginRight: 12,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  selectedCategoryButton: {
    backgroundColor: '#2E7D32',
    borderColor: '#2E7D32',
  },
  categoryButtonText: {
    fontSize: 14,
    color: '#666',
    fontWeight: '500',
  },
  selectedCategoryButtonText: {
    color: '#FFFFFF',
  },
  inputGroup: {
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    color: '#333',
    backgroundColor: '#FFFFFF',
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  previewImage: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginTop: 8,
  },
  submitButton: {
    backgroundColor: '#2E7D32',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 24,
  },
  submitButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  selectedSubcategoryButton: {
    backgroundColor: '#2E7D32',
    borderColor: '#2E7D32',
  },
  imageContainer: {
    backgroundColor: '#F5F5F5',
    borderRadius: 12,
    padding: 16,
    marginTop: 16,
  },
  imageUploadButton: {
    height: 200,
    borderWidth: 2,
    borderColor: '#E0E0E0',
    borderStyle: 'dashed',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  imageUploadText: {
    marginTop: 8,
    fontSize: 16,
    color: '#666',
  },
  uploadedImage: {
    width: '100%',
    height: '100%',
  },
});

export default AddProductScreen; 