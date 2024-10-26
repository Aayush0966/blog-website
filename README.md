# DevBlogsWorld 🌐✨

[![Netlify Status](https://api.netlify.com/api/v1/badges/63add309-6a6d-4520-b410-121c9da01bb0/deploy-status)](https://devblogsworld.netlify.app/home)

DevBlogsWorld is a dynamic developer-oriented blog platform that aggregates and showcases content from Dev.to. Built with modern web technologies, this project demonstrates the power and flexibility of Next.js while providing a seamless reading experience for developers.

## 🔴 Live Demo

Experience DevBlogsWorld live at: [HERE](https://devblogsworld.netlify.app/home)

## ✨ Key Features

- **Dynamic Content Integration** 📝
  - Real-time blog post fetching from Dev.to
  - Automatic content updates
  - Rich media support

- **Responsive Design** 📱
  - Mobile-first approach
  - Seamless viewing experience across devices
  - Adaptive layouts and components

- **User Experience** 🎨
  - Intuitive navigation
  - Fast page loads with Next.js
  - Clean, modern interface

- **Customization** ⚙️
  - Dark/Light mode toggle
  - Responsive sidebar
  - Customizable reading preferences

## 🛠️ Tech Stack

- **Frontend Framework**
  - [Next.js](https://nextjs.org/) - React framework for production
  - [React](https://reactjs.org/) - UI library

- **Styling Solutions**
  - [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
  - [DaisyUI](https://daisyui.com/) - Tailwind CSS component library
  - [ShadCN UI](https://ui.shadcn.com/) - Sleek UI components

- **Data Source**
  - [Dev.to API](https://docs.dev.to/api/) - Content integration

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn
- Git

### Installation Steps

1. Clone the repository
```bash
git clone https://github.com/Aayush0966/blog-website.git
cd DevBlogsWorld
```

2. Install dependencies
```bash
npm install
# or
yarn install
```


### Environment Variables Setup

The project uses EmailJS for the contact form functionality. You'll need to set up the following environment variables:

1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Create a new email service and email template
3. Find your credentials:
   - `NEXT_EMAILJS_SERVICE_ID`: Your EmailJS service ID (found in Email Services)
   - `NEXT_EMAILJS_TEMPLATE_ID`: Your EmailJS template ID (found in Email Templates)
   - `NEXT_EMAILJS_USER_ID`: Your EmailJS public key (found in Account > API Keys)

To set up your environment:
1. Rename `.env.example` to `.env`
2. Replace the placeholder values with your actual EmailJS credentials
3. Keep your `.env` file secure and never commit it to version control

Note: The repository includes an `.env.example` file for reference. Make sure to create your own `.env` file with your actual credentials.



3. Start the development server
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🔧 Configuration

The project can be configured through the following files:
- `next.config.js` - Next.js configuration
- `tailwind.config.js` - Tailwind CSS configuration
- `postcss.config.js` - PostCSS configuration



## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.


## 🙏 Acknowledgements

- [Dev.to](https://dev.to/) for providing the API and amazing content
- [Next.js](https://nextjs.org/) team for the amazing framework
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [DaisyUI](https://daisyui.com/) for beautiful components
- [ShadCN UI](https://ui.shadcn.com/) for modern UI components

## 📞 Connect With Me

<div align="center">
  
[![Portfolio](https://img.shields.io/badge/Portfolio-255E63?style=for-the-badge&logo=About.me&logoColor=white)](https://aayushbudhathoki.com.np)
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Aayush0966)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](www.linkedin.com/in/aayush-budhathoki-102954332)
[![Email](https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:aayushx699@gmail.com)

</div>

---

<div align="center">

⭐️ If you like DevBlogsWorld, give it a star!

</div>