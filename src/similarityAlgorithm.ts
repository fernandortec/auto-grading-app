function editDistance(s1: string, s2: string): number {
  s1 = s1.toLowerCase();
  s2 = s2.toLowerCase();

  var costs = new Array();
  for (var i = 0; i <= s1.length; i++) {
    var lastValue = i;
    for (var j = 0; j <= s2.length; j++) {
      if (i == 0) costs[j] = j;
      else {
        if (j > 0) {
          var newValue = costs[j - 1];
          if (s1.charAt(i - 1) != s2.charAt(j - 1))
            newValue = Math.min(Math.min(newValue, lastValue), costs[j]) + 1;
          costs[j - 1] = lastValue;
          lastValue = newValue;
        }
      }
    }
    if (i > 0) costs[s2.length] = lastValue;
  }
  return costs[s2.length];
}

export function similarityAlgorithm(s1: string, s2: string) {
  var longer = s1;
  var shorter = s2;
  if (s1.length < s2.length) {
    longer = s2;
    shorter = s1;
  }
  var longerLength = longer.length;
  if (longerLength == 0) {
    return 1.0;
  }
  const similarity =  (longerLength - editDistance(longer, shorter)) /
    parseFloat(longerLength as unknown as string)
  
  return Math.round(similarity * 100)
}

export function generateAnswerBasedOnSimilarity(similarity: number): string {
  let actualAnswer: string = "Resposta ";

  if (similarity >= 85)
    actualAnswer += `CORRETA com ${similarity}% de probabilidade de acerto`;
  else if (similarity >= 75)
    actualAnswer += `PROVAVELMENTE CORRETA com ${similarity}% de probabilidade de acerto`;
  else if (similarity < 75 && similarity >= 50)
    actualAnswer += `POSSIVELMENTE CORRETA com ${similarity}% de acerto`;
  else if (similarity < 50 && similarity >= 25)
    actualAnswer += `PROVAVELMENTE INCORRETA com apenas ${similarity}% de acerto`;
  else if (similarity < 25)
    actualAnswer += `INCORRETA com apenas ${similarity}% de acerto`;

  return actualAnswer;
}
