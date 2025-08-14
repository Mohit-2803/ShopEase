# Amazon Clone (Underdevelopment)

## Overview

This is a full-stack ecommerce platform inspired by Amazon. The project is currently under development and is designed to offer a robust, scalable, and feature-rich shopping experience. Built with the MERN stack, it integrates additional services such as Stripe for payments, Cloudinary for image storage, and MS SQL for the database.

## Technologies Used

- **Frontend:** React, Vite, JavaScript, JSX
- **Backend:** Node.js, Express
- **Database:** MS SQL
- **Payment Integration:** Stripe
- **Image Storage:** Cloudinary
- **State Management:** React Context API
- **Other Tools:** ESLint, Firebase (for authentication/other services), Nodemailer for email notifications

## Project Structure
```
Ecommerce/
├─ client/
│ ├─ .env
│ ├─ .gitignore
│ ├─ eslint.config.js
│ ├─ index.html
│ ├─ package-lock.json
│ ├─ package.json
│ ├─ public/
│ │ └─ vite.svg
│ ├─ README.md
│ ├─ src/
│ │ ├─ api/
│ │ │ └─ cart.js
│ │ ├─ assets/
│ │ │ ├─ analytics.gif
│ │ │ ├─ cs.png
│ │ │ ├─ e-commerce.gif
│ │ │ ├─ fee.gif
│ │ │ ├─ growth-chart.jpeg
│ │ │ ├─ image.jpg
│ │ │ ├─ inventory.jpeg
│ │ │ ├─ secure-payments.jpeg
│ │ │ ├─ seller-dashboard.jpeg
│ │ │ ├─ support.jpeg
│ │ │ ├─ supportBot.svg
│ │ │ └─ tools.jpeg
│ │ ├─ components/
│ │ │ ├─ Auth/
│ │ │ │ ├─ LoginForm.jsx
│ │ │ │ ├─ OTPVerification.jsx
│ │ │ │ ├─ ProtectedRoute.jsx
│ │ │ │ └─ SignupForm.jsx
│ │ │ ├─ ComingSoon/
│ │ │ │ └─ ComingSoon.jsx
│ │ │ ├─ Dashboard/
│ │ │ │ └─ ProductCard.jsx
│ │ │ ├─ Footer/
│ │ │ │ ├─ CheckoutFooter.jsx
│ │ │ │ └─ Footer.jsx
│ │ │ ├─ Loading/
│ │ │ │ └─ LoadingSpinner.jsx
│ │ │ ├─ modals/
│ │ │ │ └─ SuccessModal.jsx
│ │ │ ├─ Navbar/
│ │ │ │ ├─ CheckoutNavbar.jsx
│ │ │ │ ├─ Navbar.jsx
│ │ │ │ ├─ SearchBar/
│ │ │ │ │ └─ SearchBar.jsx
│ │ │ │ └─ SellNavbar.jsx
│ │ │ ├─ payment/
│ │ │ │ ├─ AddressForm.jsx
│ │ │ │ └─ PaymentForm.jsx
│ │ │ ├─ ProductCardDisplay/
│ │ │ │ ├─ ProductCardDisplayClothing.jsx
│ │ │ │ └─ ProductCardDisplayElectronics.jsx
│ │ │ ├─ ProductInfo/
│ │ │ │ ├─ ClothingProductInfo.jsx
│ │ │ │ └─ ElectronicsProductInfo.jsx
│ │ │ ├─ Profile/
│ │ │ │ ├─ Addresses.jsx
│ │ │ │ ├─ Contact.jsx
│ │ │ │ ├─ ContactChatBot/
│ │ │ │ │ ├─ ContactChatbot.jsx
│ │ │ │ │ ├─ ProcessFiles/
│ │ │ │ │ │ ├─ greetings.js
│ │ │ │ │ │ └─ orders.js
│ │ │ │ │ └─ processUserInput.js
│ │ │ │ ├─ OrderModal/
│ │ │ │ │ ├─ OrderCancelledModal.jsx
│ │ │ │ │ └─ OrderDetailsModal.jsx
│ │ │ │ ├─ Orders.jsx
│ │ │ │ ├─ UserProfile.jsx
│ │ │ │ └─ Wishlist.jsx
│ │ │ ├─ SellerDashboard/
│ │ │ │ ├─ AddProduct/
│ │ │ │ │ ├─ ClothingForm.jsx
│ │ │ │ │ └─ ElectronicsForm.jsx
│ │ │ │ ├─ AddProduct.jsx
│ │ │ │ ├─ RecentOrders.jsx
│ │ │ │ ├─ SellerProductsModal/
│ │ │ │ │ └─ SellerProductModal.jsx
│ │ │ │ ├─ SellerProductsPage.jsx
│ │ │ │ └─ TopProducts.jsx
│ │ │ ├─ SellerRegistration/
│ │ │ │ ├─ BankDetails.jsx
│ │ │ │ ├─ ProgressStepper.jsx
│ │ │ │ └─ StoreSetup.jsx
│ │ │ └─ Sidebar/
│ │ │ └─ Sidebar.jsx
│ │ ├─ config/
│ │ │ └─ firebaseConfig.js
│ │ ├─ contexts/
│ │ │ ├─ CartContext.jsx
│ │ │ ├─ CartProvider.jsx
│ │ │ └─ useCart.jsx
│ │ ├─ index.css
│ │ ├─ layout.jsx
│ │ ├─ main.jsx
│ │ └─ pages/
│ │ ├─ CartPage.jsx
│ │ ├─ CheckoutPage.jsx
│ │ ├─ Dashboard.jsx
│ │ ├─ DealsPage.jsx
│ │ ├─ HomePage.jsx
│ │ ├─ LoginPage.jsx
│ │ ├─ ProductInfoPage.jsx
│ │ ├─ ProductsPage.jsx
│ │ ├─ ProfilePage.jsx
│ │ ├─ SellerDashboard.jsx
│ │ ├─ SellerPage.jsx
│ │ ├─ SellerRegisterPage.jsx
│ │ └─ SignupPage.jsx
│ └─ vite.config.js
├─ package-lock.json
├─ package.json
└─ server/
├─ .env
├─ config/
│ ├─ db.js
│ └─ nodemailerConfig.js
├─ controllers/
│ ├─ addressController.js
│ ├─ authController.js
│ ├─ cartController.js
│ ├─ orderController.js
│ ├─ paymentController.js
│ ├─ productController.js
│ ├─ productSearchController.js
│ ├─ sellerCentralController.js
│ ├─ sellerController.js
│ └─ userController.js
├─ middlewares/
│ └─ authMiddleware.js
├─ package-lock.json
├─ package.json
├─ routes/
│ ├─ addressRoutes.js
│ ├─ authRoutes.js
│ ├─ cartRoutes.js
│ ├─ orderRoutes.js
│ ├─ paymentRoutes.js
│ ├─ productRoutes.js
│ ├─ productSearchRoutes.js
│ ├─ sellerCentralRoutes.js
│ ├─ sellerRoutes.js
│ └─ userRoutes.js
├─ server.js
└─ service-account-key.json
```
## Setup & Installation

### Prerequisites

- **Node.js** (v12+)
- **MS SQL Server**
- **Stripe account** (for payment processing)
- **Cloudinary account** (for image storage)
- **Git**

### Environment Variables

Create a `.env` file in both the `client` and `server` directories with the necessary configurations.

**Client Example:**

VITE_FIREBASE_API_KEY=
VITE_FIREBASE_AUTH_DOMAIN=
VITE_FIREBASE_PROJECT_ID=
VITE_FIREBASE_STORAGE_BUCKET=
VITE_FIREBASE_MESSAGING_SENDER_ID=
VITE_FIREBASE_APP_ID=

VITE_CLOUDINARY_CLOUD_NAME=
VITE_CLOUDINARY_API_KEY=
VITE_CLOUDINARY_API_SECRET=
VITE_CLOUDINARY_URL=
VITE_CLOUDINARY_UPLOAD_PRESET=

VITE_STRIPE_PUBLIC_KEY=

**Server Example:**

PORT=5000

DB_USER=
DB_PASSWORD=
DB_SERVER=
DB_PORT=1433
DB_DATABASE=
DB_ENCRYPT=
DB_TRUST_SERVER_CERTIFICATE=

STRIPE_SECRET_KEY=
STRIPE_PUBLIC_KEY=
STRIPE_WEBHOOK_SECRET=

CLIENT_ID=
CLIENT_SECRET=
REFRESH_TOKEN=
ACCESS_TOKEN=
EMAIL_USER=

## Also required service account key for Firebase
