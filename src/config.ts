// CONFIG constants
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
