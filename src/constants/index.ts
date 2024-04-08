export const categoryOptions = [
  {
    value: "computer_science",
    option: "Computer Science",
  },
  {
    value: "arts_and_literature",
    option: "Arts & Literature",
  },
  {
    value: "music",
    option: "Music",
  },
  {
    value: "sport_and_leisure",
    option: "Sport & Leisure",
  },
  {
    value: "science",
    option: "Science",
  },
];

export const difficultyOptions = [
  {
    value: "easy",
    option: "Easy",
  },
  {
    value: "medium",
    option: "Medium",
  },
  {
    value: "hard",
    option: "Hard",
  },
];

export const alphabeticNumeral = (index: number) => {
  const asciiCode = index + 65;
  const letter = String.fromCharCode(asciiCode);
  return letter + ". ";
};

export const showCategory = (category: string) => {
  if (category === "computer_science") return "Computer Science";
  else if (category === "science") return "Science";
  else if (category === "sport_and_leisure") return "Sports & Leisure";
  else if (category === "music") return "Music";
  else if (category === "society_and_culture") return "Society & Culture";
  else if (category === "arts_and_literature") return "Arts & Literture";
};
