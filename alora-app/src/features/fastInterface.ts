export class FastInterface {
    private cyclePhase: string;
    private mood: string;

    constructor() {
        this.cyclePhase = '';
        this.mood = '';
    }

    selectCyclePhase(phase: string): void {
        this.cyclePhase = phase;
        console.log(`Cycle phase selected: ${this.cyclePhase}`);
    }

    selectMood(mood: string): void {
        this.mood = mood;
        console.log(`Mood selected: ${this.mood}`);
    }

    renderDashboard(recommendations: string[]): void {
        console.log("Rendering dashboard with recommendations:");
        recommendations.forEach(rec => {
            console.log(`- ${rec}`);
        });
    }
}