# EmailJS Setup Guide

To enable direct email sending from your contact form without opening the mail client:

## Step 1: Create an EmailJS Account

1. Go to [EmailJS](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## Step 2: Add Email Service

1. Navigate to **Email Services** in the dashboard
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions
5. Save your **Service ID**

## Step 3: Create Email Template

1. Go to **Email Templates**
2. Click **Create New Template**
3. Set up your template with these variables:
   - `{{from_name}}` - Sender's name
   - `{{from_email}}` - Sender's email
   - `{{message}}` - Message content
4. Set the **To Email** to `himanshuu004@gmail.com`
5. Save the template and note your **Template ID**

## Step 4: Get Public Key

1. Go to **Account** > **General**
2. Find your **Public Key**

## Step 5: Update Contact.jsx

Replace the EmailJS section in `src/components/Contact.jsx` with your credentials:

```javascript
const onSubmit = async (data) => {
  setSending(true)
  
  try {
    await emailjs.send(
      'YOUR_SERVICE_ID',        // Replace with your Service ID
      'YOUR_TEMPLATE_ID',       // Replace with your Template ID
      {
        from_name: data.name,
        from_email: data.email,
        message: data.message,
      },
      'YOUR_PUBLIC_KEY'         // Replace with your Public Key
    )
    
    setSubmitted(true)
    reset()
    
    setTimeout(() => {
      setSubmitted(false)
      setSending(false)
    }, 3000)
  } catch (error) {
    console.error('Error sending email:', error)
    alert('Failed to send message. Please try again or email directly at himanshuu004@gmail.com')
    setSending(false)
  }
}
```

## Alternative: Use a Backend API

If you prefer not to use EmailJS, you can:

1. Create a backend API (Node.js, Python Flask, etc.)
2. Set up SMTP configuration
3. Call your API endpoint from the contact form
4. Send emails server-side

## Free Tier Limits

- 200 emails per month on the free tier
- For higher limits, consider the paid plans

## Security Note

Never expose sensitive credentials in client-side code for production. Consider:
- Using environment variables
- Adding rate limiting
- Implementing CAPTCHA to prevent spam

