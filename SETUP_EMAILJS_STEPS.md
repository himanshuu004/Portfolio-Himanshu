# Quick Setup: Make Contact Form Send Email Directly

Follow these steps to receive emails at `himanshuu004@gmail.com` without opening mail client:

## Step 1: Create EmailJS Account (2 minutes)

1. Go to **[https://www.emailjs.com/](https://www.emailjs.com/)**
2. Click **"Sign Up"** (top right)
3. Sign up with email (or Google/GitHub)
4. Verify your email

## Step 2: Connect Your Email Service (3 minutes)

1. After logging in, click **"Email Services"** in dashboard
2. Click **"Add New Service"**
3. Choose your email provider:
   - **Gmail** (recommended) - Connect with your gmail account
   - **Outlook** - Connect with your outlook account
   - Or any other provider
4. Authorize the connection
5. Copy your **Service ID** (you'll need this!)

## Step 3: Create Email Template (2 minutes)

1. Click **"Email Templates"** in dashboard
2. Click **"Create New Template"**
3. Use this template code:

```
Subject: Portfolio Contact Form - {{from_name}}

From: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

---
Reply To: {{from_email}}
```

4. In **"To Email"** field, enter: `himanshuu004@gmail.com`
5. Click **"Save"**
6. Copy your **Template ID** (you'll need this!)

## Step 4: Get Your Public Key (1 minute)

1. Click **"Account"** in the dashboard
2. Scroll to **"API Keys"**
3. Click **"Create"** if you don't have one
4. Copy your **Public Key** (you'll need this!)

## Step 5: Update Your Code (1 minute)

Open `src/components/Contact.jsx` and find lines 16-18:

```javascript
const SERVICE_ID = 'YOUR_SERVICE_ID'
const TEMPLATE_ID = 'YOUR_TEMPLATE_ID'
const PUBLIC_KEY = 'YOUR_PUBLIC_KEY'
```

Replace with your actual values:

```javascript
const SERVICE_ID = 'service_abc123xyz'       // Your Service ID
const TEMPLATE_ID = 'template_mno456pqr'    // Your Template ID
const PUBLIC_KEY = 'your-actual-public-key' // Your Public Key
```

Save the file and your contact form will work!

## Step 6: Test It!

1. Fill out the contact form on your portfolio
2. Click "Send Message"
3. You should see "Message Sent!" confirmation
4. Check your email inbox at `himanshuu004@gmail.com`
5. You'll receive the email within seconds! ✨

---

## Alternative: Use Formspree (Even Easier!)

If EmailJS seems complicated, try **Formspree**:

1. Go to **[https://formspree.io](https://formspree.io)**
2. Sign up (free)
3. Click "New Form"
4. Set destination email: `himanshuu004@gmail.com`
5. Copy your form ID (e.g., `xjkl23pq`)
6. In `Contact.jsx`, replace line 19:
   ```javascript
   const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
   ```
   With:
   ```javascript
   const response = await fetch('https://formspree.io/f/xjkl23pq', {
   ```
7. Save and test!

---

## Need Help?

If you get stuck, I can help you set it up step-by-step!

**Important:** Until you set up EmailJS or Formspree, the form will show an error. This is normal - just follow the steps above to make it work!

