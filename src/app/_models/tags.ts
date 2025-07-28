
export class Tag {
    static readonly ANGULAR = new Tag('Angular', '#5a7581');
    static readonly JAVA = new Tag('Java', '#5a7581');
    static readonly SPRINGBOOT = new Tag('Spring Boot', '#5a7581');
    static readonly SPRINGSECURITY = new Tag('Spring Security', '#5a7581');
    static readonly SPRINGJWT = new Tag('Spring JWT', '#5a7581');
    static readonly SPRINGWEB = new Tag('Spring Web', '#5a7581');
    static readonly LOMBOK = new Tag('Lombok', '#5a7581');
    static readonly JPA = new Tag('JPA', '#5a7581');
    static readonly JDBC = new Tag('JDBC', '#5a7581');
    static readonly POSTGRESQL = new Tag('PostgreSQL', '#355158')
    static readonly SQL = new Tag('SQL', '#355158');
    static readonly SQLALCHEMY = new Tag('SQLAlchemy', '#4a6a77');
    static readonly PYTHON = new Tag('Python', '#4a6a77');
    static readonly FLASK = new Tag('Flask', '#4a6a77');
    static readonly BEAUTIFULSOUP = new Tag('Beautiful Soup', '#4a6a77');
    static readonly PLAYWWRIGHT = new Tag('Playwright', '#4a6a77');
    static readonly SELENIUM = new Tag('Selenium Driver', '#4a6a77');
    static readonly PANDAS = new Tag('Pandas', '#4a6a77');
    static readonly DASH = new Tag('Dash', '#4a6a77');
    static readonly PLOTLY = new Tag('Plotly', '#4a6a77');
    static readonly RESTAPI = new Tag('Rest API', '#355158');
    static readonly INSOMNIA = new Tag('Insomnia', '#355158');
    static readonly POSTMAN = new Tag('Postman', '#355158');
    static readonly TYPESCRIPT = new Tag('Typescript', '#192129');
    static readonly JAVASCRIPT = new Tag('Javascript', '#192129');
    static readonly HTML5 = new Tag('HTML5', '#192129');
    static readonly CSS3 = new Tag('CSS3', '#192129');
    static readonly BOOTSTRAP = new Tag('Bootstrap', '#192129');
    static readonly PYTEST = new Tag('Pytest', '#4a6a77');
    static readonly JUNIT = new Tag('JUnit', '#5a7581');
    static readonly MOCKITO = new Tag('Mockito', '#5a7581');
    static readonly DOCKER = new Tag('Docker', '#355158');
    static readonly DOCKERCOMPOSE = new Tag('Docker Compose', '#355158');
    static readonly VUEJS = new Tag('Vue.JS', '#192129');
    static readonly HIBERNATE = new Tag('Hibernate', '#5a7581');
    static readonly FASTAPI = new Tag('FastAPI', '#4a6a77');
    static readonly SQLITE = new Tag('SQLite', '#355158');
    static readonly PYDANTIC = new Tag('Pydantic', '##4a6a77');
    static readonly GOLANG = new Tag('Golang', '#457189');
    static readonly RABBITMQ = new Tag('RabbitMQ', '#457189' )
    static readonly TENSORFLOWJS = new Tag('TensorFlow.js', '#457189');
    static readonly REACT = new Tag('React', '#457189');
    static readonly TAILWIND = new Tag('Tailwind', '#457189');
    static readonly DJANGO = new Tag('Django', '#457189');
    static readonly DJANGORESTFRAMEWORK = new Tag('Django Rest Framework', '#457189');
    static readonly REDIS = new Tag('Redis', '#457189');
    static readonly CELERY = new Tag('Celery', '#457189');
    static readonly NEXTJS = new Tag('Next.js', '#457189');
    static readonly FIREBASE = new Tag('Firebase', '#457189');
    static readonly CHARTJS = new Tag('Chart.js', '#457189');
    static readonly D3JS = new Tag('D3.js', '#457189');
    static readonly NODEJS = new Tag('Node.js', '#457189');
    static readonly MONGODB = new Tag('MongoDB', '#457189');
    static readonly OPENAI = new Tag('OpenAI', '#457189');
    static readonly WHISPER = new Tag('Whisper', '#457189');
    static readonly JWT = new Tag('JWT', '#457189');
    static readonly MQTT = new Tag('MQTT', '#457189');
    static readonly IOT = new Tag('IoT', '#457189');
    static readonly EXPRESS = new Tag('Express', '#457189');
    static readonly HEROKU = new Tag('Heroku', '#457189');
    static readonly STRIPE = new Tag('Stripe', '#457189');





    private constructor(private readonly key: string, public readonly color: string) {
    }

    toString() {
        return this.key;
    }

}
