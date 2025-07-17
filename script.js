
const message = "풋살장에도 없다면.. 아마 테니스장일거에요! 풋살장에 가기 전에 제가 테니스장에 잠깐 들렸었거든요. 부탁드립니다!!";
let index = 0;
const speed = 60;

function typeWriter() {
  if (index < message.length) {
    document.getElementById("message").innerHTML += message.charAt(index);
    index++;
    setTimeout(typeWriter, speed);
  }
}

window.onload = typeWriter;
