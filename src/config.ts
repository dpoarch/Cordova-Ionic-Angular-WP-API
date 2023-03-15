// Setup Wordpress Configurations
export const WORDPRESS_URL = '';
export const configuration = {
    site: {
        WORDPRESS_URL: WORDPRESS_URL,
        WORDPRESS_REST_API_URL: `${WORDPRESS_URL}/wp-json/wp/v2/`
    },
    access: {
        WORDPRESS_USER: '',
        WORDPRESS_PASS: ''
    }
};

// Setup Firebase Configuration
export const FirebaseConfiguration = {
  apiKey: '',
  authDomain: '',
  databaseURL: '',
  projectId: '',
  storageBucket: '',
  messagingSenderId: '',
}
