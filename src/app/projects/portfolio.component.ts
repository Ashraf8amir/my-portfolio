import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { FooterComponent } from '../footer/footer.component';
import { Card } from '../_models/card';
import { Tag } from '../_models/tags';
import { ScrollService } from '../services/scroll.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [FooterComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css',
  providers: []
})
export class PortfolioComponent implements OnInit {

  projects: Card[] = [
    {
      id: 1,
      name: "SmartFit AI",
      summary: "A personal fitness coach using computer vision and pose detection.",
      description: "SmartFit AI uses TensorFlow.js and BlazePose to provide real-time posture feedback for exercises like squats and pushups. Users get voice instructions and correction cues. It has a React-based frontend and a Flask backend storing session logs and improvement stats. Users can register and track their fitness performance over time through visual graphs.",
      projectLink: 'https://github.com',
      tags: [Tag.REACT, Tag.FLASK, Tag.TENSORFLOWJS, Tag.PYTHON, Tag.HTML5, Tag.CSS3],
      pictures: ["../../assets/p1.jpg"]
    },
    {
      id: 2,
      name: "CodeSnap",
      summary: "A social media platform for developers to share and discuss code snippets.",
      description: "CodeSnap allows developers to share code snippets, get feedback, and follow others. Built with Django REST Framework and a Vue.js frontend. Features include syntax-highlighted snippets, comments, likes, and topic tagging. Users can create profiles, follow topics, and bookmark interesting posts. The platform also uses Redis for caching and Celery for handling async email notifications.",
      projectLink: "https://github.com",
      tags: [Tag.DJANGO, Tag.VUEJS, Tag.REDIS, Tag.CELERY, Tag.PYTHON, Tag.POSTGRESQL],
      pictures: ["../../assets/p2.jpeg"]
    },
    {
      id: 3,
      name: "FinWise",
      summary: "A personal finance dashboard to track income, spending, and savings goals.",
      description: "FinWise helps users manage their personal finances by visualizing income, expenses, and budgets using D3.js and Chart.js. The platform is built with Next.js and Node.js and uses Firebase for user authentication and Firestore for real-time data storage. It supports goal setting, recurring expenses, and financial tips using AI prompts.",
      projectLink: "https://github.com",
      tags: [Tag.NEXTJS, Tag.FIREBASE, Tag.CHARTJS, Tag.D3JS, Tag.NODEJS, Tag.TYPESCRIPT],
      pictures: ["../../assets/p3.webp"]
    },
    {
      id: 4,
      name: "VoiceNotes AI",
      summary: "A speech-to-text note-taking app with summarization features.",
      description: "VoiceNotes AI is a productivity tool that transcribes and summarizes spoken content. It uses Whisper API for speech-to-text conversion and OpenAI GPT for summarization. Users can record, tag, and search notes. Backend is Flask-based with MongoDB, while frontend is built using React. Auth handled with JWT.",
      projectLink: "https://github.com",
      tags: [Tag.FLASK, Tag.REACT, Tag.OPENAI, Tag.WHISPER, Tag.JWT, Tag.MONGODB],
      pictures: ["../../assets/p4.png"]
    },
    {
      id: 5,
      name: "AgriSense",
      summary: "A smart dashboard for monitoring real-time environmental data in agriculture using IoT and MQTT.",
      description: "AgriSense provides a real-time web interface to monitor temperature, humidity, and soil moisture from remote sensors using MQTT protocol and a Raspberry Pi. The system includes a Node.js MQTT broker, Python sensor publisher, and a React dashboard displaying analytics via Chart.js. PostgreSQL stores historical sensor data for trend analysis.",
      projectLink: "https://github.com",
      tags: [Tag.PYTHON, Tag.REACT, Tag.MQTT, Tag.POSTGRESQL, Tag.NODEJS, Tag.IOT, Tag.CHARTJS],
      pictures: ["../../assets/p5.jpg"]
    },
    {
      id: 6,
      name: "GreenCart",
      summary: "An eco-friendly e-commerce platform promoting sustainable shopping built with MERN stack.",
      description: "GreenCart is an e-commerce platform built using the MERN stack (MongoDB, Express.js, React, Node.js), focused on promoting sustainable products. The platform supports user authentication, product filtering by sustainability categories, a dynamic cart system, Stripe-based checkout, and admin dashboards to manage inventory. It includes real-time product search, wishlist saving, and order tracking. Deployed on Heroku with MongoDB Atlas.",
      projectLink: "https://github.com",
      tags: [Tag.JAVASCRIPT, Tag.REACT, Tag.NODEJS, Tag.EXPRESS, Tag.MONGODB, Tag.STRIPE, Tag.HEROKU],
      pictures: ["../../assets/p6.webp"]
    },

  ]


  constructor(
    private titleService: Title,
    private scrollService: ScrollService
  ) {
    this.titleService.setTitle('BC | Portfolio')
  }

  ngOnInit(): void {
    this.scrollService.scrollToTopInstant();

    if (window.performance && window.performance.navigation.type === window.performance.navigation.TYPE_RELOAD) {
      this.scrollService.handleRefresh();
    }
  }

  trackById(index: number, project: Card): number {
    return project.id;
  }

  openProjectLink(project: Card) {
    if (project.projectLink) {
      window.open(project.projectLink, '_blank');
    }
  }

}
