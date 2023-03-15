// Setup Wordpress & Firebase Configurations
export const WORDPRESS_URL = '';
export const environment = {
    WPConfiguration: {
        WORDPRESS_URL: WORDPRESS_URL,
        WORDPRESS_REST_API_URL: `${WORDPRESS_URL}/wp-json/wp/v2/`,
        WORDPRESS_USER: '',
        WORDPRESS_PASS: ''
    },
    FirebaseConfiguration: {
        apiKey: '',
        authDomain: '',
        databaseURL: '',
        projectId: '',
        storageBucket: '',
        messagingSenderId: '',
    }
};
