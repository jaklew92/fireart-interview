type GetPayload = {
  amount: number;
  difficulty: 'easy' | 'hard';
};

export async function apiGetQuestions(payload: GetPayload) {
  const response = await fetch(
    `https://opentdb.com/api.php?amount=${payload.amount}&difficulty=${payload.difficulty}&type=boolean`,
    {method: 'GET'},
  );
  const {status} = response;
  const {results} = await response.json();
  return {results, status};
}
