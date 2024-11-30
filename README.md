# Next Cart

A mini e-commerce application that was built with Next.JS.
A project to practice implementing new features with a new js framework.

Features implemented for Next Cart:

- Product List: Created products list page.
- User Authentication: User authentication using Google OAuth.
- User Cart: Created user cart with the ability to merge anonymous user carts once logged into an account.
- Product Search: Created search bar and results page.
- Product Detail: Created product detail page. 
- Add product: Server action in server component to add products.

- Confirmation Email: A receipt email is sent to the user to confirm a purchase with the order number and details.
- Product Ratings: A logged in user can leave reviews on a product's detail page and delete their own reviews.

## Final Product
Product Page (Home Page)
<img width="1726" alt="Screenshot 2024-11-29 at 10 04 44 PM" src="https://github.com/user-attachments/assets/63de8d89-a1f0-4b7b-bc63-6481a5cf3b75">
Product Detail Page
!["Screenshot of the Product Page"](https://github.com/AleksandarDmitrovic/jungle-rails/blob/master/docs/products.png?raw=true)
Checkout Cart Page
!["Screenshot of Product details Page"](https://github.com/AleksandarDmitrovic/jungle-rails/blob/master/docs/product_details.png?raw=true)
Search Page
!["Screenshot of Order Confirmation Page"](https://github.com/AleksandarDmitrovic/jungle-rails/blob/master/docs/order_confirmation.png?raw=true)



## Setup

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.
