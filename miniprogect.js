// В index.html
// 1 отримати масив об'єктів з endpoint`а https://jsonplaceholder.typicode.com/users
// 2 Вивести id,name всіх user в index.html. Окремий блок для кожного user.
// 3 Додати кожному блоку кнопку/посилання , при кліку на яку відбувається перехід  на сторінку user-details.html, котра має детальну інфорацію про об'єкт на який клікнули
//
let users=fetch('http://jsonplaceholder.typicode.com/users')
    .then(value => value.json())
    .then(users=> {
        for (const user of users) {
            let div =document.createElement('div')
            div.classList.add('users')
            let div2=document.createElement('div')
            div.classList.add('user')
            div2.innerText=`${user.id}-${user.name}`
            div.appendChild(div2);
            let div3=document.createElement('div')
            div.classList.add('knopka')
            div.appendChild(div3);
            let butt2=document.createElement('button')
            let a=document.createElement('a')
            a.innerText='more'
            a.href='http://localhost:63342/miniProjectKyreya/userdetails.html?data='+JSON.stringify(user);
            butt2.appendChild(a)
            div3.appendChild(butt2)
            document.body.appendChild(div)


            ;}})
;


// На странице user-details.html:
// 4 Вивести всю, без виключення, інформацію про об'єкт user на який клікнули
// 5 Додати кнопку "post of current user", при кліку на яку, з'являються title всіх постів поточного юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
//     6 Каждому посту додати кнопку/посилання, при кліку на яку відбувається перехід на сторінку post-details.html, котра має детальну інфу про поточний пост.
//
//     На странице post-details.html:
// 7 Вивести всю, без виключення, інформацію про об'єкт post на який клікнули .
// 8 Нижчє інформаці про пост, вивести всі коментарі поточного поста (ендпоінт  - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)
//
// Стилизація проєкта -
// index.html - всі блоки з user - по 2 в рядок. кнопки/аосилвння розташувати під інформацією про user.
//     user-details.html - блок з інфою про user зверху сторінки. Кнопка нижчє, на 90% ширини сторінки, по центру.
//     блоки з короткою іфною про post - в ряд по 5 .
//     po st-details.html - блок з інфою про пост зверху. Коментарі - по 4 в ряд.
//     Всі елементи котрі характеризують users, posts, comments візуалізувати, так, щоб було видно що це блоки (дати фон. марджини і тд)