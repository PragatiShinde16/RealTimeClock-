setInterval(() => {
    d = new Date();
    hourtime = d.getHours();
    minutetime = d.getMinutes();
    secondtime = d.getSeconds();
    h_rotation = 30*hourtime + minutetime/2;
    m_rotation = 6*minutetime;
    s_rotation = 6*secondtime;

    hour.style.transform = `rotate(${h_rotation}deg)`;
    minute.style.transform = `rotate(${m_rotation}deg)`;
    second.style.transform = `rotate(${s_rotation}deg)`;
}, 1000);