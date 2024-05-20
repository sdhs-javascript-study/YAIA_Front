document.querySelector(".posting").addEventListener("click", () => {
  const question = document.querySelector(".question").value;
  const nickname = document.querySelector("#nickname").value || "익명";
  const currentTime = new Date().toLocaleString("ko-KR", {
    timeZone: "Asia/Seoul",
  });

  const postSection = document.getElementById("posts");
  if (postSection) {
    postSection.insertAdjacentHTML(
      "beforeend",
      `
                    <div class="post_bundle">
                        <img src="../img/green_user.png" alt="green_user" class="green_user"> <!-- 이미지 위치 변경 -->
                        <div class="post_content">
                            <span>${nickname}</span>
                            <p>${question}</p>
                        </div>
                        <div class="post_actions">
                            <p class="date">${currentTime}</p>
                        </div>
                    </div>
                `
    );
  }
});
