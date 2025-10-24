//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const hey = (message) => {
  const isQuestion = message.trim().endsWith('?');
  const isUpperCase = /[a-zA-Z]/g.test(message) && message === message.toUpperCase();
  const isEmpty = message.trim().length === 0;

  if (isQuestion && isUpperCase) {
    return "Calm down, I know what I'm doing!";
  } else if (isQuestion) {
    return "Sure.";
  } else if (isUpperCase) {
    return "Whoa, chill out!";
  } else if (isEmpty) {
    return "Fine. Be that way!";
  } else {
    return "Whatever.";
  }
};
