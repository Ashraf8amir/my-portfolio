# My Portfolio - Angular Portfolio Website

A modern, responsive portfolio website built with Angular 20, showcasing my projects, skills, and contact information.

## 🚀 Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Modern UI**: Clean and professional design with smooth animations
- **Project Showcase**: Display projects with detailed descriptions and technologies used
- **Skills Section**: Highlight technical skills and expertise
- **Contact Form**: Easy way for visitors to get in touch
- **Smooth Navigation**: Seamless page transitions with scroll-to-top functionality

## 🛠️ Technologies Used

- **Angular 20**: Latest version of Angular framework
- **TypeScript**: For type-safe development
- **Bootstrap**: For responsive design and styling
- **HTML5 & CSS3**: Modern web standards
- **Git**: Version control

## 📁 Project Structure

```
src/
├── app/
│   ├── _models/          # Data models and interfaces
│   ├── about/            # About page component
│   ├── card/             # Project card component
│   ├── contact/          # Contact page component
│   ├── footer/           # Footer component
│   ├── header/           # Header navigation component
│   ├── home/             # Home page component
│   ├── portfolio/        # Portfolio/Projects page component
│   ├── services/         # Shared services (ScrollService)
│   └── skills/           # Skills page component
├── assets/               # Images and static files
└── styles.css           # Global styles
```

## 🚀 Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/my-portfolio.git
   cd my-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   ng serve
   ```

4. **Open your browser**
   Navigate to `http://localhost:4200/` to view the application.

## 📝 Available Scripts

- `ng serve` - Start development server
- `ng build` - Build the project for production
- `ng test` - Run unit tests
- `ng e2e` - Run end-to-end tests
- `ng lint` - Run linting

## 🎨 Customization

### Adding New Projects
Edit the `projects` array in `src/app/portfolio/portfolio.component.ts`:

```typescript
projects: Card[] = [
  {
    id: 1,
    name: "Project Name",
    summary: "Brief description",
    description: "Detailed description",
    projectLink: 'https://github.com/your-repo',
    tags: [Tag.REACT, Tag.NODEJS],
    pictures: ["../../assets/project-image.jpg"]
  }
]
```

### Updating Personal Information
- Edit `src/app/home/home.component.html` for home page content
- Update `src/app/about/about.component.html` for about section
- Modify `src/app/contact/contact.component.html` for contact information

## 🌐 Deployment

### Build for Production
```bash
ng build --configuration production
```

### Deploy to GitHub Pages
1. Build the project
2. Push to GitHub
3. Enable GitHub Pages in repository settings
4. Set source to `/docs` or `/gh-pages` branch

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

⭐ If you found this project helpful, please give it a star!
