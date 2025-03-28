"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var StatusReq;
(function (StatusReq) {
    StatusReq["Published"] = "published";
    StatusReq["Draft"] = "draft";
    StatusReq["Deleted"] = "deleted";
})(StatusReq || (StatusReq = {}));
function getFaqs(req) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield fetch('/faqs', {
            method: 'POST',
            body: JSON.stringify(req),
        });
        const data = yield res.json();
        return data;
    });
}
/* Запрос */
const myReq = {
    topicId: 5,
    status: 'published', // "draft", "deleted"
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
