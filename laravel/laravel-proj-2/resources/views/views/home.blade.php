<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>home</title>
    <link rel="stylesheet" href="../sass/app.scss">
</head>
<body>
    <h1>Hello: 
        @if ($nome)
        {{$nome}}
        @else
            noname
        @endif
    </h1>
</body>
</html>