import { calculateTotalScore, calculatePercentage, isPassed, getGrade, countWrongAnswers } from './quizScore';

describe('Quiz Score', () => {
  let quizAnswers;

  beforeEach(() => {
    // TODO: Maak hier een array met quiz antwoorden
    quizAnswers = [
      { question: 1, isCorrect: true, points: 10 },
      { question: 2, isCorrect: true, points: 10 },
      { question: 3, isCorrect: false, points: 0 },
      { question: 4, isCorrect: true, points: 10 },
      { question: 5, isCorrect: true, points: 10 }
    ];
  });

  // VOORBEELD - Deze test is al ingevuld
  test('VOORBEELD: calculateTotalScore telt punten op', () => {
    const answers = [
      { question: 1, isCorrect: true, points: 10 },
      { question: 2, isCorrect: true, points: 15 }
    ];
    expect(calculateTotalScore(answers)).toBe(25);
  });

  test('calculatePercentage berekent juiste percentage', () => {
    // TODO: Gebruik quizAnswers uit beforeEach
    // TODO: Met 4 van 5 goed moet het 80% zijn

    const result = calculatePercentage(quizAnswers)
    expect(result).toBe(80); // Deze test faalt! Vervang met je eigen test
  });

  test('isPassed geeft true bij 60% of hoger', () => {
    // TODO: Gebruik quizAnswers (80% goed)
    // TODO: Check of isPassed true teruggeeft
    const result = isPassed(quizAnswers)

    expect(result).toBe(true); // Deze test faalt! Vervang met je eigen test
  });

  test('isPassed geeft false bij lager dan 60%', () => {
    // TODO: Maak nieuwe answers array met 50% goed
    // TODO: Check of isPassed false teruggeeft
    const lowScore = [
      { question: 1, isCorrect: true, points: 10 },
      { question: 2, isCorrect: false, points: 0 }
    ]
    const result = isPassed(lowScore)
    expect(result).toBe(false); // Deze test faalt! Vervang met je eigen test
  });

  test('getGrade geeft Excellent bij 90%+', () => {
    // TODO: Maak answers met 90% of meer goed
    // TODO: Check of getGrade 'Excellent' teruggeeft
    const excellentAnswers = [
      { question: 1, isCorrect: true, points: 10 },
      { question: 2, isCorrect: true, points: 10 },
      { question: 3, isCorrect: true, points: 10 },
      { question: 4, isCorrect: true, points: 10 },
      { question: 5, isCorrect: false, points: 0 },
      { question: 6, isCorrect: true, points: 10 },
      { question: 7, isCorrect: true, points: 10 },
      { question: 8, isCorrect: true, points: 10 },
      { question: 9, isCorrect: true, points: 10 },
      { question: 10, isCorrect: true, points: 10 }
    ];

    const result = getGrade(excellentAnswers)
    expect(result).toBe("Excellent"); // Deze test faalt! Vervang met je eigen test
  });

  test('getGrade geeft Goed bij 75-89%', () => {
    // TODO: Gebruik quizAnswers (80% goed)
    // TODO: Check of getGrade 'Goed' teruggeeft
    const result = getGrade(quizAnswers)
    expect(result).toBe("Goed"); // Deze test faalt! Vervang met je eigen test
  });

  test('countWrongAnswers telt foute antwoorden', () => {
    // TODO: Gebruik quizAnswers (1 fout antwoord)
    // TODO: Check of countWrongAnswers 1 teruggeeft
    const result = countWrongAnswers(quizAnswers)
    expect(result).toBe(1); // Deze test faalt! Vervang met je eigen test
  });

});