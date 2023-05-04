const observer = new IntersectionObserver((e) => {
    e.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        } else {
            entry.target.classList.remove("show");
        }
    });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));

const hiddenelements = document.querySelectorAll(".skillHidden");
hiddenelements.forEach((el) => observer.observe(el));

function easteregg() {
    alert("🎉축하드립니다 당신은 이스터에그를 발견하셨습니다!!");
}

function githubLink() {
    var github = "http://github.com/Dalkubi";
    window.open(github);
}

function emailLink() {
    window.location.href = "dydvy08@naver.com";
}

function discordLink() {
    var discord = "https://discord.com/users/416825253868863489";
    window.open(discord);
}
