import { moduleTest } from "./moduleEs6.js";
import { test } from "./test.ts";
import "./index.css"
const input = document.querySelectorAll('input')[0];
const submit = document.querySelectorAll('input')[1];

var test = [];

submit.addEventListener('click', (event) => {
    event.preventDefault();
    const usernameValue = input.value;
    const date = new Date(Date.now() + 874e5)
    const expDate = (date.toUTCString())
    document.cookie = `username=${usernameValue}; expires=${expDate}`
})

const cookieUsername = document.cookie.slice('username='.length);

if (cookieUsername) {
    alert(`Hello ${cookieUsername} тест`)
}

moduleTest();
test();
