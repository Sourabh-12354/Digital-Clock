setInterval(()=>{
    var date = new Date();
    var htime = date.getHours();
    var mtime = date.getMinutes();
    var stime = date.getSeconds();

    var session = "AM";

    if(htime==0)
    {
        htime=12;
    }

    if(htime>12)
    {
        htime-=12;
        session="PM";
    }

    if(htime<10)
    {
        htime = "0" + htime;
    }
    if(mtime<10)
    {
        mtime = "0" + mtime;
    }
    if(stime<10)
    {
        stime = "0" + stime;
    }

    var time = htime + ":" + mtime + ":" + stime + " " + session;
    document.getElementById("clockDisplay").innerText = time;
    console.log(time);

},1000);