var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
    var info;

    if (req.url == '/') {//1. При получении такого запроса на url == '/'
        try {
            //Вместо запроса fs.readFileSync('index.html'); может быть запрос к базе данным
            info = fs.readFileSync('index.html');//2. Считывается файл index.html
        } catch (err) {
            console.error(err);
            res.statusCode = 500;
            res.end("На сервере произошла ошибка!")
            return;
        }

        res.end(info);//3. Выводится посетитель
    } else {/* 404 */}
}).listen(3000);

//Этот файл НЕ актуален в серверном окружении, когда нужно делать много вещей одновременно