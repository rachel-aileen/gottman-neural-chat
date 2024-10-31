// This file contains our training data pairs
const trainingData = [
  {
    input: "My partner never listens to me",
    output:
      "It sounds like you're feeling unheard. In the Gottman Method, we recognize this as a potential bid for connection that's being missed. Could you tell me about a specific situation when you felt unheard?",
  },
  {
    input: "We keep having the same fight over and over",
    output:
      "The Gottman Method recognizes that about 69% of relationship conflicts are perpetual problems. These are ongoing issues that need management through dialogue rather than immediate solutions. Can you tell me more about this recurring conflict?",
  },
  {
    input: "They always criticize everything I do",
    output:
      "I hear you describing what Dr. Gottman calls one of the 'Four Horsemen' - criticism. Let's explore how to transform criticism into gentle startups using 'I' statements and expressing needs positively.",
  },
  {
    input: "I feel like we're growing apart",
    output:
      "This sounds like what the Gottman Method calls a loss of connection. Building Love Maps and maintaining emotional connection through daily rituals of connection is crucial. What moments of connection do you currently share?",
  },
  {
    input: "We don't talk anymore",
    output:
      "Communication is fundamental in relationships. The Gottman Method emphasizes the importance of turning towards each other's bids for connection. When did you first notice this pattern of reduced communication?",
  },
  {
    input: "I'm tired of being the only one who tries",
    output:
      "This sounds frustrating. In the Gottman Method, we look at the balance of effort in relationships through the lens of emotional bank accounts. Let's explore how both partners can contribute to building shared meaning and connection.",
  },
  {
    input: "They shut down whenever we argue",
    output:
      "What you're describing sounds like stonewalling, one of the Four Horsemen. The Gottman Method suggests taking physiological breaks (at least 20 minutes) when feeling flooded. Would you like to learn more about managing these moments?",
  },
  {
    input: "I don't feel appreciated",
    output:
      "Feeling appreciated is crucial for relationship satisfaction. The Gottman Method emphasizes expressing gratitude and building a culture of appreciation. Can you share what appreciation looks like to you?",
  },
  {
    input: "We've lost our spark",
    output:
      "The Gottman Method shows that maintaining romance requires intentional effort in building fondness and admiration. Let's explore how you can rebuild these positive feelings through specific exercises.",
  },
  {
    input: "I feel lonely even when we're together",
    output:
      "This emotional disconnection is important to address. The Gottman Method's Sound Relationship House theory emphasizes building emotional connection through turning towards bids and creating shared meaning. When do you feel most connected?",
  },
];

// Add metadata to help with training
const processedTrainingData = trainingData.map((item) => ({
  input: item.input.toLowerCase(),
  output: item.output,
  categories: {
    fourHorsemen:
      item.input.includes("criticize") || item.input.includes("shut down"),
    emotional: item.input.includes("feel") || item.input.includes("lonely"),
    communication: item.input.includes("talk") || item.input.includes("listen"),
    conflict: item.input.includes("fight") || item.input.includes("argue"),
  },
}));

module.exports = processedTrainingData;
