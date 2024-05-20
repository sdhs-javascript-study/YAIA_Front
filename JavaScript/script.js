document.querySelector(".posting").addEventListener("click", () => {
  const question = document.querySelector(".question").value.trim();
  const nickname = document.querySelector("#nickname").value.trim();

  if (!question && !nickname) {
    alert("질문과 닉네임을 입력하지 않았습니다.");
    return;
  }

  if (!question) {
    alert("질문을 입력해주세요.");
    return;
  }

  if (!nickname) {
    alert("닉네임을 입력해주세요.");
    return;
  }

  const currentTime = new Date().toLocaleString("ko-KR", {
    timeZone: "Asia/Seoul",
  });
  const postSection = document.getElementById("posts");
  postSection.classList.remove("hidden");

  postSection.innerHTML = `
                <span class="first_question">${question}</span>
                <div class="post_bundle">
                    <img src="../img/green_user.png" alt="green_user" class="green_user"> <!-- 이미지 위치 변경 -->
                    <span id="nickname_rabbit">${nickname}</span>
                    <p class="date">${currentTime}</p>
                </div>
            `;
});
