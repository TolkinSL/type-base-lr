enum StatusReq {
  Published = 'published',
  Draft = 'draft',
  Deleted = 'deleted',
}
async function getFaqs(req: { topicId: number; status?: StatusReq }): Promise<
  {
    question: string;
    answer: string;
    tags: string[];
    likes: number;
    status: StatusReq;
  }[]
> {
  const res = await fetch('/faqs', {
    method: 'POST',
    body: JSON.stringify(req),
  });

  const data = await res.json();
  return data;
}

/* Запрос */
const myReq = {
  topicId: 5,
  status: StatusReq.Published, // 'published', "draft", "deleted"
};

/* Ответ */
const myData = [
  {
    question: 'Как осуществляется доставка?',
    answer: 'быстро!',
    tags: ['popular', 'new'],
    likes: 3,
    status: 'published',
  },
];

const testReq = getFaqs(myReq);
