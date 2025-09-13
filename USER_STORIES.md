# Alora - User Stories & Acceptance Criteria

## Epic 1: User Onboarding & Authentication

### Story 1.1: User Registration
**As a** new user  
**I want to** create an account with my email  
**So that** I can access personalized cycle-based recommendations

#### Acceptance Criteria
- [ ] User can enter email and password
- [ ] Password meets security requirements (8+ chars, mixed case, numbers)
- [ ] Email validation prevents invalid formats
- [ ] Account creation sends confirmation email
- [ ] User is redirected to onboarding after successful registration
- [ ] Error messages are clear and helpful

#### Definition of Done
- [ ] Unit tests cover all validation scenarios
- [ ] Integration tests verify email sending
- [ ] UI is accessible (WCAG 2.1 AA)
- [ ] Error handling is user-friendly

### Story 1.2: User Login
**As a** returning user  
**I want to** log in with my credentials  
**So that** I can access my personalized dashboard

#### Acceptance Criteria
- [ ] User can enter email and password
- [ ] Login validates credentials against database
- [ ] Successful login redirects to dashboard
- [ ] Failed login shows appropriate error message
- [ ] "Remember me" option works correctly
- [ ] Password reset functionality is available

#### Definition of Done
- [ ] Authentication is secure (JWT tokens)
- [ ] Session management works correctly
- [ ] Rate limiting prevents brute force attacks
- [ ] Tests cover success and failure scenarios

### Story 1.3: Initial Cycle Phase Selection
**As a** new user  
**I want to** select my current cycle phase  
**So that** I can get relevant recommendations from day one

#### Acceptance Criteria
- [ ] User sees 4 cycle phase options with clear descriptions
- [ ] Each phase has visual indicators and characteristics
- [ ] User can select current phase
- [ ] Selection is saved to user profile
- [ ] User can change selection later
- [ ] Tooltip explains each phase in simple terms

#### Definition of Done
- [ ] Phase selection is persisted in database
- [ ] UI is intuitive and mobile-friendly
- [ ] Accessibility requirements are met
- [ ] User can proceed to main app after selection

## Epic 2: Daily Input & Tracking

### Story 2.1: Daily Mood Input
**As a** user  
**I want to** log my daily mood  
**So that** the app can personalize my recommendations

#### Acceptance Criteria
- [ ] User sees mood scale from 1-5 (Low to Great)
- [ ] Each level has clear description
- [ ] User can select mood with slider or buttons
- [ ] Selection is saved automatically
- [ ] User can change mood selection during the day
- [ ] Mood history is visible in calendar view

#### Definition of Done
- [ ] Mood data is stored securely
- [ ] Input form is quick to complete (< 30 seconds)
- [ ] Data validation prevents invalid inputs
- [ ] UI works on all device sizes

### Story 2.2: Daily Energy Input
**As a** user  
**I want to** log my daily energy level  
**So that** recommendations match my current capacity

#### Acceptance Criteria
- [ ] User sees energy scale from 1-5 (Very Low to Very High)
- [ ] Each level has clear description
- [ ] User can select energy with slider or buttons
- [ ] Selection is saved automatically
- [ ] User can change energy selection during the day
- [ ] Energy history is visible in calendar view

#### Definition of Done
- [ ] Energy data is stored securely
- [ ] Input form is quick to complete (< 30 seconds)
- [ ] Data validation prevents invalid inputs
- [ ] UI works on all device sizes

### Story 2.3: Symptom Tracking
**As a** user  
**I want to** log my cycle-related symptoms  
**So that** the app can provide more accurate recommendations

#### Acceptance Criteria
- [ ] User sees list of common symptoms (cramps, bloating, fatigue, etc.)
- [ ] User can select multiple symptoms
- [ ] User can add custom symptoms
- [ ] Symptom selection is saved automatically
- [ ] Symptoms are linked to cycle phase
- [ ] Symptom history is visible in calendar view

#### Definition of Done
- [ ] Symptom data is stored securely
- [ ] Input form is quick to complete (< 30 seconds)
- [ ] Data validation prevents invalid inputs
- [ ] UI works on all device sizes

### Story 2.4: Daily Notes
**As a** user  
**I want to** add optional notes to my daily input  
**So that** I can provide additional context for recommendations

#### Acceptance Criteria
- [ ] User can add optional text notes
- [ ] Notes are limited to 500 characters
- [ ] Notes are saved automatically
- [ ] Notes are visible in calendar view
- [ ] Notes can be edited or deleted
- [ ] Notes are included in data export

#### Definition of Done
- [ ] Notes data is stored securely
- [ ] Input form is quick to complete (< 30 seconds)
- [ ] Data validation prevents invalid inputs
- [ ] UI works on all device sizes

## Epic 3: Recommendations & Personalization

### Story 3.1: Daily Recommendations Display
**As a** user  
**I want to** see my daily recommendations at a glance  
**So that** I can plan my day effectively

#### Acceptance Criteria
- [ ] User sees 4 recommendation cards: Work, Exercise, Nutrition, Social
- [ ] Each card shows clear, actionable recommendations
- [ ] Recommendations are prioritized (High, Medium, Low)
- [ ] User can mark recommendations as completed
- [ ] User can refresh recommendations
- [ ] Recommendations are personalized based on cycle phase and inputs

#### Definition of Done
- [ ] Recommendations are generated accurately
- [ ] UI is clean and easy to scan
- [ ] Completion tracking works correctly
- [ ] Performance is fast (< 500ms load time)

### Story 3.2: Work Recommendations
**As a** user  
**I want to** get work-related recommendations based on my cycle phase  
**So that** I can optimize my productivity

#### Acceptance Criteria
- [ ] Recommendations consider current cycle phase
- [ ] Recommendations consider mood and energy levels
- [ ] Recommendations are specific and actionable
- [ ] Examples: "Focus on creative tasks" (ovulatory), "Take breaks frequently" (menstrual)
- [ ] User can mark work recommendations as completed
- [ ] User can provide feedback on recommendation quality

#### Definition of Done
- [ ] Work recommendations are scientifically informed
- [ ] Personalization works correctly
- [ ] User feedback is collected and processed
- [ ] Recommendations are updated based on feedback

### Story 3.3: Exercise Recommendations
**As a** user  
**I want to** get exercise recommendations based on my cycle phase  
**So that** I can maintain fitness while respecting my body's needs

#### Acceptance Criteria
- [ ] Recommendations consider current cycle phase
- [ ] Recommendations consider mood and energy levels
- [ ] Recommendations include intensity and duration
- [ ] Examples: "Light yoga" (menstrual), "High-intensity training" (ovulatory)
- [ ] User can mark exercise recommendations as completed
- [ ] User can provide feedback on recommendation quality

#### Definition of Done
- [ ] Exercise recommendations are scientifically informed
- [ ] Personalization works correctly
- [ ] User feedback is collected and processed
- [ ] Recommendations are updated based on feedback

### Story 3.4: Nutrition Recommendations
**As a** user  
**I want to** get nutrition recommendations based on my cycle phase  
**So that** I can support my body's nutritional needs

#### Acceptance Criteria
- [ ] Recommendations consider current cycle phase
- [ ] Recommendations consider mood and energy levels
- [ ] Recommendations include specific foods and nutrients
- [ ] Examples: "Iron-rich foods" (menstrual), "Complex carbs" (luteal)
- [ ] User can mark nutrition recommendations as completed
- [ ] User can provide feedback on recommendation quality

#### Definition of Done
- [ ] Nutrition recommendations are scientifically informed
- [ ] Personalization works correctly
- [ ] User feedback is collected and processed
- [ ] Recommendations are updated based on feedback

### Story 3.5: Social Recommendations
**As a** user  
**I want to** get social activity recommendations based on my cycle phase  
**So that** I can maintain healthy relationships while respecting my energy

#### Acceptance Criteria
- [ ] Recommendations consider current cycle phase
- [ ] Recommendations consider mood and energy levels
- [ ] Recommendations include social activities and interactions
- [ ] Examples: "Quiet time with close friends" (menstrual), "Social gatherings" (ovulatory)
- [ ] User can mark social recommendations as completed
- [ ] User can provide feedback on recommendation quality

#### Definition of Done
- [ ] Social recommendations are scientifically informed
- [ ] Personalization works correctly
- [ ] User feedback is collected and processed
- [ ] Recommendations are updated based on feedback

## Epic 4: Privacy & Data Control

### Story 4.1: Privacy Dashboard
**As a** user  
**I want to** see how my data is being used  
**So that** I can trust the app with my personal information

#### Acceptance Criteria
- [ ] User sees clear explanation of data usage
- [ ] User sees what data is collected and why
- [ ] User sees data retention policies
- [ ] User sees third-party sharing policies
- [ ] User can control data collection preferences
- [ ] Privacy settings are easy to understand

#### Definition of Done
- [ ] Privacy dashboard is transparent and clear
- [ ] All data usage is explained in plain language
- [ ] User controls work correctly
- [ ] Privacy settings are persisted

### Story 4.2: Data Export
**As a** user  
**I want to** export my data  
**So that** I can have a copy of my information

#### Acceptance Criteria
- [ ] User can request data export
- [ ] Export includes all user data (inputs, recommendations, settings)
- [ ] Export is available in JSON and CSV formats
- [ ] Export is generated within 24 hours
- [ ] User receives email notification when export is ready
- [ ] Export file is secure and encrypted

#### Definition of Done
- [ ] Data export works correctly
- [ ] Export includes all relevant data
- [ ] Export is secure and encrypted
- [ ] User receives timely notification

### Story 4.3: Data Deletion
**As a** user  
**I want to** delete my data  
**So that** I can remove my information from the app

#### Acceptance Criteria
- [ ] User can request data deletion
- [ ] Deletion includes all user data
- [ ] Deletion is permanent and irreversible
- [ ] User receives confirmation of deletion
- [ ] Deletion is completed within 30 days
- [ ] User can cancel deletion request within 24 hours

#### Definition of Done
- [ ] Data deletion works correctly
- [ ] All user data is permanently removed
- [ ] Deletion is secure and auditable
- [ ] User receives confirmation

### Story 4.4: Consent Management
**As a** user  
**I want to** control what data is collected  
**So that** I can customize my privacy preferences

#### Acceptance Criteria
- [ ] User can opt in/out of data collection
- [ ] User can opt in/out of personalization
- [ ] User can opt in/out of analytics
- [ ] User can opt in/out of marketing communications
- [ ] Consent changes are applied immediately
- [ ] User can see current consent status

#### Definition of Done
- [ ] Consent management works correctly
- [ ] Consent changes are applied immediately
- [ ] Consent status is clearly displayed
- [ ] Consent is auditable and trackable

## Epic 5: Cycle History & Insights

### Story 5.1: Cycle History Calendar
**As a** user  
**I want to** see my cycle history in a calendar view  
**So that** I can track patterns over time

#### Acceptance Criteria
- [ ] User sees calendar with cycle phase indicators
- [ ] User can navigate between months
- [ ] User can see mood and energy trends
- [ ] User can see symptom patterns
- [ ] User can click on dates to see details
- [ ] Calendar is responsive and mobile-friendly

#### Definition of Done
- [ ] Calendar displays correctly
- [ ] Navigation works smoothly
- [ ] Data is accurate and up-to-date
- [ ] UI is accessible and responsive

### Story 5.2: Pattern Recognition
**As a** user  
**I want to** see insights about my cycle patterns  
**So that** I can better understand my body

#### Acceptance Criteria
- [ ] User sees average cycle length
- [ ] User sees mood patterns by phase
- [ ] User sees energy patterns by phase
- [ ] User sees symptom patterns by phase
- [ ] User sees recommendation effectiveness
- [ ] Insights are presented in clear, actionable format

#### Definition of Done
- [ ] Pattern recognition is accurate
- [ ] Insights are scientifically valid
- [ ] UI is clear and easy to understand
- [ ] Data is presented in accessible format

### Story 5.3: Cycle Predictions
**As a** user  
**I want to** see predictions for my next cycle  
**So that** I can plan ahead

#### Acceptance Criteria
- [ ] User sees predicted next cycle start date
- [ ] User sees predicted phase transitions
- [ ] Predictions are based on historical data
- [ ] Predictions include confidence levels
- [ ] User can see prediction accuracy over time
- [ ] Predictions are updated as new data is added

#### Definition of Done
- [ ] Predictions are accurate
- [ ] Predictions are updated regularly
- [ ] Confidence levels are displayed
- [ ] Prediction accuracy is tracked

## Epic 6: Wearable Integration (Stretch)

### Story 6.1: Apple Health Integration
**As a** user  
**I want to** connect my Apple Health data  
**So that** I can get more accurate recommendations

#### Acceptance Criteria
- [ ] User can connect Apple Health account
- [ ] App can read heart rate, sleep, and step data
- [ ] Data is used to enhance recommendations
- [ ] User can control what data is shared
- [ ] Data sync happens automatically
- [ ] User can disconnect at any time

#### Definition of Done
- [ ] Apple Health integration works correctly
- [ ] Data is used to improve recommendations
- [ ] User controls work correctly
- [ ] Data sync is reliable

### Story 6.2: Google Fit Integration
**As a** user  
**I want to** connect my Google Fit data  
**So that** I can get more accurate recommendations

#### Acceptance Criteria
- [ ] User can connect Google Fit account
- [ ] App can read heart rate, sleep, and step data
- [ ] Data is used to enhance recommendations
- [ ] User can control what data is shared
- [ ] Data sync happens automatically
- [ ] User can disconnect at any time

#### Definition of Done
- [ ] Google Fit integration works correctly
- [ ] Data is used to improve recommendations
- [ ] User controls work correctly
- [ ] Data sync is reliable

## Epic 7: Notifications & Reminders (Stretch)

### Story 7.1: Daily Reminders
**As a** user  
**I want to** receive daily reminders to check my recommendations  
**So that** I don't forget to use the app

#### Acceptance Criteria
- [ ] User can set reminder time
- [ ] User receives gentle daily reminder
- [ ] Reminder includes today's focus
- [ ] User can customize reminder content
- [ ] User can disable reminders
- [ ] Reminders are not intrusive

#### Definition of Done
- [ ] Reminders work correctly
- [ ] Reminders are customizable
- [ ] Reminders are not intrusive
- [ ] User can control reminder settings

### Story 7.2: Phase Transition Alerts
**As a** user  
**I want to** be notified when I'm transitioning between cycle phases  
**So that** I can adjust my activities accordingly

#### Acceptance Criteria
- [ ] User receives notification when phase changes
- [ ] Notification includes new phase information
- [ ] Notification includes key recommendations for new phase
- [ ] User can customize notification timing
- [ ] User can disable phase transition alerts
- [ ] Notifications are helpful and informative

#### Definition of Done
- [ ] Phase transition alerts work correctly
- [ ] Alerts are timely and accurate
- [ ] Alerts are helpful and informative
- [ ] User can control alert settings

## Epic 8: Sharing & Collaboration (Stretch)

### Story 8.1: Healthcare Provider Sharing
**As a** user  
**I want to** share my cycle insights with my healthcare provider  
**So that** they can better support my health

#### Acceptance Criteria
- [ ] User can generate summary report
- [ ] Report includes cycle patterns and insights
- [ ] Report is anonymized by default
- [ ] User can share via email or print
- [ ] User can control what information is included
- [ ] Report is professional and easy to understand

#### Definition of Done
- [ ] Report generation works correctly
- [ ] Reports are professional and clear
- [ ] User controls work correctly
- [ ] Sharing is secure and private

### Story 8.2: Coach Collaboration
**As a** user  
**I want to** share my cycle insights with my coach  
**So that** they can adjust my training accordingly

#### Acceptance Criteria
- [ ] User can generate training-focused report
- [ ] Report includes exercise recommendations and patterns
- [ ] Report is anonymized by default
- [ ] User can share via email or print
- [ ] User can control what information is included
- [ ] Report is relevant for coaching purposes

#### Definition of Done
- [ ] Report generation works correctly
- [ ] Reports are relevant for coaching
- [ ] User controls work correctly
- [ ] Sharing is secure and private

## Acceptance Criteria Standards

### General Standards
- [ ] All features work on mobile and desktop
- [ ] All features are accessible (WCAG 2.1 AA)
- [ ] All features have proper error handling
- [ ] All features have loading states
- [ ] All features have proper validation
- [ ] All features are tested (unit, integration, e2e)

### Performance Standards
- [ ] Page load time < 2 seconds
- [ ] API response time < 500ms
- [ ] Recommendation generation < 1 second
- [ ] App works offline (basic functionality)
- [ ] App is responsive on all screen sizes

### Security Standards
- [ ] All data is encrypted in transit and at rest
- [ ] Authentication is secure and reliable
- [ ] User data is protected from unauthorized access
- [ ] Privacy controls work correctly
- [ ] Data deletion is permanent and secure

---

*These user stories will be updated based on user feedback and technical constraints.*
