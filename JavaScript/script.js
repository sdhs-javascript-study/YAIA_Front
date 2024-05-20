document.querySelector(".posting").addEventListener("click", () => {
  const question = document.querySelector(".question").value.trim();
  const nickname = document.querySelector("#nickname").value.trim();

  if (!question && !nickname) {
    alert("질문과 닉네임을 입력하지 않았습니다.");
  } else if (!question) {
    alert("질문을 입력해주세요.");
  } else if (!nickname) {
    alert("닉네임을 입력해주세요.");
  } else {
    const options = {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
      timeZone: "Asia/Seoul",
    };
    const currentTime = new Date().toLocaleString("ko-KR", options);
    const postSection = document.getElementById("posts");
    postSection.classList.remove("hidden");

    postSection.innerHTML = `
            <span class="first_question">${question}</span>
            <div class="post_bundle">
                <img src="../img/green_user.png" alt="green_user" class="green_user">
                <span id="nickname_rabbit">${nickname}</span>
                <p class="date">${currentTime}</p>
            </div>
        `;
  }
});
