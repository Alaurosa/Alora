# Alora - Technical Architecture

## System Overview

Alora is a modern web application built with a focus on privacy, performance, and personalization. The architecture follows a microservices-inspired approach with clear separation of concerns.

## High-Level Architecture

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Frontend      │    │   Backend API   │    │   AI Service    │
│   (Next.js)     │◄──►│   (Express)     │◄──►│   (OpenAI)      │
└─────────────────┘    └─────────────────┘    └─────────────────┘
         │                       │                       │
         │                       │                       │
         ▼                       ▼                       ▼
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   CDN/Static    │    │   Database      │    │   Cache Layer   │
│   (Vercel)      │    │   (PostgreSQL)  │    │   (Redis)       │
└─────────────────┘    └─────────────────┘    └─────────────────┘
```

## Frontend Architecture

### Technology Stack
- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS + Headless UI
- **State Management**: Zustand
- **Forms**: React Hook Form + Zod validation
- **Charts**: Recharts
- **Testing**: Jest + React Testing Library

### Project Structure
```
src/
├── app/                    # Next.js App Router
│   ├── (auth)/            # Auth route group
│   ├── dashboard/         # Main app pages
│   ├── privacy/           # Privacy dashboard
│   └── api/               # API routes
├── components/            # Reusable components
│   ├── ui/               # Base UI components
│   ├── forms/            # Form components
│   └── charts/           # Chart components
├── lib/                  # Utilities and configurations
│   ├── auth.ts           # Authentication config
│   ├── db.ts             # Database client
│   └── validations.ts    # Zod schemas
├── stores/               # Zustand stores
├── types/                # TypeScript type definitions
└── hooks/                # Custom React hooks
```

### Key Components

#### 1. Cycle Phase Selector
```typescript
interface CyclePhaseSelectorProps {
  currentPhase: CyclePhase['id'];
  onPhaseChange: (phase: CyclePhase['id']) => void;
  disabled?: boolean;
}
```

#### 2. Daily Input Form
```typescript
interface DailyInputFormProps {
  onSubmit: (data: DailyInput) => void;
  initialData?: Partial<DailyInput>;
  isLoading?: boolean;
}
```

#### 3. Recommendations Dashboard
```typescript
interface RecommendationsDashboardProps {
  recommendations: Recommendation[];
  onComplete: (id: string) => void;
  onRefresh: () => void;
  isLoading?: boolean;
}
```

## Backend Architecture

### Technology Stack
- **Runtime**: Node.js with Express
- **Language**: TypeScript
- **Database**: PostgreSQL with Prisma ORM
- **Caching**: Redis
- **Authentication**: NextAuth.js
- **Validation**: Zod
- **Testing**: Jest + Supertest

### API Structure
```
api/
├── auth/                 # Authentication endpoints
├── users/               # User management
├── cycles/              # Cycle data management
├── recommendations/     # Recommendation generation
├── privacy/             # Privacy controls
└── health/              # Health checks
```

### Database Schema

#### Core Tables
```sql
-- Users table
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email VARCHAR(255) UNIQUE NOT NULL,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW(),
  privacy_settings JSONB DEFAULT '{}',
  preferences JSONB DEFAULT '{}'
);

-- Cycle phases table
CREATE TABLE cycle_phases (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  phase VARCHAR(20) NOT NULL,
  start_date DATE NOT NULL,
  end_date DATE,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Daily inputs table
CREATE TABLE daily_inputs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  date DATE NOT NULL,
  cycle_phase VARCHAR(20) NOT NULL,
  mood INTEGER CHECK (mood >= 1 AND mood <= 5),
  energy INTEGER CHECK (energy >= 1 AND energy <= 5),
  symptoms TEXT[],
  notes TEXT,
  created_at TIMESTAMP DEFAULT NOW(),
  UNIQUE(user_id, date)
);

-- Recommendations table
CREATE TABLE recommendations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  date DATE NOT NULL,
  category VARCHAR(20) NOT NULL,
  title VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  priority VARCHAR(10) NOT NULL,
  estimated_time VARCHAR(50),
  completed BOOLEAN DEFAULT FALSE,
  personalized BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT NOW()
);
```

### API Endpoints

#### Authentication
```typescript
POST /api/auth/signin
POST /api/auth/signout
GET  /api/auth/session
```

#### User Management
```typescript
GET    /api/users/profile
PUT    /api/users/profile
DELETE /api/users/account
```

#### Cycle Data
```typescript
GET  /api/cycles/current
POST /api/cycles/phase
GET  /api/cycles/history
```

#### Daily Inputs
```typescript
GET  /api/inputs/today
POST /api/inputs
PUT  /api/inputs/:id
GET  /api/inputs/history
```

#### Recommendations
```typescript
GET  /api/recommendations/today
POST /api/recommendations/generate
PUT  /api/recommendations/:id/complete
GET  /api/recommendations/history
```

#### Privacy
```typescript
GET  /api/privacy/settings
PUT  /api/privacy/settings
POST /api/privacy/export
DELETE /api/privacy/data
```

## AI/ML Integration

### Personalization Engine
```typescript
interface PersonalizationEngine {
  generateRecommendations(
    userProfile: UserProfile,
    cyclePhase: CyclePhase,
    dailyInput: DailyInput,
    historicalData: HistoricalData
  ): Promise<Recommendation[]>;
}

interface UserProfile {
  preferences: UserPreferences;
  patterns: UserPatterns;
  feedback: UserFeedback[];
}
```

### Recommendation Templates
```typescript
interface RecommendationTemplate {
  phase: CyclePhase['id'];
  category: Recommendation['category'];
  baseRecommendations: BaseRecommendation[];
  personalizationRules: PersonalizationRule[];
}

interface BaseRecommendation {
  title: string;
  description: string;
  priority: 'low' | 'medium' | 'high';
  estimatedTime: string;
  conditions: string[];
}
```

### AI Service Integration
```typescript
class AIRecommendationService {
  async generatePersonalizedRecommendations(
    baseRecommendations: BaseRecommendation[],
    userContext: UserContext
  ): Promise<Recommendation[]> {
    const prompt = this.buildPrompt(baseRecommendations, userContext);
    const response = await this.openai.chat.completions.create({
      model: "gpt-4",
      messages: [{ role: "user", content: prompt }],
      temperature: 0.7,
    });
    return this.parseRecommendations(response.choices[0].message.content);
  }
}
```

## Security Architecture

### Authentication & Authorization
- **JWT Tokens**: Secure token-based authentication
- **Session Management**: Redis-based session storage
- **Role-Based Access**: User and admin roles
- **Rate Limiting**: API rate limiting with Redis

### Data Protection
- **Encryption**: AES-256 encryption for sensitive data
- **Hashing**: bcrypt for password hashing
- **HTTPS**: TLS 1.3 for all communications
- **CORS**: Configured CORS policies

### Privacy Controls
```typescript
interface PrivacyControls {
  dataRetention: number; // days
  anonymization: boolean;
  encryption: boolean;
  accessLogging: boolean;
  exportFormat: 'json' | 'csv';
  deleteOnRequest: boolean;
}
```

## Performance Optimization

### Frontend Optimization
- **Code Splitting**: Dynamic imports for route-based splitting
- **Image Optimization**: Next.js Image component with WebP
- **Caching**: Service worker for offline functionality
- **Bundle Analysis**: Webpack bundle analyzer

### Backend Optimization
- **Database Indexing**: Optimized indexes for common queries
- **Query Optimization**: Prisma query optimization
- **Caching**: Redis for frequently accessed data
- **Connection Pooling**: Database connection pooling

### CDN & Static Assets
- **Vercel Edge**: Global CDN for static assets
- **Image CDN**: Optimized image delivery
- **API Caching**: Edge caching for API responses

## Monitoring & Observability

### Error Tracking
- **Sentry**: Error tracking and performance monitoring
- **Logging**: Structured logging with Winston
- **Alerts**: Automated error alerts

### Analytics
- **PostHog**: User analytics and feature flags
- **Custom Metrics**: Business-specific metrics
- **Performance Monitoring**: Core Web Vitals tracking

### Health Checks
```typescript
interface HealthCheck {
  status: 'healthy' | 'degraded' | 'unhealthy';
  services: {
    database: ServiceStatus;
    redis: ServiceStatus;
    openai: ServiceStatus;
  };
  timestamp: string;
}
```

## Deployment Architecture

### Development Environment
- **Local Development**: Docker Compose for local services
- **Database**: PostgreSQL with Docker
- **Cache**: Redis with Docker
- **Environment**: dotenv for configuration

### Production Environment
- **Frontend**: Vercel deployment
- **Backend**: Railway/Heroku deployment
- **Database**: Managed PostgreSQL (Railway/Supabase)
- **Cache**: Managed Redis (Railway/Upstash)
- **CDN**: Vercel Edge Network

### CI/CD Pipeline
```yaml
# GitHub Actions workflow
name: Deploy
on:
  push:
    branches: [main]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Run tests
        run: npm test
      - name: Run linting
        run: npm run lint
  
  deploy:
    needs: test
    runs-on: ubuntu-latest
    steps:
      - name: Deploy to Vercel
        run: vercel --prod
```

## Scalability Considerations

### Horizontal Scaling
- **Stateless Backend**: Stateless API design for easy scaling
- **Database Sharding**: User-based sharding strategy
- **Load Balancing**: Multiple backend instances
- **CDN**: Global content delivery

### Performance Targets
- **Response Time**: < 500ms for API calls
- **Load Time**: < 2s for initial page load
- **Throughput**: 1000+ requests per second
- **Uptime**: 99.9% availability

### Cost Optimization
- **Serverless**: Vercel functions for API routes
- **Database Optimization**: Efficient queries and indexing
- **Caching**: Aggressive caching strategy
- **Resource Monitoring**: Cost tracking and optimization

---

*This architecture document will be updated as the system evolves and new requirements emerge.*
