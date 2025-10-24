//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const hey = (message) => {
  const responses = {
    "Sure.": ["question"],
    "Whoa, chill out!": ["yell"],
    "Calm down, I know what I'm doing!": ["question", "yell"],
    "Fine. Be that way!": ["silence"],
    "Whatever.": ["anything"],
  }

  const conditions = {
    silence: true,
    yell: null,
    question: false,
  }
  for (let i = 0; i < message.length; i++) {
    const charCode = message.charCodeAt(i);

    // Is char between a to z
    if (charCode >= 97 && charCode <= 122) {
      conditions.yell = false;
    }

    if ((charCode >= 65 && charCode <= 90) && conditions.yell === null) {
      conditions.yell = true;
    }

    if (!isCharWhitespace(charCode)) {
      conditions.silence = false;
    }

    // Is the last char question mark
    if (charCode === 63) {
      let continueWithWhitespace = true;
      for (let j = i + 1; j < message.length; j++) {
        if (!isCharWhitespace(message.charCodeAt(j))) {
          continueWithWhitespace = false;
        };
      }

      if (continueWithWhitespace) { 
        conditions.question = true;
      }
    }
  }

  
  const activatedMessageTypes = Object.keys(conditions).filter(conditionName => conditions[conditionName]);
  const messageTypes = activatedMessageTypes.length ? activatedMessageTypes : ["anything"];

  return Object.entries(responses).find(([_, responseTypes]) => {
    return messageTypes.every(messageType => responseTypes.includes(messageType));
  })[0];
};

function isCharWhitespace(charCode) {
  return (charCode !== 32 && charCode !== 9 && charCode !== 10 && charCode !== 13) ? false : true;
}
