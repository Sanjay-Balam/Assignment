export interface Patient {
    id: string;
    name: string;
    gender: string;
    age: number;
    dateOfBirth: string;
    contactInfo: {
      primary: string;
      emergency: string;
    };
    insurance: {
      provider: string;
    };
    diagnosis_history: Array<{
      month: string;
      year: number;
      blood_pressure: {
        systolic: {
          value: number;
          levels: string;
        };
        diastolic: {
          value: number;
          levels: string;
        };
      };
      heart_rate: {
        value: number;
        levels: string;
      };
      respiratory_rate: {
        value: number;
        levels: string;
      };
      temperature: {
        value: number;
        levels: string;
      };
    }>;
    labResults: Array<{
      type: string;
      url: string;
    }>;
}
  
  