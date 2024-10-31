const brain = require("brain.js");
const TextPreprocessor = require("../utils/preprocessor");

class GottmanNetwork {
  constructor() {
    this.network = new brain.recurrent.LSTM();
    this.preprocessor = new TextPreprocessor();
    this.trained = false;
    this.trainingData = require("../training/trainingData");
  }

  async train() {
    if (this.trained) return;

    console.log("Training network...");

    // Preprocess training data
    const processedData = this.trainingData.map((item) => ({
      input: this.preprocessor.preprocess(item.input),
      output: item.output,
    }));

    // Train the network
    try {
      await this.network.train(processedData, {
        iterations: 1000,
        errorThresh: 0.011,
        log: true,
        logPeriod: 100,
        learningRate: 0.01,
      });

      this.trained = true;
      console.log("Training complete");
    } catch (error) {
      console.error("Training failed:", error);
      throw error;
    }
  }

  async getResponse(input) {
    if (!this.trained) {
      await this.train();
    }

    try {
      // Preprocess input
      const processedInput = this.preprocessor.preprocess(input);

      // Identify themes
      const themes = this.preprocessor.identifyThemes(input);

      // Get base response from network
      let response = await this.network.run(processedInput);

      // If no good response, use fallback based on themes
      if (!response || response.length < 10) {
        response = this.getFallbackResponse(themes);
      }

      return response;
    } catch (error) {
      console.error("Error getting response:", error);
      return this.getDefaultResponse();
    }
  }

  getFallbackResponse(themes) {
    if (themes.fourHorsemen) {
      return "I notice some challenging patterns in what you're describing. The Gottman Method identifies these as part of the 'Four Horsemen'. Would you like to explore healthier communication alternatives?";
    }
    if (themes.emotional) {
      return "Your feelings are valid and important. The Gottman Method emphasizes emotional connection as a cornerstone of strong relationships. Could you tell me more about these emotions?";
    }
    if (themes.communication) {
      return "Communication is key in relationships. The Gottman Method offers specific tools for improving dialogue. Would you like to learn about some of these techniques?";
    }
    if (themes.conflict) {
      return "Conflict is natural in relationships. The Gottman Method shows that 69% of relationship problems are perpetual. Let's explore how to manage this conflict constructively.";
    }
    return this.getDefaultResponse();
  }

  getDefaultResponse() {
    return "I'm here to help using principles from the Gottman Method. Could you tell me more about your situation?";
  }
}

module.exports = GottmanNetwork;
