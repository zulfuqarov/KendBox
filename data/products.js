export const categories = [
  {
    id: '1',
    name: 'Meyvələr',
    icon: 'nutrition-outline',
    subcategories: [
      {
        id: '1-1',
        name: 'Alma',
        products: [
          {
            id: '1-1-1',
            name: 'Alma "Qızıl"',
            price: '1.50',
            description: 'Şirin və xırtıldayan qızıl alma, təzə yığılmış.',
            image: 'https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            seller: 'Əli Məmmədov',
            rating: 4.8,
            stock: 100,
            unit: 'kq'
          }
        ]
      },
      {
        id: '1-2',
        name: 'Armud',
        products: [
          {
            id: '1-2-1',
            name: 'Armud "Şərq"',
            price: '1.80',
            description: 'Şirəli və xoş aromalı şərq armudu.',
            image: 'https://images.unsplash.com/photo-1587132137056-bfbf0166836e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            seller: 'Məhəmməd Əliyev',
            rating: 4.9,
            stock: 80,
            unit: 'kq'
          }
        ]
      }
    ]
  },
  {
    id: '2',
    name: 'Tərəvəzlər',
    icon: 'leaf-outline',
    subcategories: [
      {
        id: '2-1',
        name: 'Pomidor',
        products: [
          {
            id: '2-1-1',
            name: 'Pomidor "Qırmızı"',
            price: '1.20',
            description: 'Dadlı və təzə, kənd pomidoru.',
            image: 'https://mutlusebzeler.com/wp-content/uploads/2019/02/çeri-2.jpg',
            seller: 'Hüseyn Əliyev',
            rating: 4.6,
            stock: 150,
            unit: 'kq'
          }
        ]
      }
    ]
  },
  {
    id: '3',
    name: 'Süd Məhsulları',
    icon: 'water-outline',
    subcategories: [
      {
        id: '3-1',
        name: 'Qatıq',
        products: [
          {
            id: '3-1-1',
            name: 'Qatıq "Kənd"',
            price: '2.50',
            description: 'Təbii, evdə hazırlanmış qatıq.',
            image: 'https://images.unsplash.com/photo-1587132137056-bfbf0166836e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            seller: 'Ayşə Hüseynova',
            rating: 4.7,
            stock: 50,
            unit: 'litr'
          }
        ]
      }
    ]
  },
  {
    id: '4',
    name: 'Ət Məhsulları',
    icon: 'restaurant-outline',
    subcategories: [
      {
        id: '4-1',
        name: 'Kənd Toyuğu',
        products: [
          {
            id: '4-1-1',
            name: 'Kənd Toyuğu (Canlı)',
            price: '10.00',
            description: 'Təmiz və təbii şəraitdə yetişdirilmiş kənd toyuğu.',
            image: 'https://images.unsplash.com/photo-1587132137056-bfbf0166836e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            seller: 'Məhəmməd Əliyev',
            rating: 4.9,
            stock: 20,
            unit: 'ədəd'
          }
        ]
      },
      {
        id: '4-2',
        name: 'Qoyun Əti',
        products: [
          {
            id: '4-2-1',
            name: 'Qoyun Əti (Təzə)',
            price: '15.00',
            description: 'Dadlı və təzə qoyun əti.',
            image: 'https://images.unsplash.com/photo-1587132137056-bfbf0166836e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            seller: 'Əli Məmmədov',
            rating: 4.8,
            stock: 30,
            unit: 'kq'
          }
        ]
      }
    ]
  },
  {
    id: '5',
    name: 'Taxıl və Dənli Bitkilər',
    icon: 'leaf-outline',
    subcategories: [
      {
        id: '5-1',
        name: 'Buğda',
        products: [
          {
            id: '5-1-1',
            name: 'Buğda Taxılı',
            price: '0.80',
            description: 'Təmiz və keyfiyyətli buğda taxılı.',
            image: 'https://images.unsplash.com/photo-1587132137056-bfbf0166836e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            seller: 'Hüseyn Əliyev',
            rating: 4.7,
            stock: 500,
            unit: 'kq'
          }
        ]
      },
      {
        id: '5-2',
        name: 'Arpa',
        products: [
          {
            id: '5-2-1',
            name: 'Arpa Taxılı',
            price: '0.70',
            description: 'Kənddə yığılmış təbii arpa.',
            image: 'https://images.unsplash.com/photo-1587132137056-bfbf0166836e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            seller: 'Məhəmməd Əliyev',
            rating: 4.6,
            stock: 400,
            unit: 'kq'
          }
        ]
      }
    ]
  },
  {
    id: '6',
    name: 'Quru Paxlalılar',
    icon: 'nutrition-outline',
    subcategories: [
      {
        id: '6-1',
        name: 'Noxud',
        products: [
          {
            id: '6-1-1',
            name: 'Noxud Quru',
            price: '2.00',
            description: 'Yüksək keyfiyyətli quru noxud.',
            image: 'https://images.unsplash.com/photo-1587132137056-bfbf0166836e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            seller: 'Ayşə Hüseynova',
            rating: 4.8,
            stock: 200,
            unit: 'kq'
          }
        ]
      },
      {
        id: '6-2',
        name: 'Lobya',
        products: [
          {
            id: '6-2-1',
            name: 'Lobya Quru',
            price: '1.90',
            description: 'Təbii və sağlam lobya.',
            image: 'https://images.unsplash.com/photo-1587132137056-bfbf0166836e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            seller: 'Əli Məmmədov',
            rating: 4.7,
            stock: 150,
            unit: 'kq'
          }
        ]
      }
    ]
  },
  {
    id: '7',
    name: 'Bal və Arıçılıq Məhsulları',
    icon: 'water-outline',
    subcategories: [
      {
        id: '7-1',
        name: 'Təbii Bal',
        products: [
          {
            id: '7-1-1',
            name: 'Təbii Bal',
            price: '12.00',
            description: 'Təmiz və dadlı təbii kənd balı.',
            image: 'https://images.unsplash.com/photo-1587132137056-bfbf0166836e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            seller: 'Məhəmməd Əliyev',
            rating: 4.9,
            stock: 50,
            unit: 'kq'
          }
        ]
      },
      {
        id: '7-2',
        name: 'Arı Südü',
        products: [
          {
            id: '7-2-1',
            name: 'Arı Südü',
            price: '25.00',
            description: 'Sağlamlıq üçün faydalı arı südü.',
            image: 'https://images.unsplash.com/photo-1587132137056-bfbf0166836e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            seller: 'Hüseyn Əliyev',
            rating: 4.8,
            stock: 20,
            unit: 'qram'
          }
        ]
      }
    ]
  },
  {
    id: '8',
    name: 'Yumurtalar və Quşçuluq',
    icon: 'egg-outline',
    subcategories: [
      {
        id: '8-1',
        name: 'Toyuq Yumurtası',
        products: [
          {
            id: '8-1-1',
            name: 'Toyuq Yumurtası (10 ədəd)',
            price: '3.50',
            description: 'Təzə və kənd toyuğu yumurtası.',
            image: 'https://images.unsplash.com/photo-1587132137056-bfbf0166836e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            seller: 'Ayşə Hüseynova',
            rating: 4.7,
            stock: 100,
            unit: 'ədəd'
          }
        ]
      },
      {
        id: '8-2',
        name: 'Bıldırcın Yumurtası',
        products: [
          {
            id: '8-2-1',
            name: 'Bıldırcın Yumurtası (20 ədəd)',
            price: '4.00',
            description: 'Sağlam və təbii bıldırcın yumurtası.',
            image: 'https://images.unsplash.com/photo-1587132137056-bfbf0166836e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            seller: 'Əli Məmmədov',
            rating: 4.8,
            stock: 50,
            unit: 'ədəd'
          }
        ]
      }
    ]
  },
  {
    id: '9',
    name: 'Un və Dəmyə Məhsulları',
    icon: 'nutrition-outline',
    subcategories: [
      {
        id: '9-1',
        name: 'Kənd Unu',
        products: [
          {
            id: '9-1-1',
            name: 'Kənd Unu (1 kq)',
            price: '1.20',
            description: 'Təmiz və keyfiyyətli kənd unu.',
            image: 'https://images.unsplash.com/photo-1587132137056-bfbf0166836e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            seller: 'Məhəmməd Əliyev',
            rating: 4.7,
            stock: 300,
            unit: 'kq'
          }
        ]
      },
      {
        id: '9-2',
        name: 'Bulqur',
        products: [
          {
            id: '9-2-1',
            name: 'Bulqur (1 kq)',
            price: '1.80',
            description: 'Kənddə hazırlanmış bulqur.',
            image: 'https://images.unsplash.com/photo-1587132137056-bfbf0166836e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            seller: 'Hüseyn Əliyev',
            rating: 4.8,
            stock: 200,
            unit: 'kq'
          }
        ]
      }
    ]
  },
  {
    id: '10',
    name: 'Təbii Şirələr və Konservlər',
    icon: 'water-outline',
    subcategories: [
      {
        id: '10-1',
        name: 'Alma Kompotu',
        products: [
          {
            id: '10-1-1',
            name: 'Alma Kompotu (1 litr)',
            price: '2.50',
            description: 'Təbii, evdə hazırlanmış alma kompotu.',
            image: 'https://images.unsplash.com/photo-1587132137056-bfbf0166836e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            seller: 'Ayşə Hüseynova',
            rating: 4.7,
            stock: 100,
            unit: 'litr'
          }
        ]
      },
      {
        id: '10-2',
        name: 'Gavalı Mürəbbəsi',
        products: [
          {
            id: '10-2-1',
            name: 'Gavalı Mürəbbəsi (0.5 kq)',
            price: '3.00',
            description: 'Dadlı və təbii gavalı mürəbbəsi.',
            image: 'https://images.unsplash.com/photo-1587132137056-bfbf0166836e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            seller: 'Əli Məmmədov',
            rating: 4.8,
            stock: 50,
            unit: 'kq'
          }
        ]
      }
    ]
  }
];

// Bütün məhsulları bir array-də toplamaq üçün helper funksiya
export const getAllProducts = () => {
  let allProducts = [];
  categories.forEach(category => {
    category.subcategories.forEach(subcategory => {
      allProducts = [...allProducts, ...subcategory.products];
    });
  });
  return allProducts;
};

// Kateqoriya ID-sinə görə məhsulları tapmaq üçün helper funksiya
export const getProductsByCategory = (categoryId) => {
  const category = categories.find(cat => cat.id === categoryId);
  if (!category) return [];
  
  let products = [];
  category.subcategories.forEach(subcategory => {
    products = [...products, ...subcategory.products];
  });
  return products;
};

// Alt kateqoriya ID-sinə görə məhsulları tapmaq üçün helper funksiya
export const getProductsBySubcategory = (subcategoryId) => {
  for (const category of categories) {
    const subcategory = category.subcategories.find(sub => sub.id === subcategoryId);
    if (subcategory) {
      return subcategory.products;
    }
  }
  return [];
}; 