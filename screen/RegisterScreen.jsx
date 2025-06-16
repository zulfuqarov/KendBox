import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    ScrollView,
    Alert,
    KeyboardAvoidingView,
    Platform,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';

const RegisterScreen = ({ navigation }) => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: '',
    });

    const [errors, setErrors] = useState({});
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const validateForm = () => {
        const newErrors = {};

        if (!formData.fullName.trim()) {
            newErrors.fullName = 'Ad və Soyad tələb olunur';
        } else if (formData.fullName.trim().length < 4) {
            newErrors.fullName = 'ən azı 4 hərf olmalıdır';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email tələb olunur';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Düzgün email ünvanı daxil edin';
        }

        if (!formData.phone.trim()) {
            newErrors.phone = 'Telefon nömrəsi tələb olunur';
        } else if (!/^\+?[0-9]{10,12}$/.test(formData.phone.replace(/\s/g, ''))) {
            newErrors.phone = 'Düzgün telefon nömrəsi daxil edin';
        }

        if (!formData.password) {
            newErrors.password = 'Şifrə tələb olunur';
        } else if (formData.password.length < 6) {
            newErrors.password = 'Şifrə ən azı 6 simvol olmalıdır';
        }

        if (!formData.confirmPassword) {
            newErrors.confirmPassword = 'Şifrəni təsdiqləyin';
        } else if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = 'Şifrələr uyğun gəlmir';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleRegister = () => {
        const isValid = validateForm();
        if (isValid) {
            Alert.alert(
                'Uğurlu',
                'Qeydiyyat uğurla tamamlandı',
                [
                    {
                        text: 'OK',
                        onPress: () => navigation.navigate('Login'),
                    },
                ]
            );
        }
    };

    const handleSocialLogin = (platform) => {
        // Social login logic will be implemented here
        console.log(`${platform} login pressed`);
    };

    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={styles.keyboardAvoidingView}
            >
                <View style={styles.header}>
                    <TouchableOpacity
                        style={styles.backButton}
                        onPress={() => navigation.goBack()}
                    >
                        <Ionicons name="arrow-back" size={24} color="#333" />
                    </TouchableOpacity>
                    <Text style={styles.headerTitle}>Qeydiyyat</Text>
                    <View style={styles.placeholder} />
                </View>

                <ScrollView
                    style={styles.content}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={styles.scrollContent}
                >
                    <View style={styles.formContainer}>
                        <View style={styles.socialButtonsContainer}>
                            <TouchableOpacity
                                style={styles.socialButton}
                                onPress={() => handleSocialLogin('Google')}
                            >
                                <Ionicons name="logo-google" size={24} color="#4285F4" style={styles.socialIcon} />
                                <Text style={styles.socialButtonText}>Google</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={styles.socialButton}
                                onPress={() => handleSocialLogin('Facebook')}
                            >
                                <Ionicons name="logo-facebook" size={24} color="#4267B2" style={styles.socialIcon} />
                                <Text style={styles.socialButtonText}>Facebook</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.divider}>
                            <View style={styles.dividerLine} />
                            <Text style={styles.dividerText}>və ya</Text>
                            <View style={styles.dividerLine} />
                        </View>

                        <View style={styles.formSection}>
                            <View style={styles.inputContainer}>
                                <Ionicons name="person-outline" size={20} color="#666" style={styles.inputIcon} />
                                <TextInput
                                    style={styles.input}
                                    placeholder="Ad və Soyad"
                                    value={formData.fullName}
                                    onChangeText={(text) => {
                                        setFormData({ ...formData, fullName: text });
                                        if (errors.fullName) {
                                            setErrors({ ...errors, fullName: null });
                                        }
                                    }}
                                    placeholderTextColor="#666"
                                />
                            </View>
                            {errors.fullName && <Text style={styles.errorText}>{errors.fullName}</Text>}

                            <View style={styles.inputContainer}>
                                <Ionicons name="mail-outline" size={20} color="#666" style={styles.inputIcon} />
                                <TextInput
                                    style={styles.input}
                                    placeholder="Email"
                                    keyboardType="email-address"
                                    value={formData.email}
                                    onChangeText={(text) => {
                                        setFormData({ ...formData, email: text });
                                        if (errors.email) {
                                            setErrors({ ...errors, email: null });
                                        }
                                    }}
                                    placeholderTextColor="#666"
                                />
                            </View>
                            {errors.email && <Text style={styles.errorText}>{errors.email}</Text>}

                            <View style={styles.inputContainer}>
                                <Ionicons name="call-outline" size={20} color="#666" style={styles.inputIcon} />
                                <TextInput
                                    style={styles.input}
                                    placeholder="Əlaqə nömrəsi"
                                    keyboardType="phone-pad"
                                    value={formData.phone}
                                    onChangeText={(text) => {
                                        setFormData({ ...formData, phone: text });
                                        if (errors.phone) {
                                            setErrors({ ...errors, phone: null });
                                        }
                                    }}
                                    placeholderTextColor="#666"
                                />
                            </View>
                            {errors.phone && <Text style={styles.errorText}>{errors.phone}</Text>}

                            <View style={styles.inputContainer}>
                                <Ionicons name="lock-closed-outline" size={20} color="#666" style={styles.inputIcon} />
                                <TextInput
                                    style={styles.input}
                                    placeholder="Şifrə"
                                    secureTextEntry={!showPassword}
                                    value={formData.password}
                                    onChangeText={(text) => {
                                        setFormData({ ...formData, password: text });
                                        if (errors.password) {
                                            setErrors({ ...errors, password: null });
                                        }
                                    }}
                                    placeholderTextColor="#666"
                                />
                                <TouchableOpacity
                                    onPress={() => setShowPassword(!showPassword)}
                                    style={styles.eyeIcon}
                                >
                                    <Ionicons
                                        name={showPassword ? 'eye-off-outline' : 'eye-outline'}
                                        size={20}
                                        color="#666"
                                    />
                                </TouchableOpacity>
                            </View>
                            {errors.password && <Text style={styles.errorText}>{errors.password}</Text>}

                            <View style={styles.inputContainer}>
                                <Ionicons name="lock-closed-outline" size={20} color="#666" style={styles.inputIcon} />
                                <TextInput
                                    style={styles.input}
                                    placeholder="Şifrəni təsdiqləyin"
                                    secureTextEntry={!showConfirmPassword}
                                    value={formData.confirmPassword}
                                    onChangeText={(text) => {
                                        setFormData({ ...formData, confirmPassword: text });
                                        if (errors.confirmPassword) {
                                            setErrors({ ...errors, confirmPassword: null });
                                        }
                                    }}
                                    placeholderTextColor="#666"
                                />
                                <TouchableOpacity
                                    onPress={() => setShowConfirmPassword(!showConfirmPassword)}
                                    style={styles.eyeIcon}
                                >
                                    <Ionicons
                                        name={showConfirmPassword ? 'eye-off-outline' : 'eye-outline'}
                                        size={20}
                                        color="#666"
                                    />
                                </TouchableOpacity>
                            </View>
                            {errors.confirmPassword && <Text style={styles.errorText}>{errors.confirmPassword}</Text>}
                        </View>

                        <TouchableOpacity
                            style={styles.registerButton}
                            onPress={() => handleRegister()}
                            activeOpacity={0.8}
                        >
                            <Text style={styles.registerButtonText}>Qeydiyyatdan keç</Text>
                        </TouchableOpacity>

                        <View style={styles.loginSection}>
                            <Text style={styles.loginText}>Artıq hesabınız var?</Text>
                            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                                <Text style={styles.loginLink}>Daxil olun</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    keyboardAvoidingView: {
        flex: 1,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 16,
        paddingTop: Platform.OS === 'ios' ? 16 : 16,
        backgroundColor: '#FFFFFF',
        borderBottomWidth: 1,
        borderBottomColor: '#E0E0E0',
        zIndex: 1000,
    },
    backButton: {
        padding: 8,
    },
    headerTitle: {
        fontSize: 20,
        fontWeight: '600',
        color: '#333',
    },
    placeholder: {
        width: 40,
    },
    content: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    scrollContent: {
        flexGrow: 1,
        paddingBottom: 20,
    },
    formContainer: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
    },
    socialButtonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    socialButton: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFFFFF',
        padding: 12,
        borderRadius: 8,
        marginHorizontal: 5,
        borderWidth: 1,
        borderColor: '#E0E0E0',
    },
    socialIcon: {
        width: 24,
        height: 24,
        marginRight: 8,
    },
    socialButtonText: {
        color: '#333',
        fontSize: 16,
        fontWeight: '500',
    },
    divider: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 20,
    },
    dividerLine: {
        flex: 1,
        height: 1,
        backgroundColor: '#E0E0E0',
    },
    dividerText: {
        marginHorizontal: 10,
        color: '#666',
        fontSize: 14,
    },
    formSection: {
        marginBottom: 20,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        borderRadius: 8,
        marginBottom: 10,
        paddingHorizontal: 12,
        height: 50,
        borderWidth: 1,
        borderColor: '#E0E0E0',
    },
    inputIcon: {
        marginRight: 10,
    },
    input: {
        flex: 1,
        fontSize: 16,
        color: '#333',
    },
    eyeIcon: {
        padding: 8,
    },
    errorText: {
        color: '#FF3B30',
        fontSize: 12,
        marginTop: -5,
        marginBottom: 10,
        marginLeft: 12,
    },
    registerButton: {
        backgroundColor: '#2E7D32',
        padding: 16,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 10,
    },
    registerButtonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '600',
    },
    loginSection: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
    loginText: {
        color: '#666',
        fontSize: 14,
    },
    loginLink: {
        color: '#2E7D32',
        fontSize: 14,
        fontWeight: '600',
        marginLeft: 5,
    },
});

export default RegisterScreen; 