import dotenv from 'dotenv';
dotenv.config();

const TESTSPRITE_API_KEY = process.env.TESTSPRITE_API_KEY;

class AIPersonalization {
    mood: string;
    energyLevel: number;
    symptoms: string[];

    constructor() {
        this.mood = '';
        this.energyLevel = 0;
        this.symptoms = [];
    }

    async adjustPlan(userInput: { mood: string; energyLevel: number; symptoms: string[] }) {
        this.mood = userInput.mood;
        this.energyLevel = userInput.energyLevel;
        this.symptoms = userInput.symptoms;
        // Logic to adjust the daily plan based on user input

        // Send to TestSprite for real-time testing/debugging
        await sendTestToTestSprite({
            type: 'adjustPlan',
            data: userInput,
        });
    }

    async acceptWearableData(data: { heartRate: number; sleepQuality: number }) {
        // Logic to process wearable data and adjust personalization

        // Send to TestSprite for real-time testing/debugging
        await sendTestToTestSprite({
            type: 'wearableData',
            data,
        });
    }
}

async function sendTestToTestSprite(testData: object) {
    // Example: send testData to TestSprite API for validation/debugging
    // Replace with actual TestSprite SDK/API usage
    const response = await fetch('https://api.testsprite.com/v1/test', {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${TESTSPRITE_API_KEY}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(testData),
    });
    return response.json();
}

export default AIPersonalization;