import responses from './qna_samples.json';
export const getResponse = (question) => {
  console.log(question, responses);
  const response = responses.find((r) => r.question.toLowerCase() === question.toLowerCase());
  return response ?? null;
};
