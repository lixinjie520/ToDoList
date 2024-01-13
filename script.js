// 獲取輸入框和清單盒子
const inputBox = document.querySelector('#input-box')
const listContainer = document.querySelector('#list-container')
const btn = document.querySelector('button')
// 點擊button 渲染頁面
function addTask() {
    // 若輸入為空則跳出警示
    if (inputBox.value.trim() === '') {
        alert('You must write something!')
    } else {
        // 若輸入不為空 則創建一個li
        let li = document.createElement('li')
        // 添加 li 的內容
        li.innerHTML = inputBox.value
        // 將 li 追加給ul
        listContainer.appendChild(li)
        // 創建一個 span 放 x
        let span = document.createElement('span')
        span.innerHTML = '\u00d7'
        // 將 span 追加給 li
        li.appendChild(span)
    }
    // 清空輸入框
    inputBox.value = ''
    // call function to save data
    saveData()
}
// 為清單添加監聽事件
listContainer.addEventListener('click', function (e) {
    // 若點擊 li 則選中當前的 li 添加中劃線 並 打鉤 可切換
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checked')
        saveData()
    } else if (e.target.tagName === 'SPAN') {
        // 若點擊 span 則移除 它的父親 li 
        // 跳出提出 確認是否要刪除
        if (confirm('Are you sure to delete?')) {
            e.target.parentElement.remove()
            saveData()
        }
    }
}, false);
// 儲存代辦清單
function saveData() {
    localStorage.setItem('data', listContainer.innerHTML)
}
// 獲取代辦清單
function showTask() {
    listContainer.innerHTML = localStorage.getItem('data')
}
showTask()

// 添加鍵盤事件
inputBox.addEventListener('keyup', function (e) {
    if (e.key === 'Enter') {
        addTask()
    }
})