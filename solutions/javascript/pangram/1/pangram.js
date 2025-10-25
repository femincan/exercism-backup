//
// This is only a SKELETON file for the 'Pangram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isPangram = (str) => {
  const letterStatus = Array.from({ length: 26 }, () => false);
  for (let i = 0; i < str.length; i++) {
    const charCode = str.charCodeAt(i);

    // Between a-z
    if (charCode >= 97 && charCode <= 122) {
      letterStatus[charCode - 97] = true;
    }

    // Between A-Z
    if (charCode >= 65 && charCode <= 90) {
      letterStatus[charCode - 65] = true;
    }
  }

  return letterStatus.every(Boolean);
};
