fetch("./jet-pig.apk.sha256").then(r => r.ok ? r.text() : Promise.reject()).then(t => {
  document.getElementById("sha").textContent = t.trim().split(/\s+/)[0];
}).catch(() => { document.getElementById("sha").textContent = "未公開"; });
