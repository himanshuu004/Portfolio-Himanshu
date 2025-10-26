# Contact Form Setup Guide

To make your contact form send emails directly to `himanshuu004@gmail.com` without opening any mail client, you have 3 easy options:

## Option 1: Formspree (EASIEST - Recommended) ⭐

### Steps:
1. Go to [https://formspree.io](https://formspree.io)
2. Sign up for a free account
3. Click **"New Form"**
4. Set your email as the destination: `himanshuu004@gmail.com`
5. Formspree will give you a form ID like: `xjkl23pq`
6. Copy your form ID and replace it in `src/components/Contact.jsx` at line 19:
   
   Replace:
   ```javascript
   const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
   ```
   
   With (example):
   ```javascript
   const response = await fetch('https://formspree.io/f/xjkl23pq', {
   ```

**Done!** Formspree will forward all messages to your email.

---

## Option 2: EmailJS (More Control)

### Steps:
1. Go to [https://www.emailjs.com](https://www.emailjs.com)
2. Sign up for a free account (200 emails/month free)
3. Add Email Service:
   - Go to **"Email Services"**
   - Click **"Add New Service"**
   - Choose your email provider (Gmail recommended)
   - Save your **Service ID**

4. Create Email Template:
   - Go to **"Email Templates"**
   - Click **"Create New Template"**
   - Use this template:
     ```
     From: {{from_name}} ({{from_email}})
     
     Message:
     {{message}}
     
     Reply to: {{from_email}}
     ```
   - Set **To Email**: `himanshuu004@gmail.com`
   - Save your **Template ID**

5. Get Public Key:
   - Go to **"Account"** → **"General"**
   - Copy your **Public Key**

6. Update `src/components/Contact.jsx`:
   
   Uncomment and fill in lines 13-49 in the file:
   
   ```javascript
   import emailjs from '@emailjs/browser'
   
   const onSubmit = async (data) => {
     setSending(true)
     setError('')
     
     try {
       await emailjs.send(
         'YOUR_SERVICE_ID',      // Your Service ID from step 3
         'YOUR_TEMPLATE_ID',     // Your Template ID from step 4
         {
           from_name: data.name,
           from_email: data.email,
           message: data.message,
         },
         'YOUR_PUBLIC_KEY'       // Your Public Key from step 5
       )
       
       setSubmitted(true)
       reset()
       
       setTimeout(() => {
         setSubmitted(false)
         setSending(false)
       }, 3000)
     } catch (error) {
       setError('Failed to send message. Please try again.')
       setSending(false)
     }
   }
   ```

---

## Option 3: Convert to HTML Form Action (Simple but temporary)

Update the form to use a simple form action (requires building a backend later):

```jsx
<form action="YOUR_BACKEND_ENDPOINT" method="POST">
  ...
</form>
```

---

## Recommended: Use Formspree

**Why Formspree?**
- ✅ No backend needed
- ✅ Free tier: 50 submissions/month
- ✅ Email directly to your inbox
- ✅ Easy spam protection
- ✅ Takes 2 minutes to set up

**After setting up Formspree:**
1. Test the form on your live site
2. Check your email inbox
3. You'll receive emails directly without opening any mail client!

---

## Testing

After setup:
1. Fill out the form on your portfolio
2. Click "Send Message"
3. You should see "Message Sent!" confirmation
4. Check your email inbox at himanshuu004@gmail.com
5. You should receive the email within seconds

---

## Need Help?

If you need help setting up either service, let me know and I can walk you through it step by step!

