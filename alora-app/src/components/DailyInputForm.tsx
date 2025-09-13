'use client';

import { useState } from 'react';

interface SymptomOption {
  id: string;
  label: string;
  category: 'physical' | 'emotional' | 'other';
}

export default function DailyInputForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    date: new Date().toISOString().split('T')[0],
    flow: 'none',
    mood: 3,
    energy: 3,
    symptoms: [] as string[],
    notes: ''
  });

  const symptomOptions: SymptomOption[] = [
    { id: 'cramps', label: 'Cramps', category: 'physical' },
    { id: 'headache', label: 'Headache', category: 'physical' },
    { id: 'bloating', label: 'Bloating', category: 'physical' },
    { id: 'fatigue', label: 'Fatigue', category: 'physical' },
    { id: 'breast_tenderness', label: 'Breast Tenderness', category: 'physical' },
    { id: 'anxiety', label: 'Anxiety', category: 'emotional' },
    { id: 'irritability', label: 'Irritability', category: 'emotional' },
    { id: 'mood_swings', label: 'Mood Swings', category: 'emotional' },
    { id: 'cravings', label: 'Cravings', category: 'other' },
    { id: 'insomnia', label: 'Insomnia', category: 'other' },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSymptomToggle = (symptomId: string) => {
    setFormData(prev => {
      const symptoms = prev.symptoms.includes(symptomId)
        ? prev.symptoms.filter(id => id !== symptomId)
        : [...prev.symptoms, symptomId];
      return { ...prev, symptoms };
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      // In a real app, this would be an API call
      // await fetch('/api/daily-input', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData)
      // });
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setSuccess(true);
      setTimeout(() => setSuccess(false), 3000);
      
      // Reset form (except date)
      setFormData(prev => ({
        ...prev,
        flow: 'none',
        mood: 3,
        energy: 3,
        symptoms: [],
        notes: ''
      }));
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="card">
      <div className="mb-4">
        <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
          Date
        </label>
        <input
          type="date"
          id="date"
          name="date"
          value={formData.date}
          onChange={handleInputChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="flow" className="block text-sm font-medium text-gray-700 mb-1">
          Menstrual Flow
        </label>
        <select
          id="flow"
          name="flow"
          value={formData.flow}
          onChange={handleInputChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="none">None</option>
          <option value="light">Light</option>
          <option value="medium">Medium</option>
          <option value="heavy">Heavy</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Mood (1-5)
        </label>
        <div className="flex justify-between items-center">
          <span className="text-xs">Low</span>
          <input
            type="range"
            name="mood"
            min="1"
            max="5"
            value={formData.mood}
            onChange={handleInputChange}
            className="w-full mx-2"
          />
          <span className="text-xs">High</span>
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Energy (1-5)
        </label>
        <div className="flex justify-between items-center">
          <span className="text-xs">Low</span>
          <input
            type="range"
            name="energy"
            min="1"
            max="5"
            value={formData.energy}
            onChange={handleInputChange}
            className="w-full mx-2"
          />
          <span className="text-xs">High</span>
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Symptoms
        </label>
        <div className="grid grid-cols-2 gap-2">
          {symptomOptions.map(symptom => (
            <div key={symptom.id} className="flex items-center">
              <input
                type="checkbox"
                id={`symptom-${symptom.id}`}
                checked={formData.symptoms.includes(symptom.id)}
                onChange={() => handleSymptomToggle(symptom.id)}
                className="mr-2 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label htmlFor={`symptom-${symptom.id}`} className="text-sm text-gray-700">
                {symptom.label}
              </label>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-4">
        <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-1">
          Notes
        </label>
        <textarea
          id="notes"
          name="notes"
          value={formData.notes}
          onChange={handleInputChange}
          rows={3}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Any additional notes about your day..."
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full btn-primary flex justify-center items-center"
      >
        {loading ? (
          <span className="inline-block h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></span>
        ) : null}
        {loading ? 'Saving...' : 'Save Daily Entry'}
      </button>

      {success && (
        <div className="mt-4 p-2 bg-green-100 text-green-800 rounded-md text-center">
          Entry saved successfully!
        </div>
      )}
    </form>
  );
}