// Helper function to identify key themes in input
identifyThemes(text);
const themes = {
  fourHorsemen: [
    "criticize",
    "criticism",
    "contempt",
    "defensive",
    "stonewalling",
    "shut down",
  ],
  emotional: ["feel", "emotion", "lonely", "sad", "angry", "hurt"],
  communication: ["talk", "listen", "communicate", "say", "tell"],
  conflict: ["fight", "argue", "conflict", "disagree", "problem"],
};

const processedText = text.toLowerCase();
const identifiedThemes = {};

for (const [theme, keywords] of Object.entries(themes)) {
  identifiedThemes[theme] = keywords.some((keyword) =>
    processedText.includes(keyword)
  );
}

return identifiedThemes;

module.exports = TextPreprocessor;
