<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<style>
    body{
        background-color:#242E55;
        color:white;
        text-align:center;
        font-size:x-large;
        font-family:'Muli',sans-serif;
        
    }
    .container{
        margin: 20%;
    }
</style>
<body>
    <div class="container">
        <p>This page has</p>
    <h1 id="count">0</h1>
    <p>Views</p>
    </div>
    

    <script>
        const count=document.getElementById("count");
        updatevisitcount();
        function updatevisitcount()
        {
            fetch('https://api.countapi.xyz/update/Aniket/youtube/?amount=1')
            .then(res=>res.json())
            .then(res=>{
                count.innerHTML=res.value;
            })
        }
    </script>
</body>
</html>