var request=new XMLHttpRequest();
request.open("GET","https://api.spotify.com/v1/users/velu96/playlists",true);
request.send();
request.onload=function(){
     data=JSON.parse(this.response);
     console.log(data);
}