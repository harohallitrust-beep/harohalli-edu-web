export const config = {
  resend: {
    apiKey: process.env.RESEND_KEY || '',
    fromEmail: '"HES Website" <no-reply@contact.hes-harohalli.com>', // Verified production domain with quoted name
    toEmail: 'harohallitrust@gmail.com', // Updated target email
  },
  social: {
    youtube: process.env.YT_CHANNEL || 'https://www.youtube.com/@harohalli_trust',
  },
  contact: {
    phones: ['+91 080 28362615', '+91 97412 16182'],
    email: 'mahathmapucollege@gmail.com',
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15559.31788407715!2d77.721595!3d12.8542884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae6d1359fdc1cd%3A0x67f952d4b4f70ce3!2sHarohalli%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1770614825668!5m2!1sen!2sin',
  },
  admin: {
    users: (process.env.ADMIN_USER || 'admin').split(','),
    passwords: (process.env.ADMIN_PASS || 'harohalli2024').split(','),
  }
};
