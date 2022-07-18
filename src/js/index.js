const $ = (selector) => document.querySelector(selector);



function App(){
    //Form 태그 자동 전송을 막아준다.
    $("#espresso-menu-form").addEventListener('submit', (e) => {
        e.preventDefault();
    })
    //메뉴의 이름을 입력 받는건
    $("#espresso-menu-name").addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            const espressoMenuName = $("#espresso-menu-name").value;
            const menuItemTamplate = (espressoMenuName) => {
            return `
            <li class="menu-list-item d-flex items-center py-2">
            <span class="w-100 pl-2 menu-name">${espressoMenuName}</span>
            <button
              type="button"
              class="bg-gray-50 text-gray-500 text-sm mr-1 menu-edit-button"
            >
              수정
            </button>
            <button
              type="button"
              class="bg-gray-50 text-gray-500 text-sm menu-remove-button"
            >
              삭제
            </button>
          </li>`;
        };

        $("#espresso-menu-list").insertAdjacentHTML('beforeend', menuItemTamplate(espressoMenuName));
        };

        const menuCount =  $("#espresso-menu-list").querySelectorAll("li").length;
        $(".menu-count").innerText  = `총 ${menuCount} 개`
    } )
}

App();