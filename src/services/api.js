import axios from 'axios';

/**
 * Axios instance configured for future Node.js / Express / MongoDB backend.
 * Uses VITE_API_BASE_URL from environment variables.
 */
const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || '',
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000,
});

export const quoteService = {
  createQuote: async (quoteData) => {
    if (!import.meta.env.VITE_API_BASE_URL) {
      // Backend is not yet connected; simulate or return unconfigured notice
      console.warn('API base URL is not configured. Future backend integration pending.');
      return { success: true, simulated: true, data: quoteData };
    }
    const response = await api.post('/api/quotes', quoteData);
    return response.data;
  },
};

export const contactService = {
  submitContactForm: async (contactData) => {
    if (!import.meta.env.VITE_API_BASE_URL) {
      console.warn('API base URL is not configured. Future backend integration pending.');
      return { success: true, simulated: true, data: contactData };
    }
    const response = await api.post('/api/contact', contactData);
    return response.data;
  },
};

export default api;
